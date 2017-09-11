(function() {
	window.uneed = window.uneed || {};
	var slides = $(".portfolio-slides"),
		switcherOptions = $('#switcher > a'),
		swipeshowConfig = {
			autostart: false,
			$next: $(".slide-right"),
			$previous: $(".slide-left")
		};
	slides.swipeshow(swipeshowConfig);
	window.uneed.onChangePortfolio = function(number) {
		slides.swipeshow().goTo(number);
		switcherOptions.removeClass('active');
		$(switcherOptions[number-1]).addClass('active');
	}
})();