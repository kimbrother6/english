import nowClass from "./nowClass"
import getCookie from "./getCookie"

function SaveEditWordData(id, requestBody) {
  const csrftoken = getCookie('csrftoken')
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