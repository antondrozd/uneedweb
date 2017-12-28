$(function () {

	var sliderObjects = {
		slider: $('.slider'),
		controls: $('.switcher'),
		previous: $('.switcher__btn--prev'),
		next: $('.switcher__btn--next'),
		slides: $('.slider__slides-wrapper'),
		slide: $('.slider__slide'),
		dots: $('.slider__dots')
	},
			slidesCount = $(sliderObjects.slide).length;

	$(sliderObjects.slides).css('width', slidesCount*100+'%');

	for (key in sliderObjects) {
		sliderObjects[key].addClass(key);
	}


	$(sliderObjects.slider).swipeshow({
		autostart: false
	});

	$('.dot-item').addClass('slider__dot');
	
});