(function () {

	var table = document.querySelector('.services-table table'),
			tableColumnFirstItems = table.querySelectorAll('tr > *:nth-child(2)'),
			tableColumnSecondItems = table.querySelectorAll('tr > *:nth-child(3)'),
			tableColumnThirdItems = table.querySelectorAll('tr > *:nth-child(4)'),
			columnCurrent = 1,
			switchPrev = table.querySelector('.services-table__switch-btn--prev'),
			switchNext = table.querySelector('.services-table__switch-btn--next');

	function tableSwitch (index) {
		if (index ==1) {
			tableColumnSecondItems.forEach(function (item) {
				item.style.transform = '';
				item.style.opacity = '0';
			});
		}

		if (index == 2) {
			tableColumnSecondItems.forEach(function (item) {
				item.style.transform = 'translateX(-100%)';
				item.style.opacity = '1';
			});
			tableColumnThirdItems.forEach(function (item) {
				item.style.transform = 'translateX(-100%)';
				item.style.opacity = '0';
			});
		}

		if (index == 3) {
			tableColumnThirdItems.forEach(function (item) {
				item.style.transform = 'translateX(-200%)';
				item.style.opacity = '1';
			});
		}
		columnCurrent = index;
	}

	switchPrev.addEventListener('click', function () {
		if (columnCurrent > 1) {
			tableSwitch(columnCurrent-1);
			}
	});

	switchNext.addEventListener('click', function () {
		if (columnCurrent < 3) {
			tableSwitch(columnCurrent+1);
			}
	});

	$(window).resize(function () {
		if ($(window).width() >= 1200) {
			tableColumnFirstItems.forEach(function (item) {
				item.style = '';
			});
			tableColumnSecondItems.forEach(function (item) {
				item.style = '';
			});
			tableColumnThirdItems.forEach(function (item) {
				item.style = '';
			});
		}
	});

})();