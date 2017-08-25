(function(window) {
	var jWindow = $(window),
		serviceSlides = $(".services-slides"),
		isSwipeInitialized = false,
		swipeshowConfig = {
			autostart: false,
			$next: $(".slide-right"),
			$previous: $(".slide-left")
		};

	function throttle(callback, limit) {
		var wait = false;                  // Initially, we're not waiting
		return function () {               // We return a throttled function
			if (!wait) {                   // If we're not waiting
				callback.call();           // Execute users function
				wait = true;               // Prevent future invocations
				setTimeout(function () {   // After a period of time
					wait = false;          // And allow future invocations
				}, limit);
			}
		}
	}

	var onResize = throttle(function() {
		if (jWindow.width() > 992) {
			if (isSwipeInitialized) {
				serviceSlides.unswipeshow();
				isSwipeInitialized = false;
			}
		} else if (!isSwipeInitialized) {
			serviceSlides.swipeshow(swipeshowConfig);
			isSwipeInitialized = true;
		}
	}, 300);
	jWindow.resize(onResize);
	onResize();
})(window);