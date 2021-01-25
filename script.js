$(document).ready(function () {
	
	$('#jamp_and_platform-wrap').click(function () {
		$('#jamp_and_platform').addClass('active');
		$('#jump-and-platform-hide').click(function () {
			$('#jamp_and_platform').removeClass('active');
		});
	});

});