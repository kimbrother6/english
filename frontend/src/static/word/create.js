$('#id_key').on('input', naverENDictSearch)

function naverENDictSearch() {
  let searchTerm = $('#id_key').val();
  let naverENDictUrl = `https://en.dict.naver.com/#/search?query=${searchTerm}`;
  
  $('#naverENDictSearchUrl').attr('href', `${naverENDictUrl}`)
  $('#naverENDictSearchUrl').html(`네이버사전에서 '${searchTerm}' 검색하기`)
}