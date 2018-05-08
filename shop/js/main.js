$(document).ready(function() {
  var actionHoco = false;
  var actionUbic = false;
  var actionDot = false;
  var actionMobile = false;
  var actionFilter = false;
  var actionHiddenClass = true;
  $('input:checkbox').removeAttr('checked');

  $('.content-container .left-nav .hoco .menu').click(function() {
    if(actionHoco == false) {
      $('.content-container .left-nav .hoco .input-group').css('display', 'block');
      actionHoco = true;
    } else {
      $('.content-container .left-nav .hoco .input-group').css('display', 'none');
      actionHoco = false;
    }
  });

  $('.content-container .left-nav .ubic .menu').click(function() {
    if(actionUbic == false) {
      $('.content-container .left-nav .ubic .input-group').css('display', 'block');
      actionUbic = true;
    } else {
      $('.content-container .left-nav .ubic .input-group').css('display', 'none');
      actionUbic = false;
    }
  });

  $('.content-container .left-nav .dotfes .menu').click(function() {
    if(actionDot == false) {
      $('.content-container .left-nav .dotfes  .input-group').css('display', 'block');
      actionDot = true;
    } else {
      $('.content-container .left-nav .dotfes  .input-group').css('display', 'none');
      actionDot = false;
    }
  });

  $('input[class]').click(function() {
    var target = $(this).attr('class');
    if(actionFilter == false) {
      $('.cart').each(function(i, elem) {
        if(!($(elem).hasClass(target))) {
          $(elem).addClass('hidden');
        }
      });
      actionFilter = true;
    } else {
      $('.cart').each(function(i, elem) {
        if($('.cart.' + target).hasClass('hidden')) {
          $('.cart.' + target).removeClass('hidden');
          actionHiddenClass = false;
        }
      });
      if(actionHiddenClass == true) {
        $('.cart').each(function(i, elem) {
          if(!($('.cart.' + target).hasClass('hidden'))) {
            $('.cart.' + target).addClass('hidden');
          }
        });
      }
      if(!($('input:checkbox').prop('checked'))) {
        $('.cart').removeClass('hidden');
        actionFilter = false;
      }
      actionHiddenClass = true;
    }
  });

  $('option[class]').click(function() {
    var target = $(this).attr('class');
    if(actionFilter == false) {
      $('.cart').each(function(i, elem) {
        if(!($(elem).hasClass(target))) {
          $(elem).addClass('hidden');
        }
      });
      actionFilter = true;
    } else {
      $('.cart').each(function(i, elem) {
        if($('.cart.' + target).hasClass('hidden')) {
          $('.cart.' + target).removeClass('hidden');
          actionHiddenClass = false;
        }
      });
      if(actionHiddenClass == true) {
        $('.cart').each(function(i, elem) {
          if(!($('.cart.' + target).hasClass('hidden'))) {
            $('.cart.' + target).addClass('hidden');
          }
        });
      }
      if(!($('input:checkbox').prop('checked'))) {
        $('.cart').removeClass('hidden');
        actionFilter = false;
      }
      actionHiddenClass = true;
    }
  });

  $('header .navbar-mobile .btn').click(function() {
    if(actionMobile == false) {
      $('header .wrapper-nav').addClass('mobile');
      actionMobile = true;
    } else {
      $('header .wrapper-nav').removeClass('mobile');
      actionMobile = false;
    }
  });


    $.getJSON("data/data.json", function(data){
      var content = '';
      for (var i in data.mobile) {
    		content += '<div class="' + data.mobile[i].class + '">'
    					+ '<p>' + data.mobile[i].tag + '</p>'
    					+ '<h3>' + data.mobile[i].name + '</h3>'
    					+ '<img src="' + data.mobile[i].srcimage + '">'
    					+ '<div class="price-container">'
  						+	'<div class="price">'
    					+ '<p>' + data.mobile[i].price + '</p>'
              + '<p class="opt">' + data.mobile[i].opt + '</p>'
              + '</div>'
              + '<div class="btn"><a href="#">Купить</a>'
              + '</div>'
              + '</div>'
              + '</div>'
            + '</div'
            +'<div class="' + data.mobile[i].class + '">';
    	}
    	$('section .content-container .content .wrapper-cart').html(content);
    	content = '';
    });
});
