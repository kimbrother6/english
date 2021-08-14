let nowURL =  decodeURI(document.location.href)
let nowClass = nowURL.split('/')[3];
loadClassWordsData()

//TODO: 카러샐이 옆으로 넘어갈 때 모션이 자연스럽지 않다.
//TODO: 모든 fetch로 받아오는 거에 에러 핸들링을 추가해야됨


function loadClassWordsData() {
  fetch(`/${nowClass}/data/`)
      .then((response) => response.json())
      .then((result) => {
        let classWordsData = JSON.parse(result.words);
        let classInfo = JSON.parse(result.class_info);

        $('.user').html(`${classInfo.user}`);
        $('.small-class-name').html(`${nowClass}`)
        makeWordInfoCard(classWordsData);
        makeFlipWordCard(classWordsData);

        //flip을 구현하기 위해서
        $('.flip-container .flipper').click(flip);
        $('.edit-btn').on('click', editInuptProduceAjax);
      })
}

function makeFlipWordCard(words) {
  let flipWordCardHtml = '';
  for (word of words) {
    flipWordCardHtml += `<div class="carousel-item`
    if (word === words[0]) {
      flipWordCardHtml += ' active">';
    } else {
      flipWordCardHtml += '">';
    }
    flipWordCardHtml += `<div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">${word.fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">${word.fields.KO_word}</div></div></div></div></div></div>`
  }
  $('#carousel-inner').html(`${flipWordCardHtml}`)
}

function makeWordInfoCard(words) {
  let WordInfoCardHtml = '';
  for (word of words) {
    WordInfoCardHtml += `<div class="word-card"><div class="word-text" id="word-${word.pk}"><div class="EN_word">${word.fields.EN_word}</div><div class="KO_word">${word.fields.KO_word}</div></div><div class="word-btns"><span class="star_btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></span><span class="speaker_btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg></span><button class="edit-btn" id="${word.pk}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg></button></div></div>`
  }
  WordInfoCardHtml += `<div class="word-create-or-delete-container"><a href="/${nowClass}/update" class="word-create-or-delete-a"><span class="word-create-or-delete-btn">단어 추가 / 삭제</span></a></div>`
  $('.word-card-list').html(`${WordInfoCardHtml}`)
}


//flip
function flip() {
  $(this).closest('.flip-container').toggleClass('hover');
  $(this).css('transform, rotateY(180deg)');
}


let canEditWord;
// 수정 버튼을 누를시 수정할 수 있는 form을 표시
function editInuptProduceAjax() {

  canEditWord = true;
  console.log('caneditword:  ' + canEditWord)

  let id = $(this).attr('id');

  fetch(`/${nowClass}/${id}/`)
      .then((response) => response.json())
      .then((result) => {
        //형변환 할때 iterable해야 하기 때문에 리스트형태로 만들었는데 데이터는 0번 인덱스에 있음
        let word = JSON.parse(result.word)[0]
        makeWordEditInput(word)

        //TODO: makeWordEditInput함수를 뭐 어떻게 promise로 만들어서 저게 끝나면 이밑에 todo를 해야될거 같음.
        //비디오 판독 결과.... 2번째에 할때 input이 먼저 나온다음에 로그가 출력됨. 뭐지
        //TODO: if input erea out click: 원래 html로 돌아가고 데이터를 저장

        $('html').click(event => {inputClickEvent(word, event)})

      })
}

function inputClickEvent(word, event) {
  let id = word.pk;
  let isClickEN_wordInput = $(event.target).hasClass(`EN_word_input-${id}`);
  let isClickKO_wordInput = $(event.target).hasClass(`KO_word_input-${id}`);
  let isClickInput = isClickEN_wordInput || isClickKO_wordInput;

  if (canEditWord) {
    if (isClickInput) {
      console.log('영역 안')
    } else {
      console.log('영역 밖')
      changeDefaultWordInfoCard(word)
      canEditWord = false;
    }
  }
}


function changeDefaultWordInfoCard(word) {
  console.log('changeDefaultWordInfoCard')
  const id = word.pk;
  let wordFields = word.fields;

  $(`#word-${id}`).html(`<div class="EN_word">${wordFields.EN_word}</div><div class="KO_word">${wordFields.KO_word}</div>`)
}

function makeWordEditInput(word) {
  const csrftoken = getCookie('csrftoken');
  const id = word.pk;
  let wordFields = word.fields;

  $(`#word-${id}`).html(`
    <input type="hidden" name="csrfmiddlewaretoken" value="${csrftoken}">
    <input type="text" name="EN_word" class="EN_word_input-${id}" autocomplete="off" value="${wordFields.EN_word}">
    <input type="text" name="KO_word" class="KO_word_input-${id}" autocomplete="off" value="${wordFields.KO_word}">
    <input type="hidden" name="memorize" class="memorize-${id}" value="${wordFields.memorize}">
    <input type="hidden" name="Class" class="Class-${id}" value="${wordFields.Class}">
    <button class="word-edit-submit" id="${id}">전송</button>
  `);
}

function saveEditWordData(word_id) {
  let id = word_id;
  const csrftoken = getCookie('csrftoken')
  let EN_word = $(`.EN_word_input-${id}`).val()
  let KO_word = $(`.KO_word_input-${id}`).val()
  let memorize = $(`.memorize-${id}`).val()
  let Class = $(`.Class-${id}`).val()

  if (EN_word) {
    $.ajax({
      type: 'POST',
      url: `/${nowClass}/${id}/`,
      dataType: 'json',
      data: {
        EN_word: EN_word,
        KO_word: KO_word,
        memorize: memorize,
        Class: Class,
      },
      beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      },
      success: function (data) {
        let word = JSON.parse(data.word)[0]
        console.log('word save')
      },
      error: function (request, status, error) {
        console.log('통신실패 error:' + error);
      }
    });
  } else {
    console.log('EN_word is defulte')
  }
}



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

function csrfSafeMethod(method) {
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}