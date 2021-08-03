function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

//수정 버튼을 누를시 수정할 수 있는 form을 표시
$('.edit').on('click', function () {
  let id = $(this).attr('id');
  $.ajax({
    //none으로 넘겨주는 이유는 Class가 필요 없기 때문에..
    url: `/none/${id}/edit/`,
    dataType: 'json',
    
    //통신 성공시 표시되어 있는 단어를 수정 할 수 있는 form으로 Change
    success: function (data) {
      for (data of data) {
        if (data.pk == id) {
          const csrftoken = getCookie('csrftoken');
          $(`#word-${id}`).html(`
          <form method="POST" action="/${data.fields.Class}/${id}/edit/" >
            <input type="hidden" name="csrfmiddlewaretoken" value="${csrftoken}">
            <input type="text" name="EN_word" value="${data.fields.EN_word}">
            <input type="text" name="KO_word" value="${data.fields.KO_word}">
            <input type="hidden" name="memorize" value="${data.fields.memorize}">
            <input type="hidden" name="Class" value="${data.fields.Class}">
            <button id="word-edit-submit">전송</button>
          </form>
          `);
        }
        
      }
      
    },
    error: function (request, status, error) {
      console.log('통신실패 error:' + error);
    }
  })
})