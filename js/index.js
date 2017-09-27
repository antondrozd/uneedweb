(function() {
	window.uneed = window.uneed || {};

	window.uneed.onChangePortfolio = function(number) {
		slides.swipeshow().goTo(number);
		switcherOptions.removeClass('active');
		$(switcherOptions[number]).addClass('active');
	};

	var slides = $(".portfolio-slides"),
		switcherOptions = $('#switcher > a'),
		sections = $('section'),
		scrollDown = $('#scroll-down'),
		blockLinks = $('[data-href]'),
		swipeshowConfig = {
			autostart: false,
			$next: $("#switch-right"),
			$previous: $("#switch-left"),
			onactivate: function(slide, index) {
				switcherOptions.removeClass('active');
				$(switcherOptions[index]).addClass('active');
			}
		};

	slides.swipeshow(swipeshowConfig);

	scrollDown.on('click', function() {
		$('html, body').animate({
			scrollTop: window.innerHeight
		}, 800);
	});

	blockLinks.on('click', function() {
		var href = $(this).data('href');
		window.location.href = href;
	});

	sections.appear();

	sections.on('appear', function(event, elements) {
		elements.each(function(index, el) {
			$(el).addClass('visible');
		});
	});

	$.force_appear();

	// sections.on('disappear', function(event, elements) {
	// 	elements.each(function(index, el) {
	// 		$(el).removeClass('visible');
	// 	});
	// });
})();