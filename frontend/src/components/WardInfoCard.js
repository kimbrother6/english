import nowClass from "server/nowClass"
import getCookie from "server/getCookie"
let isEditWordInputCard = false

function WordInfoCard({words, editInputId}) {
  let wordinfocardhtml = []
  let word
  let wordslength = Object.keys(words).lengh
  let isdata = words[0] !== 'noData'
  
  if (isdata) {
    if (wordslength === 1 ) {
      let word = words
      wordinfocardhtml.push(<div class="word-card"><div class="word-text" id={`word-${word.pk}`}>
        <Input_or_Default_WordCard word={word} editInputId={editInputId}/>
        </div><div class="word-btns"><span class="star_btn"><svg aria-label="별표하기" class="UIIcon UIIcon--star" role="img"><noscript></noscript><use xlinkHref="#star"></use><noscript></noscript></svg></span><span class="speaker_btn" id={word.pk}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentcolor" class="bi bi-volume-up-fill" viewbox="0 0 16 16"><path d="m11.536 14.01a8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707a7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="m10.121 12.596a6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707a5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="m8.707 11.182a4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182l8 5.525a3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zm6.717 3.55a.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39l3.825 10.5h1.5a.5.5 0 0 1 1 10v6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg></span><button class="edit-btn" id={word.pk}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentcolor" class="bi bi-pencil-fill" viewbox="0 0 16 16"><path d="m12.854.146a.5.5 0 0 0-.707 0l10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061l9.793 2.5 3.293 9h3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468a.5.5 0 0 1 6 13.5v13h-.5a.5.5 0 0 1-.5-.5v12h-.5a.5.5 0 0 1-.5-.5v11h-.5a.5.5 0 0 1-.5-.5v10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg></button></div></div>)
    } else {
      for (word of words) {
        wordinfocardhtml.push(<div class="word-card"><div class="word-text" id={`word-${word.pk}`}>
          <Input_or_Default_WordCard word={word} editInputId={editInputId}/>
          </div><div class="word-btns"><span class="star_btn"><svg aria-label="별표하기" class="UIIcon UIIcon--star" role="img"><noscript></noscript><use xlinkHref="#star"></use><noscript></noscript></svg></span><span class="speaker_btn" id={word.pk}><svg aria-label="오디오" class="UIIcon UIIcon--audio" role="img"><noscript></noscript><use xlinkHref="#audio"></use><noscript></noscript></svg></span><button class="edit-btn" id={word.pk}><svg aria-label="수정" class="UIIcon UIIcon--edit" role="img"><noscript></noscript><use xlinkHref="#edit"></use><noscript></noscript></svg></button></div></div>)
      }
    }
    wordinfocardhtml.push(<div class="word-create-or-delete-container"><a href={`/${nowClass}/update`} class="word-create-or-delete-a"><span class="word-create-or-delete-btn">단어 추가 / 삭제</span></a></div>)
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
    let defaultInfoCardJsx = <><div class="EN_word">{wordFields.EN_word}</div><div class="KO_word">{wordFields.KO_word}</div></>
    const csrftoken = getCookie('csrftoken')
    let editInputCardJsx = <>
      <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>
      <input type="text" name="EN_word" class={`EN_word_input-${id} EN_word_input`} autocomplete="off" defaultValue={wordFields.EN_word}/>
      <input type="text" name="KO_word" class={`KO_word_input-${id} KO_word_input`} autocomplete="off" defaultValue={wordFields.KO_word}/>
      <input type="hidden" name="memorize" class={`memorize-${id}`} value={wordFields.memorize}/>
      <input type="hidden" name="Class" class={`Class-${id}`} value={wordFields.Class}/>
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