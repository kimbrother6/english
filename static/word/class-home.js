function wordEdit(id) {
  $.ajax({
    url: `/${id}/edit/`,
    dataType: 'json',
    success: function (data) {
      console.log(data)
    },
    error: function (request, status, error) {
      console.log('통신실패 error:' + error)
    }
  })

  $(`#EN_word-${id}`).html('<form><input type="text" name="Class" id="id_Class"></form>')
  console.log(`#EN_word-${id}`)
}