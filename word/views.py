from django.core import serializers
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from .models import Word, WordForm
from sqlalchemy import create_engine
import pandas as pd
from django.http import HttpResponse
from .models import Word, trainingSet
import json


def create_training_set(request):
    #만약 method가 POST라면 request로 넘어온 값들을 데이터베이스에 저장
    if request.method == 'POST':
        #form에서 넘어온 값의 저장을 보류하고, memorize와 user를 추가한 후 저장한다.
        data = json.loads(request.body)
        trainingSetTitle = data['trainingSetTitle']
        trainingSetExplanation = data['trainingSetExplanation']
        words = data['words']

        create_trainingSet = trainingSet(
            user_id = request.user.id,
            title = trainingSetTitle,
            explanation = trainingSetExplanation,
            words_length = len(words)
        )
        create_trainingSet.save()
        created_trainingSet_id = create_trainingSet.id

        for word in words: 
            Word(
                key = word['key'],
                value = word['value'],
                trainingSet_id = created_trainingSet_id
            ).save()

        # post_form = WordForm(request.POST)
        # post_form.memorize = '0'
        # post_form.user = request.user.username
        # post_form.save()

        return JsonResponse({'state': 'success'})

#데이터 로드
def home_page_data(request):
    #상단에 사용자 이름을 나타내기위해 변수에 지정
    user_id = request.user.id
    #유저의 단어를 변수에 지정
    # word = Word.objects.filter(user=user)
    user_trainingSet_list = trainingSet.objects.filter(user_id=user_id)
    print('user_trainingSet_list', user_trainingSet_list)
    print(len(user_trainingSet_list))

    class_info = {}
    for i in range(len(user_trainingSet_list)):
        class_info[user_trainingSet_list[i].title] = {
            'user': request.user.username,
            'words_length': user_trainingSet_list[i].words_length
        }
    print(class_info)

    return JsonResponse(class_info)

def class_home_data(request, Class):
    words = Word.objects.filter(user=request.user.username).filter(Class = Class)
    
    content = serializers.serialize('json', words)


    return HttpResponse(content)

def word_detail(request, Class, id):
    if request.method == 'POST':
        word = Word.objects.get(id=id)
        post_form = WordForm(json.loads(request.body), instance=word)
        post_form = post_form.save(commit=False)
        post_form.user = request.user.username
        post_form.save()

        words = Word.objects.filter(Class=Class)

        content = serializers.serialize('json', words)
        
        return HttpResponse(content)

    elif request.method == 'DELETE':
        word = Word.objects.get(id=id)
        word.delete()
        return redirect('word:home-page')

    elif request.method == 'GET':
        word = Word.objects.get(id=id)
        word_json = serializers.serialize('json', [word, ])
        content = {
            'word': word_json
        }
        return JsonResponse(content)





#모든 class_info를 리턴
def return_class_info(user_class_list, word):
    class_info = {}

    for Class in user_class_list:
        class_data = word.filter(Class = Class)
        class_user = class_data[0].user

        class_info[Class] = {}
        class_info[Class]['user'] = class_user

        class_info[Class]['word_len'] = len(class_data)
    return class_info



#db.sqlite3의 word_word테이블을 리턴하는 함수
def user_class_list(request):
    user = request.user.username

    #클래스별로 단어를 나누기위해 db.sqlit3를 불러옴
    #sqlite:////home/hjune/english/db.sqlite3
    engine = create_engine("sqlite:////Users/cubest_june/hj-django/english/db.sqlite3")

    with engine.connect() as conn, conn.begin():
        data = pd.read_sql_table("word_word", conn)
    user_data = data[data['user'] == user]
    user_class_list = user_data['Class'].unique()
    return user_class_list

#특정 값을 특정 값으로 바꾸는 함수로 바꾸면 좋겠음.
def underscore_to_space(value):
    if value:
        split_value = value.split('_')
        new_str = ''

        for i in range(len(split_value)):
            new_str += split_value[i]
            if i < len(split_value) - 1:
                new_str += ' '

        return new_str
    else:
        return 'underscore_to_space error: vlaue is none'
