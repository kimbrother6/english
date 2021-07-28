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
    console.log(data.class_info)
    $('#number-of-words-added').html(`오늘 추가된 단어: ${data.today_post_len}개`)

    for (Class of data.user_class_list) {
      underscore_Class = space_to_underscore(Class)
      $(`#${underscore_Class}-user`).html(data.class_info[Class].user)
      console.log(data.class_info[Class].word_len)
      $(`#${underscore_Class}-len`).html(`${data.class_info[Class].word_len}단어`)
    }

  },
  error: function (request, status, error) {
    console.log('통신실패 error:' + error)
  }
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