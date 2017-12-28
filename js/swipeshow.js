$(function () {

	var switcherOptions = $('.switcher__name'),
			sliderObjects = {
				slider: $('.slider'),
				controls: $('.switcher'),
				previous: $('.switcher__btn--prev'),
				next: $('.switcher__btn--next'),
				slides: $('.slider__slides-wrapper'),
				slide: $('.slider__slide'),
				dots: $('.slider__dots')
			},
			slidesCount = $(sliderObjects.slide).length;

	$(switcherOptions).on('click', function () {
		var index = $(this).index() - 1;
		$(sliderObjects.slider).swipeshow().goTo(index);
		$(switcherOptions).removeClass('switcher__name--active');
		$(switcherOptions[index]).addClass('switcher__name--active');
	});


	$(sliderObjects.slides).css('width', slidesCount*100+'%');

	for (key in sliderObjects) {
		sliderObjects[key].addClass(key);
	}


	$(sliderObjects.slider).swipeshow({
		autostart: false,
		onactivate: function(slide, index) {
			$(switcherOptions).removeClass('switcher__name--active');
			$(switcherOptions[index]).addClass('switcher__name--active');
		}
	});

	$('.dot-item').addClass('slider__dot');

});