document.addEventListener('keydown', createWord);

function createWord(event) {
  if (event.key === 'c') {
    let url = "/create";
    $(location).attr('href', url);
  }
}


fetch ('/data/')
  .then((response) => response.json())
  .then((result) => {
    let classCardHtml = '';
    let html = '';

    for (Class of result.user_class_list) {
      let class_user = result.class_info[Class].user
      let word_len = result.class_info[Class].word_len

      html += `<div class="card float-left class-card"><a href="/${Class}/" class="class-url"><div class="card-body"><div class="card-top"><div class="card-title">${Class}</div><div class="word-len" id="${space_to_underscore(Class)}-len">${word_len}단어</div></div><div class="word-user"><a href="#" id="${space_to_underscore(Class)}-user" class="class-user-url">${class_user}</a></div></div></a></div>`
    }
    $('.class-card-row').html(html)
    
  })




function space_to_underscore(value) {
  split_value = value.split(' ')
  new_str = ''
  
  for (let i = 0; i < split_value.length; i++) {
    new_str += split_value[i]
    if (i < split_value.length - 1) {
      new_str += '_'
    }
  }
  return new_str
}