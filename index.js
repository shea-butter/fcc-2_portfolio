	// H2 blinking cursor

$(function () {
	count = 0;
	wordsArray = ["_", "_"];
	setInterval(function () {
	count++;
	$("#h3__cursor").fadeOut(500, function () {
		$(this).text(wordsArray[count % wordsArray.length]).fadeIn(200);
	});
	}, 1500);
});

// to top

jQuery(document).ready(function() {
	var winHeight = window.innerHeight;
	var offset = winHeight;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
		jQuery(".to-top").fadeIn(duration);
		} else {
			jQuery(".to-top").fadeOut(duration);
		}
	});

	jQuery(".to-top").click(function(event) {
		event.preventDefault();
		jQuery("html, body").animate({
			scrollTop: 0
		}, duration);
		return false;
	})
});
