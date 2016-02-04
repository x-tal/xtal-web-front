/*
This is X-tal Javascript.
*/

$(document).on("click", ".goto", function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 70
    }, "slow");
});

$(document).ready(function() {
    $('#three-button').click(function() {
      $('#three-block').slideToggle();
    });
});
