//input태그에 값이 변할 때 마다 loginCheckInput 실행
$('#login-username').on('input', loginCheckInput)
$('#login-password').on('input', loginCheckInput)

//사용자 이름 또는 비밀번호가 빈칸일때에 로그인 버튼 비활성화
function loginCheckInput() { 
  //input태그에 값을 가져옴
  let username = $('#login-username').val();
  let password = $('#login-password').val();

  if (username === '' || password === '') {
    //로그인 버튼 비활성화
    $('#submit').prop('disabled', true);
  } else {
    //로그인 버튼 비활성화
    $('#submit').prop('disabled', false );
  }
}

//input태그에 값이 변할 때 마다 sinupCheckInput함수를 실행
$('#sinup-username').on('input', sinupCheckInput)
$('#sinup-password1').on('input', sinupCheckInput)
$('#sinup-password2').on('input', sinupCheckInput)

//
function sinupCheckInput() { //input태그의 값에 따라 에러를 표시하고 회원가입 버튼을 비활성화함
  //input태그에 값을 가져옴
  let username = $('#sinup-username').val();
  let password1 = $('#sinup-password1').val();
  let password2 = $('#sinup-password2').val();

  //에러내용이 담겨지는변수
  let error = null;

  //사용자 이름, 비밀번호, 비밀번호 확인란중 하나라도 비어있을 때는 회원가입 버튼 비활성화함
  if (username === '' || password1 === '' || password2 === '') {
    //회원가입 버튼 비활성화
    $('#sinup-submit').prop('disabled', true); 
  } else {
    //회원가입 버튼 활성화
    $('#sinup-submit').prop('disabled', false ); 
  }

  //사용자 이름이 빈칸이면 에러를 넘겨줌
  

  //비밀번호, 비밀번호 확인란이 일치하지 않을 경우 에러를 넘겨고 회원가입 버튼 비활성화함
  if (password1 === password2) {
    //비밀번호가 일치할경우 에러내용 지정 없이 넘어감
    console.log('에러 없음')
    error = null;
  } else {
    console.log('비밀번호 불일치')
    //에러 내용 지정
    error = '비밀번호가 일치하지 않습니다.';
    //회원가입 버튼 비활성화
    $('#sinup-submit').prop('disabled', true);
  }

  if (username === '') {

    //에러 내용 지정
    error = '사용자 이름을 입력해 주세요';
  }

  //에러 메시지 표시
  $('.error').html(error);
}