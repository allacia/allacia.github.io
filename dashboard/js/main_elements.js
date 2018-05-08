$(document).ready(function() {
  var dropdown = false;
  var popover = false;

    $('#no-button-action').click(function() {
      if(!dropdown) {
        $('#no-button-action .dropdown-content').addClass('active');
        dropdown = true;
      } else {
        $('#no-button-action .dropdown-content').removeClass('active');
        dropdown = false;
      }
   });
   $('#button-action button').click(function() {
     if(!dropdown) {
       $('#button-action .dropdown-content').addClass('active');
       dropdown = true;
     } else {
       $('#button-action .dropdown-content').removeClass('active');
       dropdown = false;
     }
  });

  $('.popover-wrapper').click(function() {
    if(!popover) {
      $('.popover-content').css('opacity', '1');
      $('.popover-content').css('visibility', 'visible');
      $('.popover-content').css('transform', 'translate(0,-20px)');
      popover = true;
    } else {
      $('.popover-content').css('opacity', '0');
      $('.popover-content').css('visibility', 'hidden');
      popover = false;
    }
  });
});
