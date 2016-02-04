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
});

// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '1215941241752783',
//     xfbml      : true,
//     version    : 'v2.5'
//   });
// };
//
// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));
