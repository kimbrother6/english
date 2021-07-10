from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .models import Word
from .forms import englishNoteForm
from sqlalchemy import create_engine
import pandas as pd


engine = create_engine("sqlite:////Users/cubest_june/hj-django/english/db.sqlite3") #sqlite:////home/hjune/english/db.sqlite3


def english_home_page(request):
    user=request.user.username
    word = Word.objects.filter(user=user)

    with engine.connect() as conn, conn.begin():
        data = pd.read_sql_table("word_word", conn)
    user_data = data[data['user']==user]
    user_class_list = user_data['Class'].unique()
    if len(word) == 0:
        return render(request, 'english/no_data.html')
    else:
        return render(request, 'english/home.html', {'word': word, 'class_list': user_class_list})

def create(request):
    if request.method == 'POST':
        post_form = englishNoteForm(request.POST)
        post_form = post_form.save(commit=False)
        post_form.memorize = '0'
        post_form.user = request.user.username
        post_form.save()

        return redirect('english:home-page')
    else:
        form = englishNoteForm
        return render(request, 'english/forms.html', {'form': form})

def word_card(request, Class, memorize):
    words = Word.objects.filter(Class=Class).filter(user = request.user.username)

    if memorize != 'none':
        words = words.filter(memorize=memorize)

    words_len_0 = list_len(words, 0) #start 0

    return render(request, 'english/word_card.html', {'words':words, 'words_len_0': words_len_0, 'check_content_exists': str(len(words)==0)})

def update(request, id):
    word = Word.objects.get(id=id)
    if request.method == 'POST':
        post_form = englishNoteForm(request.POST, instance=word)
        post_form = post_form.save(commit=False)
        post_form.user = request.user.username
        post_form.save()

        return redirect('english:home-page')
    else:
        form = englishNoteForm(instance=word)
        return render(request, 'english/forms.html', {'form': form})

def view_class(request, listName):
    return render(request, 'english/view_class.html', {'listName': listName})

def delete(request ,id):
    word = Word.objects.get(id=id)
    word.delete()
    return redirect('english:home-page')

def write(request, Class):
    word = Word.objects.filter(Class=Class)
    if request.method == 'POST':
        if request.POST['EN_answer'] == word[0].EN_word:
            print('정답입니다.')
            return redirect('english:home-page')
        else: 
            print('틀렸습니다.')
            return redirect('english:home-page')
    else:
        return render(request, 'english/write.html', {'word': word})

def T_F():
    print('여기로 왔어어어엉어ㅓ요요')
    return redirect('english:home-page')

def list_len(list, num):
    new_list = []
    if num == 0:
        for i in range(len(list)):
            new_list.append(str(i)) 
    else :
        for i in range(1, len(list) + 1):
            new_list.append(str(i)) 
    return new_list