$(document).ready(function() {
  $('[data-tab]').click(function() {
		var target = $(this).attr('data-tab');
		$('a.active').removeClass('active');
		$(this).addClass('active');
		$('table').removeClass('active');
		$('table' + target).addClass('active');
    $('h2').removeClass('active');
		$('h2' + target).addClass('active');
	});
});
