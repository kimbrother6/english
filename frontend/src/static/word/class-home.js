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
        $('.edit-btn').on('click', loadWordData);
        $('.speaker_btn').on('click', speaker_btn_event)
      })
}

function speaker_btn_event(word) {
  let id = $(this).attr('id');
  fetch(`/${nowClass}/${id}/`)
      .then((response) => response.json())
      .then((result) => {
        let word = JSON.parse(result.word)[0];
        let wordFields = word.fields

        speakWord(wordFields)
      })
}

function speakWord(wordFields) {
  let parameters = {
    onend: () => { responsiveVoice.speak(`${wordFields.value}`, 'Korean Male');}
  }
  responsiveVoice.speak(`${wordFields.key}`, 'US English Male', parameters)
  // responsiveVoice.speak(`${wordFields.value}`, 'Korean Male')
}

function loadWordData() {
  let id = $(this).attr('id');
  fetch(`/${nowClass}/${id}/`)
      .then((response) => response.json())
      .then((result) => {
        let word = JSON.parse(result.word)[0];
        makeWordEditInput(word);

        $('html').click(event => {inputClickEvent(word, event)});
      })
}

function inputClickEvent(word, event) {
  let id = word.pk;
  let isClickkeyInput = $(event.target).hasClass(`key_input-${id}`);
  let isClickvalueInput = $(event.target).hasClass(`value_input-${id}`);
  let isNotClickInput = !(isClickkeyInput || isClickvalueInput);
  let isNotDefaultWordInfoCard = !($(`#word-${id}`).html() === defaultWordInfoCardHtml)

  if (isNotClickInput && isNotDefaultWordInfoCard) {
    saveEditWordData(id)
        .then((response) => response.json())
        .then((result) => {
          let modifiedWord = JSON.parse(result.word)[0]
          loadDefaultWordInfoCardHtml(modifiedWord)
          changeDefaultWordInfoCard(modifiedWord)
        })
  }
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
    flipWordCardHtml += `<div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">${word.fields.key}</div></div><div class="back"><div class="helper"></div><div class="back-text">${word.fields.value}</div></div></div></div></div></div>`
  }
  $('#carousel-inner').html(`${flipWordCardHtml}`)
}

function makeWordInfoCard(words) {
  let WordInfoCardHtml = '';
  for (word of words) {
    WordInfoCardHtml += `<div class="word-card"><div class="word-text" id="word-${word.pk}"><div class="key">${word.fields.key}</div><div class="value">${word.fields.value}</div></div><div class="word-btns"><span class="star_btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></span><span class="speaker_btn" id="${word.pk}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg></span><button class="edit-btn" id="${word.pk}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg></button></div></div>`
  }
  WordInfoCardHtml += `<div class="word-create-or-delete-container"><a href="/${nowClass}/update" class="word-create-or-delete-a"><span class="word-create-or-delete-btn">단어 추가 / 삭제</span></a></div>`
  $('.word-card-list').html(`${WordInfoCardHtml}`)
}

function flip() {
  $(this).closest('.flip-container').toggleClass('hover');
  $(this).css('transform, rotateY(180deg)');
}

let defaultWordInfoCardHtml;
function loadDefaultWordInfoCardHtml(word) {
  let wordFields = word.fields;
  defaultWordInfoCardHtml = `<div class="key">${wordFields.key}</div><div class="value">${wordFields.value}</div>`
}

function changeDefaultWordInfoCard(word) {
  const id = word.pk;
  let wordFields = word.fields;
  let defaultWordInfoCardHtml = `<div class="key">${wordFields.key}</div><div class="value">${wordFields.value}</div>`

  $(`#word-${id}`).html(defaultWordInfoCardHtml)
}

function makeWordEditInput(word) {
  const csrftoken = getCookie('csrftoken');
  const id = word.pk;
  let wordFields = word.fields;

  $(`#word-${id}`).html(`
    <input type="hidden" name="csrfmiddlewaretoken" value="${csrftoken}">
    <input type="text" name="key" class="key_input-${id} key_input" autocomplete="off" value="${wordFields.key}">
    <input type="text" name="value" class="value_input-${id} value_input" autocomplete="off" value="${wordFields.value}">
    <input type="hidden" name="memorize" class="memorize-${id}" value="${wordFields.memorize}">
    <input type="hidden" name="Class" class="Class-${id}" value="${wordFields.Class}">
  `);
}

function saveEditWordData (word_id) {
  let id = word_id;
  const csrftoken = getCookie('csrftoken')
  let key = $(`.key_input-${id}`).val()
  let value = $(`.value_input-${id}`).val()
  let memorize = $(`.memorize-${id}`).val()
  let Class = $(`.Class-${id}`).val()

  let requestBody = JSON.stringify({
    key: key,
    value: value,
    memorize: memorize,
    Class: Class,
  })

  return fetch(`/${nowClass}/${id}/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: requestBody
  })
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