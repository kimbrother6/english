from django.contrib.auth.models import User
from django.core import serializers
from django.forms.utils import pretty_name
from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from .models import Word, WordForm
from sqlalchemy import create_engine
import pandas as pd
from datetime import datetime, timedelta
from pytz import timezone
import json

#클래스별로 단어를 나누기위해 db.sqlit3를 불러옴
#sqlite:////home/hjune/english/db.sqlite3

engine = create_engine(
    "sqlite:////Users/cubest_june/hj-django/english/db.sqlite3")

#홈페이지
def word_home_page(request):
    #상단에 사용자 이름을 나타내기위해 변수에 지정
    user = request.user.username
    #유저의 단어를 변수에 지정
    word = Word.objects.filter(user=user)

    # 단어를 작성후 특정 날짜가 지난 단어의 날짜를 알려줌(?)
    today = datetime.now(timezone('Asia/Seoul'))
    #오늘 몇개의 단어를 추가했는지를 변수에 저장
    today_post_len = len(word.filter(dt_created=today))

    #user_class_list는 어떤 클래스가 있는지 리스트로 넘겨줌
    data = load_DB_Data()
    user_data = data[data['user'] == user]
    user_class_list = user_data['Class'].unique()

    #만약 아무런 단어가 없다면 단어추가를 추천하는 html랜더
    if len(word) == 0:
        return render(request, 'word/no_data.html')
    else:
        return render(request, 'word/home.html', {'word': word, 'class_list': user_class_list, 'today_post_len': today_post_len})

def word_home_page_ajax(request):
    #상단에 사용자 이름을 나타내기위해 변수에 지정
    user = request.user.username
    #유저의 단어를 변수에 지정
    word = Word.objects.filter(user=user)
    today = datetime.now(timezone('Asia/Seoul'))
    today_post_len = len(word.filter(dt_created=today))


    data = load_DB_Data()
    user_data = data[data['user'] == user]
    user_class_list = user_data['Class'].unique()

    #클래스별 작성자, 클래스 단어의 수를 class_info에 넣어 js파일로 보내줌
    class_info = {}

    for Class in user_class_list:
        class_data = word.filter(Class = Class)
        class_user = class_data[0].user

        class_info[Class] = {}
        class_info[Class]['user'] = class_user

        class_info[Class]['word_len'] = len(class_data)


    content = {
      'class_info': class_info,
      'user_class_list': list(user_class_list),
      'today_post_len': today_post_len,
      }

    return HttpResponse(json.dumps(content, ensure_ascii = False), content_type='application/json')

def class_home(request, Class):
    words = Word.objects.filter(user=request.user.username).filter(Class = Class)

    return render(request, 'word/class_home.html', {'words': words, 'Class': Class})

#db.sqlite3의 word_word테이블을 리턴하는 함수
def load_DB_Data():
    with engine.connect() as conn, conn.begin():
        data = pd.read_sql_table("word_word", conn)
    return data

#새로운 단어를 생성
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
    else:
        form = WordForm
        return render(request, 'word/forms.html', {'form': form})


def word_card(request, Class, memorize, ):
    words = Word.objects.filter(user=request.user.username).filter(Class=Class)

    #memorize에 따라 디스플레이 해주는 것이라면 memorize에 따라 분류
    if memorize != 'none':
        words = words.filter(memorize=memorize)

    words_len_0 = list_len(words, 0)  # start 0

    return render(request, 'word/word_card.html', {'words': words, 'words_len_0': words_len_0, 'check_content_exists': str(len(words) == 0)})


def update(request, id):
    word = Word.objects.get(id=id)
    if request.method == 'POST':
        post_form = WordForm(request.POST, instance=word)
        post_form = post_form.save(commit=False)
        post_form.user = request.user.username
        post_form.save()

        return redirect('word:home-page')
    else:
        form = WordForm(instance=word)
        content = [
          form,
          ['a', 'a']
        ]
        content = json.dump(form)
        return HttpResponse(content, content_type='application/json')


def view_class(request, listName):
    return render(request, 'word/view_class.html', {'listName': listName})


def delete(request, id):
    word = Word.objects.get(id=id)
    word.delete()
    return redirect('word:home-page')


# Class는 method가 GET방식 일 때는 Class이고, POST방식 일 때는 EN_word 이다.
def write(request, Class, EN_word):
    words = Word.objects.filter(Class=Class)
    words_len_0 = list_len(words, 0)
    return render(request, 'word/write.html', {'words': words, 'words_len_0': words_len_0, 'Class': Class, 'EN_word': EN_word})


def forgetting_curve(request, Class, some_day):  # some_day는 몇일 전의 단어를 볼 건지 넘겨주는 파라미터
    # 단어를 작성후 특정 날짜가 지난 단어의 날짜를 알려줌(?)
    today = datetime.now(timezone('Asia/Seoul'))
    some_day = today - timedelta(days=int(some_day))
    word = Word.objects.filter(Class=Class)
    some_day_post = word.filter(dt_created=some_day)  # 특정 날짜가 지난 단어를 불러옴(?)

    words_len_0 = list_len(some_day_post, 0)
    return render(request, 'word/forgetting_curve.html', {'some_day_post': some_day_post, 'words_len_0': words_len_0, 'check_content_exists': str(len(some_day_post) == 0)})


def list_len(list, num):
    new_list = []
    if num == 0:
        for i in range(len(list)):
            new_list.append(str(i))
    else:
        for i in range(1, len(list) + 1):
            new_list.append(str(i))
    return new_list
