$(document).ready(function() {
  var actionMenu = false;
  var actionMenuMobile = false;
  var actionSearch = false;
  $('input:checkbox').removeAttr('checked');

  function modalController(target) {
  		if (target == 'close') {
  			$('.modal-container').removeClass('active');
  			$('.modal-container .modal').removeClass('active');
  		} else {
  			$('.modal-container').addClass('active');
  			$('.modal-container .modal' + target).addClass('active');
  		}
	}

    $('[data-modal]').click(function() {
      var target = $(this).attr('data-modal');
  		modalController(target);
  	});

    $('.menu').click(function() {
      if ($('.menu').hasClass('mobile')) {
        if (actionMenuMobile == false) {
          $('.left-nav').addClass('mobile');
          $('section').addClass('mobile');
          $('section').css('left', '20%');
          $('.top-nav').css('width', '80%');
          actionMenuMobile = true;
        } else {
          $('.left-nav').removeClass('mobile');
          $('.top-nav').css('width', '100%');
          $('section').removeClass('mobile');
          $('section').css('left', '0%');
          actionMenuMobile = false;
        }
      } else if ($('.menu').hasClass('mobile-small')) {
        if (actionMenuMobile == false) {
          $('.left-nav').addClass('mobile');
          $('.left-nav.mobile').css('width', '80%');
          $('section').addClass('mobile');
          $('.top-nav').css('width', '20%');
          $('.top-nav').css('transition', '.5s');
          $('.top-nav .search').css('display', 'none');
          $('.top-nav .notification').css('display', 'none');
          actionMenuMobile = true;
        } else {
          $('.left-nav').removeClass('mobile');
          $('.top-nav').css('width', '100%');
          $('.top-nav').css('transition', 'none');
          $('section').removeClass('mobile');
          $('.top-nav .search').css('display', 'block');
          $('.top-nav .notification').css('display', 'flex');
          actionMenuMobile = false;
        }
      } else if ($('.menu').hasClass('mobile-none')) {

      } else {
        if(actionMenu == false) {
          $('.left-nav').css('width', '5%');
          $('.top-nav').css('width', '95%');
          $('section').css('left', '5.1%');
          $('.left-nav .logo p').addClass('open-menu');
          $('.left-nav .menu-list .list .hidden').addClass('open-menu');
          $('.left-nav .menu-list .list').css('justify-content', 'center');
          $('.left-nav .menu-list .list').css('padding', '0');
          $('.left-nav .menu-list .list a').css('margin', '20px');
          actionMenu = true;
        } else {
          $('.left-nav').css('width', '20%');
          $('.top-nav').css('width', '80%');
          $('section').css('left', '20.1%');
          $('.left-nav .logo p').removeClass('open-menu');
          $('.left-nav .menu-list .list .hidden').removeClass('open-menu');
          $('.left-nav .menu-list .list').css('justify-content', 'flex-start');
          $('.left-nav .menu-list .list').css('padding', '5% 8%');
          $('.left-nav .menu-list .list a').css('margin', '0px');
          $('.left-nav .menu-list .list a').css('margin-left', '20px');
          actionMenu = false;
        }
      }
  });

    $('.search span').click(function() {
      if(actionSearch == false) {
        $('.search input').css('display', 'block');
        actionSearch = true;
      } else {
        $('.search input').css('display', 'none');
        actionSearch = false;
      }
  });

  function windowSize(){
    if ($(window).width() <= '830') {
      $('.menu').addClass('mobile-small');
      $('.menu').removeClass('mobile');
      $('.menu').removeClass('mobile-none');
    } else if ($(window).width() <= '1250') {
      $('.menu').addClass('mobile');
      $('.menu').removeClass('mobile-small');
      $('.menu').removeClass('mobile-none');
    } else if ($(window).width() <= '1490') {
      $('.menu').addClass('mobile-none');
      $('.menu').removeClass('mobile');
      $('.menu').removeClass('mobile-small');
    }
}

  $(window).on('load resize',windowSize);
});

$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".notification"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
  && div.has(e.target).length === 0) { // и не по его дочерним элемента
    $('.modal-container').removeClass('active');
    $('.modal-container .modal').removeClass('active');
  }
});
