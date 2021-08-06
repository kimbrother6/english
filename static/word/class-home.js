let nowClass = decodeURI(document.location.href).split('/')[3];


$.ajax({
  //none으로 넘겨주는 이유는 Class가 필요 없기 때문에..
  url: `/${nowClass}/data/`,
  dataType: 'json',
  
  //통신 성공시 표시되어 있는 단어를 수정 할 수 있는 form으로 Change
  success: function (data) {
    $('.user').html(`${data.class_info.user}`)
    $('.small-class-name').html(`${nowClass}`)

    let edithtml = '';
    let cardhtml = '';
    let words = JSON.parse(data.words)

    for (word of words) {
      edithtml += `<div class="word-card"><div class="word-text" id="word-${word.id}"><div class="EN_word">${word.fields.EN_word}</div><div class="KO_word">${word.fields.KO_word}</div></div><div class="word-btns"><span class="star">별</span><span class="speak">스퍼커</span><button class="edit" id="${word.id}">수정</button></div></div>`
      cardhtml += `<div class="carousel-item`

      if (word == words[0]) {
        cardhtml += ' active">'
      } else {
        cardhtml += '">'
      }

      cardhtml += `<div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">${word.fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">${word.fields.KO_word}</div></div></div></div></div></div>`
    }
    $('.word-card-list').html(`${edithtml}`)
    $('#carousel-inner').html(`${cardhtml}`)


  },
  error: function (request, status, error) {
    console.log('통신실패 error:' + error);
  }
})



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

