$(function () {

	var tags = $('.tags'),
			tag = $(tags).find($('.tags__item'));

	$(tags).attr('data-animations-group', '');
	$(tag).attr('data-animation', 'zoomIn');

	if ($(window).width() >= 768) {

		var elementToAnimate = $('[data-animation]');
		elementToAnimate.each(function () {
			if (!$(this).hasClass('animated')) {
				$(this).css('opacity', 0);
				var element = $(this);
				var animationType = element.attr('data-animation');
				element.waypoint(function () {
					element
						.addClass('animated')
						.addClass(animationType)
						.css('opacity', '');
				}, {offset: '85%' });
			}
		});

		var animationsGroup = $('[data-animations-group]');
		animationsGroup.each(function () {
			var group = $(this);
			group.find(elementToAnimate).each(function () {
				var element = $(this);
				var animationType = element.attr('data-animation');
				group.waypoint(function () {
					element
						.addClass('animated')
						.addClass(animationType)
						.css('opacity', '');
				}, {offset: '90%'});
			});
		});
	}

});