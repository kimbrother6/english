import {Link} from 'react-router-dom'
import { Login } from 'server'



function LoginJsx() {
  return <div class='container'>
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
      <button type='submit' id='login-submit' class="btn btn-primary" onClick={Login}>로그인</button>
  아직 회원가입을 하지 않으셨나요? <Link to='/accounts/signup'>회원가입 하기</Link><br/>
  
  <Link class="btn btn-outline-primary" to="/" role="button">취소</Link>
  </div>
}

export default LoginJsx