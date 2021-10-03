import getCookie from "server/getCookie"
import $ from 'jquery'

function Login() {
  const csrftoken = getCookie('csrftoken')
  let username = $('#login-username').val()
  let password = $('#login-password').val()

  let LoginData = JSON.stringify({ "username": username, "password": password })

  fetch('/accounts/login/', {
    method: 'POST',
    body: LoginData,
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
    }
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {console.log('Login ERROR: ', err)})
}

export default Login