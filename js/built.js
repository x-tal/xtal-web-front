/*
This is X-tal Javascript.
*/

$(document).on("click", ".goto", function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 70
    }, "slow");
});

$(document).ready(function() {
    $('#three-button').css('margin-left', (parseInt($('#three-button').css('width')) / -2));
    $('#three-button').click(function() {
      $('#three-block').slideToggle();
    });
})
