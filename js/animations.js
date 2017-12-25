$(document).ready(function(){

	var elementToAnimate = $('[data-animation]').css('opacity', 0);
	elementToAnimate.each(function () {
		var animationType = $(this).attr('data-animation');
		var element = $(this);
		element.waypoint(function() {
			element.addClass('animated').addClass(animationType).css('opacity', '');
			console.log(animationType);
		}, { offset: '70%' });
	});

});