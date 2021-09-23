import {Link} from 'react-router-dom'
import { getCookie } from './getCookie';
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
아직 회원가입을 하지 않으셨나요? <Link to='/accounts/signup'>회원가입 하기</Link><br/>

<Link class="btn btn-outline-primary" to="/" role="button">취소</Link>
</div>

$('#login-submit').on('click', () => {
  console.log('sumbit')
})

let signupJsx = <div class='container'>
<h1>회원가입</h1>

{/* <form method='POST' action="{% url 'accounts:signup' %}"> */}
    사용자 이름:
    <br/>
    <input autocomplete="off" name='username' id='signup-username' type='text'/>
    <br/>
    비밀번호:
    <br/>
    <input autocomplete="off" name='password1' id='signup-password1' type='password'/>
    <br/>
    비밀번호 확인:
    <br/>
    <input autocomplete="off" name='password2' id='signup-password2' type='password'/>
    <br/><br/>
    <p class="error"></p>
    <input type='submit' id='sinup-submit' class='btn btn-primary' onClick={signupRequest} value='회원가입'/>
{/* </form> */}
<Link class="btn btn-outline-primary" to="/" role="button">취소</Link>
</div>

function signupRequest() {
  console.log('request')
  const csrftoken = getCookie('csrftoken')
  let username = $('#signup-username').val()
  let password1 = $('#signup-password1').val()
  let password2 = $('#signup-password2').val()

  let signupData = {
    method: 'POST',
    body: JSON.stringify({ "username": username, "password1": password1, 'password2': password2}),
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
    }
  };

  fetch('/accounts/signup/', signupData)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      if (result.state === 'success') {
        console.log('회원가입 성공')
      } else {
        console.log(result.error)
      }
    })
}

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

function Signup() {
  return signupJsx
}

function Login() {
  return login_jsx
}


export {Login, Signup}


