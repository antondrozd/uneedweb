// (function() {
// 	window.uneed = window.uneed || {};
// 	var filterOptions = ['all', 'web', 'mobile', 'design'],
// 		projects = $('#projects'),
// 		slides = $(".gallery-container"),
// 		activeFilter = 'all',
// 		filterEls = $('#all-filter, #web-filter, #mobile-filter, #design-filter'),
// 		swipeshowConfig = {
// 			autostart: false,
// 			$next: $("#switch-right"),
// 			$previous: $("#switch-left")
// 		};

// 	slides.swipeshow(swipeshowConfig);

// 	window.uneed.onChangePortfolioFilter = function(filter) {
// 		filterEls.removeClass('active');
// 		$('#' + filter + '-filter').addClass('active');
// 		projects.removeClass();
// 		projects.addClass(filter + '-filter');
// 		activeFilter = filter;
// 	};
// 	window.uneed.onPrevPortfolioFilter = function() {
// 		var currentIndex = filterOptions.indexOf(activeFilter);
// 		if (currentIndex === 0) {
// 			currentIndex = filterOptions.length - 1;
// 		}
// 		var prevIndex = currentIndex - 1;
// 		window.uneed.onChangePortfolioFilter(filterOptions[prevIndex]);
// 	};
// 	window.uneed.onNextPortfolioFilter = function() {
// 		var currentIndex = filterOptions.indexOf(activeFilter);
// 		if (currentIndex === filterOptions.length - 1) {
// 			currentIndex = 0;
// 		}
// 		var nextIndex = currentIndex + 1;
// 		window.uneed.onChangePortfolioFilter(filterOptions[nextIndex]);
// 	};
// })();



// (function () {

var filterOptions = ['all', 'web', 'mobile', 'design'],
		gallery = document.querySelector('.projects-gallery__list'),
		galleryItems = gallery.querySelectorAll('.project-item');

// })();