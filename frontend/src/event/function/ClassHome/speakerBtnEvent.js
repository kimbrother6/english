import $ from 'jquery'

function SpeakerBtnEvent(event) {
  let id = $(this).attr('id')

  let words = event.data.words
  let word
  words.map(v => {
    if (v.pk == id) {
      word = v
    }
  })
  // speakWord(word.fields)
}

// function speakWord(wordFields) {
//   let parameters = {
//     onend: () => { responsiveVoice.speak(`${wordFields.value}`, 'Korean Male');}
//   }]]
//   responsiveVoice.speak(`${wordFields.key}`, 'US English Male', parameters)
// }

export default SpeakerBtnEvent