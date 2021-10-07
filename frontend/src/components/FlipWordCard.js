function FlipWordCard({words}) {
  let flipWordCardJsx = []
  let word
  let wordsLength = Object.keys(words).length
  let isData = !(words[0] === 'noData')
  
  if (isData) {
    if (wordsLength === 1 ) {
      flipWordCardJsx.push(<div class="carousel-item active"><div class="card-word"><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">{words[0].fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">{words[0].fields.KO_word}</div></div></div></div></div></div>)
    } else {
      for (word of words) {
        if (word === words[0]) {
          flipWordCardJsx.push(<div class="carousel-item active"><div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">{word.fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">{word.fields.KO_word}</div></div></div></div></div></div>)
        } else {
          flipWordCardJsx.push(<div class="carousel-item"> <div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">{word.fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">{word.fields.KO_word}</div></div></div></div></div></div>)
        }
      }
    }
    return flipWordCardJsx
  } else {
    return <>loading</>
  }
}

export default FlipWordCard