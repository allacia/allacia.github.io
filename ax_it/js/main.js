$(function() {
	var actionNav = false;

	$('[data-tab]').click(function() {
		var target = $(this).attr('data-tab');
		$('.tab-container .tab').removeClass('active');
		$(this).addClass('active');
		$('.tab-container .tab-content .content').removeClass('active');
		$('.tab-container .tab-content .content' + target).addClass('active');
	});

	$('.sidebar-btn').click(function() {
		if(actionNav == false) {
			$('.sidebar .menu').addClass('active');
			actionNav = true;
		} else {
			$('.sidebar .menu').removeClass('active');
			actionNav = false;
		}
	});
});
