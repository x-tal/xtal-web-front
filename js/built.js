/*
This is X-tal Javascript.
*/

$(document).on("click", ".goto", function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 70
    }, "slow");
});

$(document).ready(function() {
    $('.button-align-center').each(function(index) {
      $(this).css(
        'margin-left', (parseInt($(this).css('width')) / -2));
    });

    $('#three-button').click(function() {
      $('#three-block').slideToggle();
    });
});
