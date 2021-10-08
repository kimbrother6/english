import $ from 'jquery'

function trainingSetRequest(termRowsNum) {
    console.log(termRowsNum)

    let trainingSetTitle = $('#trainingSetTitle').val()
    let trainingSetExplanation = $('#trainingSetExplanation').val()

    let newWord = {
        key: {

        },
        value: {

        }
    }

    let wordKey = $('#wordKey1').val()
    let wordValue= $('#wordValue1').val()



    console.log('trainingSetTitle: ', trainingSetTitle)
    console.log('trainingSetExplanation: ', trainingSetExplanation)
    console.log('wordKey: ', wordKey)
    console.log('wordValue: ', wordValue)
}

export default trainingSetRequest