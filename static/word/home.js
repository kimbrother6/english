document.addEventListener('keydown', createWord);

function createWord(event) {
  if (event.key === 'c') {
    let url = "/create";
    $(location).attr('href', url);
  }
}


$.ajax({
  url: 'today_post_len_ajax/',
  dataType: 'json',
  success: function (data) {
    $('#number-of-words-added').html(`오늘 추가된 단어: ${data}개`)
  },
  error: function (request, status, error) {
    console.log('통신실패 error:' + error)
  }
})