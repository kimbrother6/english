import nowClass from "./nowClass"
import getCookie from "./getCookie"
import $ from 'jquery'

function SaveEditWordData(id) {
  const csrftoken = getCookie('csrftoken')
  let EN_word = $(`.EN_word_input-${id}`).val()
  let KO_word = $(`.KO_word_input-${id}`).val()
  let memorize = $(`.memorize-${id}`).val()
  let Class = $(`.Class-${id}`).val()

  let requestBody = JSON.stringify({ EN_word, KO_word, memorize, Class })

  return fetch(`/data/${nowClass}/${id}/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: requestBody
  })
    .then((response) => response.json())
}

export default SaveEditWordData