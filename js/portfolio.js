(function() {
	var gallery = $(".gallery-container"),
		swipeshowConfig = {
			autostart: false,
			$next: $(".slide-right"),
			$previous: $(".slide-left")
		};
	gallery.swipeshow(swipeshowConfig);
})();