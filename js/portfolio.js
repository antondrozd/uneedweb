(function filter () {

	var filterOptions = ['all', 'web', 'mobile', 'design'],
			gallery = document.querySelector('.projects-gallery'),
			galleryItems = Array.prototype.slice.call(gallery.querySelectorAll('.project-item')),
			gallerySwitcher = gallery.querySelector('.switcher'),
			filterItems = gallerySwitcher.querySelectorAll('.switcher__name'),
			filterSwitchPrev = gallerySwitcher.querySelector('.switcher__btn--prev'),
			filterSwitchNext = gallerySwitcher.querySelector('.switcher__btn--next'),
			currentFilter = 'all',
			currentFilterIndex = 0,
			firstRendering = true;

	filterItems.forEach(function (item) {
		item.addEventListener('click', function (event) {
			var type = event.target.getAttribute('data-type');
			onFilterChange(type);
			item.classList.add('switcher__name--active');
		});
	});

	function onFilterSwitch(index) {
		var newFilter = filterOptions[index];
		var filterEl = document.querySelector('[data-type="' + newFilter + '"]');
		filterEl.classList.add('switcher__name--active');
		onFilterChange(newFilter);
	}

	filterSwitchPrev.addEventListener('click', function () {
		var newIndex = currentFilterIndex - 1;
		if (newIndex < 0) {
			newIndex = filterOptions.length - 1;
		}
		onFilterSwitch(newIndex);
	});

	filterSwitchNext.addEventListener('click', function () {
		var newIndex = currentFilterIndex + 1;
		if (newIndex > filterOptions.length - 1) {
			newIndex = 0;
		}
		onFilterSwitch(newIndex);
	});

	function onFilterChange (filter) {
		var result = galleryItems;
		if (filter !== 'all') {
			result = galleryItems.filter(function (item) {
				var types = item.getAttribute('data-type').split(' ');
				return types.indexOf(filter) > -1;
			});
		}
		galleryItems.forEach(function (item) {
			item.classList.remove('animated');
			item.classList.remove('project-item--visible');
			item.classList.add('animated');
		});
		result.forEach(function (item) {
			item.classList.add('project-item--visible');
		});
		if (!firstRendering) {
			filterItems[currentFilterIndex].classList.remove('switcher__name--active');
			currentFilter = filter;
			currentFilterIndex = filterOptions.indexOf(currentFilter);
		}
	};

	onFilterChange('all');
	firstRendering = false;

})();