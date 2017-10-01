(function() {
	window.uneed = window.uneed || {};
	var filterOptions = ['all', 'web', 'mobile', 'design'],
		projects = $('#projects'),
		slides = $(".gallery-container")
		filterEls = $('#all-filter, #web-filter, #mobile-filter, #design-filter'),
		swipeshowConfig = {
			autostart: false,
			$next: $("#switch-right"),
			$previous: $("#switch-left")
		};

	slides.swipeshow(swipeshowConfig);

	window.uneed.onChangePortfolioFilter = function(filter) {
		filterEls.removeClass('active');
		$('#' + filter + '-filter').addClass('active');
		projects.removeClass();
		projects.addClass(filter + '-filter');
	};
})();