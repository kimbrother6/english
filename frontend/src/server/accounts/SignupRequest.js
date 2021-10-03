import getCookie from "server/getCookie"
import $ from 'jquery'

function Signup() {
  const csrftoken = getCookie('csrftoken')
  let username = $('#signup-username').val()
  let password1 = $('#signup-password1').val()
  let password2 = $('#signup-password2').val()

  let SignupData = JSON.stringify({ "username": username, "password1": password1, 'password2': password2})

  fetch('/accounts/signup/', {
    method: 'POST',
    body: SignupData,
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
    }
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.state === 'success') {
        console.log('회원가입 성공')
      } else {
        console.log(result.error)
      }
    })
}

export default Signup