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

});