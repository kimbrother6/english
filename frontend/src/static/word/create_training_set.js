import jquery from 'jquery';
import $ from 'jquery';




function PutHtml() {
    console.log('오오 실행된다.')
    for (let i = 0; i < 5; i++) {
        termRows += termRow
        if (i === 4) {
            termRows += addRow
        }
    }
    $('.termRows').html(termRows)
}

export default {PutHtml}