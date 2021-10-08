import $ from 'jquery'
import { SpeakerBtnEvent, editBtnClickEvent, flip } from 'event/function'

export default function ClassHome_EventHandle(words, seteditInputId, setclassData) {
  //flip을 구현하기 위해서
  $('.flip-container .flipper').on('click', flip)

  let eventData = {words, seteditInputId, setclassData }
  $('.edit-btn').on('click', eventData, editBtnClickEvent)
  $('.speaker_btn').on('click', {words}, SpeakerBtnEvent)
}