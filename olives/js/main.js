$(document).ready(function() {
  var actionMenu = false;

    $('.mobile-bar').click(function() {
    if(actionMenu == false) {
      $('.mobile-menu').css('display', 'block');
      actionMenu = true;
    } else {
      $('.mobile-menu').css('display', 'none');
      actionMenu = false;
    }
  });

  $("nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".mobile-menu").on("click","a", function (event) {
      event.preventDefault();
      $('.mobile-menu').css('display', 'none');
      actionMenu = false;
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});
