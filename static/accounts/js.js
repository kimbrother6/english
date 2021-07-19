$('#username').on('input', loginCheckInput)
$('#password').on('input', loginCheckInput)

function loginCheckInput() {
  let username = $('#username').val();
  let password = $('#password').val();

  if (username === '' || password === '') {
    $('#submit').prop('disabled', true);
  } else {
    $('#submit').prop('disabled', false );
  }
}

$('#sinup-username').on('input', sinupCheckInput)
$('#password1').on('input', sinupCheckInput)
$('#password2').on('input', sinupCheckInput)

function sinupCheckInput() {
  let username = $('#sinup-username').val();
  let password1 = $('#password1').val();
  let password2 = $('#password2').val();
  let error = null;

  if (username === '' || password1 === '' || password2 === '') {
    $('#sinup-submit').prop('disabled', true);

  } else {
    $('#sinup-submit').prop('disabled', false );
  }

  if (password1 === password2) {
    if (username === '') {
      error = '사용자 이름을 입력해 주세요'
    }
  } else {
    error = '비밀번호가 일치하지 않습니다.';
    $('#sinup-submit').prop('disabled', true);
  }
  $('.error').html(error)
}