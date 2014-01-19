$(function(){

	$('textarea').click(function(){
		var that = $(this);
			that.addClass('expand');
			$('#tweet-controls').show();
		});
	// $('textarea').on('blur', function(){
	// 	var that  = $(this);
	// 	that.css('height', '40px');
	// 	$('#tweet-controls').hide();
	// });

	$('textarea').keydown(function() {
		var len           = $(this).val().length,
			remainingChar = 139 -len;

		if (remainingChar <= 10) {
			$(this).css('color', 'red');
		}
		$('#char-count').html(remainingChar);
		if (remainingChar <= 0) {
			$('.button#tweet-submit').attr('disabled', true)
		}
		else if (remainingChar >= 1) {
			$('.button#tweet-submit').attr('disabled', false);
		}
	});
	$('.button').click(function(){
		var toAdd = $('input[class=tweet-compose]').val();
		$('#stream').prepend("<div class = 'tweet'>" + toAdd + "</div>")

	});

});