(function() {
	window.uneed = window.uneed || {};
	var filterOptions = ['all', 'web', 'mobile', 'design'],
		projects = $('#projects'),
		filterEls = $('#all-filter, #web-filter, #mobile-filter, #design-filter');

	window.uneed.onChangePortfolioFilter = function(filter) {
		filterEls.removeClass('active');
		$('#' + filter + '-filter').addClass('active');
		projects.removeClass();
		projects.addClass(filter + '-filter');
	};
})();