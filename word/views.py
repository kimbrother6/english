from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .models import Word, WordForm
from sqlalchemy import create_engine
import pandas as pd
from datetime import datetime, timedelta
from pytz import timezone


engine = create_engine("sqlite:////Users/cubest_june/hj-django/english/db.sqlite3") #sqlite:////home/hjune/english/db.sqlite3


def word_home_page(request):
    user=request.user.username
    word = Word.objects.filter(user=user)

    with engine.connect() as conn, conn.begin():
        data = pd.read_sql_table("word_word", conn)
    user_data = data[data['user']==user]
    user_class_list = user_data['Class'].unique()
    if len(word) == 0:
        return render(request, 'word/no_data.html')
    else:
        return render(request, 'word/home.html', {'word': word, 'class_list': user_class_list})

def create(request):
    if request.method == 'POST':
        post_form = WordForm(request.POST)
        post_form = post_form.save(commit=False)
        post_form.memorize = '0'
        post_form.user = request.user.username
        post_form.save()

        return redirect('word:home-page')
    else:
        form = WordForm
        return render(request, 'word/forms.html', {'form': form})

def word_card(request, Class, memorize):
    words = Word.objects.filter(Class=Class).filter(user = request.user.username)

    if memorize != 'none':
        words = words.filter(memorize=memorize)

    words_len_0 = list_len(words, 0) #start 0

    return render(request, 'word/word_card.html', {'words':words, 'words_len_0': words_len_0, 'check_content_exists': str(len(words)==0)})

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
        return render(request, 'word/forms.html', {'form': form})

def view_class(request, listName):
    return render(request, 'word/view_class.html', {'listName': listName})

def delete(request ,id):
    word = Word.objects.get(id=id)
    word.delete()
    return redirect('word:home-page')

def write(request, Class, EN_word): #Class는 method가 GET방식 일 때는 Class이고, POST방식 일 때는 EN_word 이다.
    words = Word.objects.filter(Class=Class)
    words_len_0 = list_len(words, 0)
    return render(request, 'word/write.html', {'words': words, 'words_len_0': words_len_0, 'Class': Class, 'EN_word': EN_word})

def forgetting_curve(request, Class, some_day):#some_day는 몇일 전의 단어를 볼 건지 넘겨주는 파라미터
    today =  datetime.now(timezone('Asia/Seoul')) #단어를 작성후 특정 날짜가 지난 단어의 날짜를 알려줌(?)
    some_day = today - timedelta(days=int(some_day))
    word = Word.objects.filter(Class=Class)
    some_day_post = word.filter(dt_created = some_day)# 특정 날짜가 지난 단어를 불러옴(?)

    words_len_0 = list_len(some_day_post, 0)
    print(some_day_post)
    return render(request, 'word/forgetting_curve.html', {'some_day_post':some_day_post, 'words_len_0': words_len_0, 'check_content_exists': str(len(some_day_post)==0)})





def list_len(list, num):
    new_list = []
    if num == 0:
        for i in range(len(list)):
            new_list.append(str(i)) 
    else :
        for i in range(1, len(list) + 1):
            new_list.append(str(i)) 
    return new_list