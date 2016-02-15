/*
This is X-tal Javascript.
*/

$(document).on("click", ".goto", function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 70
    }, "slow");
});

$(document).ready(function() {
    $('#history-button').click(function() {
      var historyWrap = $('#history-button').parent().parent();
      if (historyWrap.hasClass("button-align-center")) {
        $('#history-hidden').slideDown();
        historyWrap.slideUp();
      }
    });
});
