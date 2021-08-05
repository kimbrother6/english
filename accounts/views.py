from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import auth

# Create your views here.
def signup(request):
    if request.method == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            print(request.POST['username'], request.POST['password1'])
            user = User.objects.create_user(
                username=request.POST['username'], password=request.POST['password1'])
            auth.login(request, user)
            return redirect('word:home-page')
        else: 
            return render(request, 'accounts/signup.html', {'error': '비밀번호가 '})
    return render(request, 'accounts/signup.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('word:home-page')
        else:
            return render(request, 'accounts/login.html', {'error': '사용자 이름이나 비밀번호가 잘못되었습니다'})
    else:
        return render(request, 'accounts/login.html')

def logout(request):
    auth.logout(request)
    return redirect('word:home-page')

def account(request):
    return render(request, 'accounts/account.html')