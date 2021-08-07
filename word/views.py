from django.core import serializers
from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from .models import Word, WordForm
from sqlalchemy import create_engine
import pandas as pd
from datetime import datetime
from pytz import timezone
import json
from django.http import HttpResponse
from .models import Word

#홈페이지
def home_page(request):
    return render(request, 'word/home.html')

def class_home(request, Class):
    return render(request, 'word/class_home.html')

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

    return HttpResponse(json.dumps(content, ensure_ascii = False), content_type='application/json')


def class_home_data(request, Class):
    words = Word.objects.filter(user=request.user.username).filter(Class = Class)
    word = Word.objects.filter(user=request.user.username)

    class_info = return_class_info(user_class_list(request), word)[Class]
    
    content = {
        'words': serializers.serialize('json', words),
        'class_info': class_info,
    }

    return HttpResponse(json.dumps(content, ensure_ascii = False), content_type='application/json')








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



def word_detail(request, Class, id):
    if request.method == 'PUT':
        word = Word.objects.get(id=id)
        post_form = WordForm(request.POST, instance=word)
        post_form = post_form.save(commit=False)
        post_form.user = request.user.username
        post_form.save()
        return redirect('word:class-home', Class=Class)

    elif request.method == 'DELETE':
        word = Word.objects.get(id=id)
        word.delete()
        return redirect('word:home-page')

    elif request.method == 'GET':
        word_all = Word.objects.all()
        word_all_json = serializers.serialize('json', word_all)
        return HttpResponse(word_all_json, content_type='application/json')









#range함수를 list로 형변환 하면 될거 같은데
def list_len(list, num):
    new_list = []
    if num == 0:
        for i in range(len(list)):
            new_list.append(str(i))
    else:
        for i in range(1, len(list) + 1):
            new_list.append(str(i))
    return new_list

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