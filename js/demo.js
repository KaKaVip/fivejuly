/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#FFFFFF',
    lineColor: '#EEEEEE'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
