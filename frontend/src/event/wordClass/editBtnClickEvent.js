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
  let id = event.data.word.pk
  let isClickEN_wordInput = $(event.target).hasClass(`EN_word_input-${id}`)
  let isClickKO_wordInput = $(event.target).hasClass(`KO_word_input-${id}`)
  let isNotClickInput = !(isClickEN_wordInput || isClickKO_wordInput)

  if (isNotClickInput && isEditWordInputCard) {
    SaveEditWordData(id)
        .then((modifiedWords) => {
          let seteditInputId = event.data.seteditInputId
          let setclassData = event.data.setclassData
          
          seteditInputId(null)
          setclassData(modifiedWords)
        })
  }
}

export default editBtnClickEvent