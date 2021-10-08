import $ from 'jquery'

function flip() {
  $(this).closest('.flip-container').toggleClass('hover')
  $(this).css('transform, rotateY(180deg)')
}

export default flip