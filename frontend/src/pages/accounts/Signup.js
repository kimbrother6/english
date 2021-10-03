import {Link} from 'react-router-dom'
import getCookie from 'server/getCookie'
import $ from 'jquery'

import { Signup } from 'server'

function SignupJsx() {
  return <div class='container'>
  <h1>회원가입</h1>
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
      <input type='submit' id='sinup-submit' class='btn btn-primary' onClick={Signup} value='회원가입'/>
  <Link class="btn btn-outline-primary" to="/" role="button">취소</Link>
  </div>
}

export default SignupJsx 