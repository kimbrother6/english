import getCookie from "server/getCookie"

function Signup(SignupData) {
  const csrftoken = getCookie('csrftoken')
  
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