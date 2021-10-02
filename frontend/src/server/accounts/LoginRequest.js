import getCookie from "server/getCookie"

function Login(LoginData) {
  const csrftoken = getCookie('csrftoken')
  console.log(LoginData)

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