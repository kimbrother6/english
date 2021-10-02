import nowClass from "./nowClass"

function ClassWordsData() {
  return fetch(`/data/${nowClass}/`)
    .then((response) => response.json())
    .catch((err) => {console.log('load ClassWordsData ERROR: ', err)})
}

export default ClassWordsData