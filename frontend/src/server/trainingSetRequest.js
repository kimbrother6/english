import $ from 'jquery'

function trainingSetRequest(termRowsNum) {
    let trainingSetTitle = $('#trainingSetTitle').val()
    let trainingSetExplanation = $('#trainingSetExplanation').val()

    let newWords = []
    console.log('trainingSetTitle: ', trainingSetTitle)
    console.log('trainingSetExplanation: ', trainingSetExplanation)

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

            newWords.push({key: wordKey, value: wordValue})

            console.log(`${num}둘중 하나가 빈칸 입니다.`)
        } 
        else  {
            newWords.push({key: wordKey, value: wordValue})
            console.log(`wordKey${num}:`, wordKey)
            console.log(`wordValue${num}:`, wordValue)
        }
        console.log(newWords)
    }
}

export default trainingSetRequest