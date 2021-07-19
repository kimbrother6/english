$('#username').on('input', checkInput)
$('#password').on('input', checkInput)

function checkInput() {
  let username = $('#username').val();
  let password = $('#password').val();

  if (username === '' || password === '') {
    $('#submit').attr('disabled', 'true');
  } else {
    $('#submit').prop("disabled", false );
  }
}