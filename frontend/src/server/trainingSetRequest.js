import $ from 'jquery'
import getCookie from './getCookie'

function trainingSetRequest(termRowsNum) {
    let trainingSetTitle = $('#trainingSetTitle').val()
    let trainingSetExplanation = $('#trainingSetExplanation').val()

    let newWords = {trainingSetTitle, trainingSetExplanation, words: []} 

    for (let num = 1; num <= termRowsNum; num++) {
        let wordKey = $(`#wordKey${num}`).val() 
        let wordValue = $(`#wordValue${num}`).val()

        let wordKeyIsNull = wordKey === ''
        let wordValueIsNull = wordValue === ''

        if ( wordKeyIsNull && wordValueIsNull) {
            console.log(`${num}는 빈칸입니다.`)
        } 
        else if (wordKeyIsNull || wordValueIsNull) {
            wordKey = wordKey === '' ? '...' : wordKey
            wordValue = wordValue === '' ? '...' : wordValue

            newWords.words.push({key: wordKey, value: wordValue})

            console.log(`${num}둘중 하나가 빈칸 입니다.`)
        } 
        else  {
            newWords.words.push({key: wordKey, value: wordValue})
            console.log(`wordKey${num}:`, wordKey)
            console.log(`wordValue${num}:`, wordValue)
        }
    }

    if (newWords.words.length < 2 || newWords.trainingSetTitle === '') {
        if (newWords.trainingSetTitle === '') {
            alert('세트를 만드시려면 제목을 입력해 주세요.')
        }
        if (newWords.words.length < 2) {
            alert('세트를 만들기 위해서는 두 개의 카드가 필요합니다.')
        } 
    } else {
        let requestBody = JSON.stringify(newWords)
        const csrftoken = getCookie('csrftoken')

        fetch(`/data/create_training_set/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: requestBody
        })
            .then((response) => response.json())
            .then((result) => {
                alert('학습 세트 만들기', result)
            })
            .catch((err) => {
                alert('학습 세트 만드릭 에러', err)
            })
    }
}



export default trainingSetRequest