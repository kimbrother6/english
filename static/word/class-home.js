let nowClass = decodeURI(document.location.href).split('/')[3];

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

$.ajax({
  //none으로 넘겨주는 이유는 Class가 필요 없기 때문에..
  url: `/${nowClass}/data/`,
  dataType: 'json',
  
  //통신 성공시 표시되어 있는 단어를 수정 할 수 있는 form으로 Change
  success: function (data) {
    $('.user').html(`${data.class_info.user}`);
    $('.small-class-name').html(`${nowClass}`);

    let edithtml = '';
    let cardhtml = '';
    let words = JSON.parse(data.words);
    let penceil_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>';
    let speaker_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg>';
    let star_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>'
    
    for (word of words) {
      edithtml += `<div class="word-card"><div class="word-text" id="word-${word.pk}"><div class="EN_word">${word.fields.EN_word}</div><div class="KO_word">${word.fields.KO_word}</div></div><div class="word-btns"><span class="star_btn">${star_icon}</span><span class="speaker_btn">${speaker_icon}</span><button class="edit-btn" id="${word.pk}">${penceil_icon}</button></div></div>`
      cardhtml += `<div class="carousel-item`

      if (word == words[0]) {
        cardhtml += ' active">';
      } else {
        cardhtml += '">';
      }

      cardhtml += `<div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">${word.fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">${word.fields.KO_word}</div></div></div></div></div></div>`
    }

    edithtml += '<div class="word-create-or-delete-container"><a href="#" class="word-create-or-delete-a"><span class="word-create-or-delete-btn">단어 추가 / 삭제</span></a></div>'
    $('.word-card-list').html(`${edithtml}`)
    $('#carousel-inner').html(`${cardhtml}`)

    $('.flip-container .flipper').click(flip);
    $('.edit-btn').on('click', editAjax)


    // <div class="carousel-item {% if word == words.0 %}active{% endif %}">


  },
  error: function (request, status, error) {
    console.log('통신실패 error:' + error);
  }
})


//수정 버튼을 누를시 수정할 수 있는 form을 표시

function flip() {
  $(this).closest('.flip-container').toggleClass('hover');
  $(this).css('transform, rotateY(180deg)');
}

function editAjax() {
  console.log('AJAX')
  let id = $(this).attr('id');
  $.ajax({
    //none으로 넘겨주는 이유는 Class가 필요 없기 때문에..
    url: `/${nowClass}/${id}/`,
    dataType: 'json',
    
    //통신 성공시 표시되어 있는 단어를 수정 할 수 있는 form으로 Change
    success: function (data) {
      for (data of data) {
        if (data.pk == id) {
          console.log('ajax')

          const csrftoken = getCookie('csrftoken');
          $(`#word-${id}`).html(`
          <form method="POST" action="/${nowClass}/${id}/">
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
}



$('.flip-container .flipper').click(function() {
	$(this).closest('.flip-container').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});
