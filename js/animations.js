$(document).ready(function(){

	var elementToAnimate = $('[data-animation]')
	elementToAnimate.each(function () {
		if (!$(this).hasClass('animated')) {
			$(this).css('opacity', 0);
			var animationType = $(this).attr('data-animation');
			var element = $(this);
			element.waypoint(function () {
				element
					.addClass('animated')
					.addClass(animationType)
					.css('opacity', '');
			}, { offset: '70%' });
		}
	});

	var animationsGroup = $('[data-animations-group]');
	animationsGroup.each(function () {
		$(this).find(elementToAnimate).each(function () {
			var animationType = $(this).attr('data-animation');
			var element = $(this);
			element.waypoint(function () {
				animationsGroup
					.find($('[data-animation]'))
					.addClass('animated')
					.addClass(animationType)
					.css('opacity', '');
			}, { offset: '70%'});
		});
	});

});