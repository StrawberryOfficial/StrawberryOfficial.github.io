$(document).ready(function () {
	
	$('#jamp_and_platform-wrap').click(function () {
		$('#jamp_and_platform').addClass('active');
		$('#jump-and-platform-hide').click(function () {
			$('#jamp_and_platform').removeClass('active');
		});
	});
	$('#app_2_button').click(function () {
		$('#app_2').addClass('active');
		$('#app_2_hide').click(function () {
			$('#app_2').removeClass('active');
		});
	});
	// $('#button_big').click(function () {
	// 	$('#big_text').addClass('active');
	// });
	$('.about_btn').fadeOut();
	$('.about_btn_hide').fadeOut();
	if ($(window).width() < 500) {
		$('.about_big_text').fadeOut();
		$('.about_btn').fadeIn();
		$('.about_btn').click(function () {
			$('.about_big_text').fadeIn();
			$('.about_btn').hide();
			$('.about_btn_hide').show();
		});
		$('.about_btn_hide').click(function () {
			$('.about_big_text').fadeOut();
			$('.about_btn').show();
			$('.about_btn_hide').hide();
		});
	}
});