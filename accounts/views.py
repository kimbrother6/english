from django.shortcuts import redirect, render
from django.http.response import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib import auth
import json

# Create your views here.
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password1 = data['password1']
        password2 = data['password2']
        
        if password1 == password2:
            user = User.objects.create_user(
                username = username, password = password1)
            auth.login(request, user)
            return JsonResponse({'state': 'success'})
        else: 
            return JsonResponse({'state': 'error', 'error': '비밀번호를 확인해 주세요.'})
    elif request.method == 'GET':
        return render(request, 'index.html')

def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return JsonResponse({'state': 'success'})
        else:
            return JsonResponse({'state': 'error', 'error': '사용자 이름이나 비밀번호를 확인해 주세요.'})
    elif request.method == 'GET':
        return render(request, 'index.html')

def logout(request):
    auth.logout(request)
    return JsonResponse({'state': 'success'}) 