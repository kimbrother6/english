import nowClass from "./nowClass"
import getCookie from "./getCookie"
import $ from 'jquery'

function SaveEditWordData(id, word) {
  const csrftoken = getCookie('csrftoken')
  let key = $(`.key_input-${id}`).val()
  let value = $(`.value_input-${id}`).val()
  let trainingSet_id = word.fields.trainingSet_id

  let requestBody = JSON.stringify({ key, value, trainingSet_id })

  return fetch(`/data/${nowClass}/${id}/`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: requestBody
  })
    .then((response) => response.json())
}

export default SaveEditWordData