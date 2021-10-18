import nowClass from "server/nowClass"
import getCookie from "server/getCookie"
let isEditWordInputCard = false

function WordInfoCard({words, editInputId}) {
  let wordinfocardhtml = []
  let word
  let isdata = words[0] !== 'noData'
  
  if (isdata) {
    for (word of words) {
      console.log('word for :   ', word)
      wordinfocardhtml.push(
      <div class="word-card">
        <div class="word-text" id={`word-${word.pk}`}>
          <Input_or_Default_WordCard word={word} editInputId={editInputId}/>
        </div>
        <div class="word-btns">
          <span class="star_btn">
            <svg aria-label="별표하기" class="UIIcon UIIcon--star" role="img"><noscript></noscript><use xlinkHref="#star"></use><noscript></noscript></svg>
          </span>
          <span class="speaker_btn" id={word.pk}>
            <svg aria-label="오디오" class="UIIcon UIIcon--audio" role="img"><noscript></noscript><use xlinkHref="#audio"></use><noscript></noscript></svg>
          </span>
          <button class="edit-btn" id={word.pk}>
            <svg aria-label="수정" class="UIIcon UIIcon--edit" role="img"><noscript></noscript><use xlinkHref="#edit"></use><noscript></noscript></svg>
          </button>
        </div>
      </div>
      )
    }
    wordinfocardhtml.push(
    <div class="word-create-or-delete-container">
      <a href={`/${nowClass}/update`} class="word-create-or-delete-a">
        <span class="word-create-or-delete-btn">단어 추가 / 삭제</span>
      </a>
    </div>
    )
    return wordinfocardhtml
  } else {
    return <>loading</>
  }
}

function Input_or_Default_WordCard({word, editInputId}) {
  let isdata = !(word === 'noData')
  
  if (isdata) {
    const id = word.pk
    let wordFields = word.fields
    console.log(word)
    console.log(wordFields)

    let defaultInfoCardJsx = <><div class="key">{wordFields.key}</div><div class="value">{wordFields.value}</div></>
    const csrftoken = getCookie('csrftoken')
    let editInputCardJsx = <>
      <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>
      <input type="text" name="key" class={`key_input-${id} key_input`} autocomplete="off" defaultValue={wordFields.key}/>
      <input type="text" name="value" class={`value_input-${id} value_input`} autocomplete="off" defaultValue={wordFields.value}/>
    </>

    if (editInputId === null) {
      isEditWordInputCard = false
      return defaultInfoCardJsx
    } else {
      isEditWordInputCard = true
      if (editInputId == id) {
        return editInputCardJsx
      } else {
        return defaultInfoCardJsx
      }
    }
  } else {
    return <>loading</>
  }
} 


export {WordInfoCard, isEditWordInputCard}