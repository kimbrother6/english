import jquery from 'jquery';
import $ from 'jquery';

let login_jsx = <div class='container'>
<h1>로그인</h1>

    사용자 이름:
    <br/>
    <input autocomplete="off" name='username' id='login-username' type='text' auto/>
    <br/>
    
    <br/>
    비밀번호:
    <br/>
    <input autocomplete="off" name='password' id='login-password' type='password'/>
    <br/><br/>
    <button type='submit' id='login-submit' class="btn btn-primary" onClick={loginRequest}>로그인</button>
아직 회원가입을 하지 않으셨나요? <a href="{% url 'accounts:signup' %}">회원가입 하기</a><br/>

<a class="btn btn-outline-primary" href="{% url 'word:home-page' %}" role="button">취소</a>
</div>

$('#login-submit').on('click', () => {
  console.log('sumbit')
})



function loginRequest() {
  console.log('request')
  const csrftoken = getCookie('csrftoken')
  let username = $('#login-username').val()
  let password = $('#login-password').val()

  let loginData = {
    method: 'POST',
    body: JSON.stringify({ "username": username, "password": password }),
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
    }
  };

  fetch('/accounts/login/', loginData)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    })
}

function Login() {
  return login_jsx
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function csrfSafeMethod(method) {
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

export default Login

