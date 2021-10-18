import { isEditWordInputCard } from 'components'
import $ from 'jquery'
import { SaveEditWordData } from 'server'

function editBtnClickEvent(event) {
  event.stopPropagation()
  let id = $(this).attr('id')

  let words = event.data.words
  let seteditInputId = event.data.seteditInputId
  
  seteditInputId(id)

  let word
  Object.values(words).map(v => {
    if (v.pk == id ) {
      word = v
    }
  })
  let eventData = {
    word, 
    seteditInputId, 
    setclassData: event.data.setclassData,
  }
  $('html').off().on('click', eventData, inputClickEvent)
}
function inputClickEvent(event) {
  let word = event.data.word

  let isClickEN_wordInput = $(event.target).hasClass(`EN_word_input-${word.pk}`)
  let isClickvalueInput = $(event.target).hasClass(`value_input-${word.pk }`)
  
  let isNotClickInput = !(isClickEN_wordInput || isClickvalueInput)

  if (isNotClickInput && isEditWordInputCard) {
    SaveEditWordData(word.pk, word)
        .then((modifiedWords) => {
          let seteditInputId = event.data.seteditInputId
          let setclassData = event.data.setclassData
          
          seteditInputId(null)
          setclassData(modifiedWords)
        })
  }
}

export default editBtnClickEvent