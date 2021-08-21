from django.core import serializers
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from .models import Word, WordForm
from sqlalchemy import create_engine
import pandas as pd
from django.http import HttpResponse
from .models import Word
import json

def render_create_training_set(request): 
    content = {
		    'range_5': [0, 1, 2, 3, 4]
		    }
    return render(request, 'word/create_training_set.html', content)
def create(request):
    #만약 method가 POST라면 request로 넘어온 값들을 데이터베이스에 저장
    if request.method == 'POST':
        #form에서 넘어온 값의 저장을 보류하고, memorize와 user를 추가한 후 저장한다.
        post_form = WordForm(request.POST)
        post_form = post_form.save(commit=False)
        post_form.memorize = '0'
        post_form.user = request.user.username
        post_form.save()

        return redirect('word:home-page')
    elif request.method == 'GET':
        return render(request, 'word/forms.html')

#데이터 로드
def home_page_data(request):
    #상단에 사용자 이름을 나타내기위해 변수에 지정
    user = request.user.username
    #유저의 단어를 변수에 지정
    word = Word.objects.filter(user=user)

    class_list = list(user_class_list(request))
    class_info = return_class_info(class_list, word)

    content = {
        'class_info': class_info,
        'user_class_list': class_list,
    }

    return JsonResponse(content)


def class_home_data(request, Class):
    words = Word.objects.filter(user=request.user.username).filter(Class = Class)
    word = Word.objects.filter(user=request.user.username)

    class_info = return_class_info(user_class_list(request), word)[Class]
    # print(len(word))

    
    content = {
        'words': serializers.serialize('json', words),
        'class_info': json.dumps(class_info),
    }

    return JsonResponse(content)

def word_detail(request, Class, id):
    if request.method == 'POST':
        word = Word.objects.get(id=id)
        post_form = WordForm(json.loads(request.body), instance=word)
        post_form = post_form.save(commit=False)
        post_form.user = request.user.username
        post_form.save()

        new_word = Word.objects.get(id=id)

        content = {
            "word": serializers.serialize('json', [new_word, ]),
        }
        return JsonResponse(content)

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
