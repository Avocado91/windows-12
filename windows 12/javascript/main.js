function main() {

  $('.header h1, .header p, .fa-windows').fadeIn(2500);

  $('.slider').delay(1500).animate({bottom:"175px"},1000);

  $(".discover").click(function() {
    $('html,body').animate({
        scrollTop: $(".top").offset().top},
        1000);
});
}

$(document).ready(main);
