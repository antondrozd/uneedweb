(function() {
	var navMain = document.querySelector('.main-nav');
	var navToggle = document.querySelector('.main-nav__toggle');

	navMain.classList.remove('main-nav--nojs');

	navToggle.addEventListener('click', function() {
		if (navMain.classList.contains('main-nav--closed')) {
			navMain.classList.remove('main-nav--closed');
			navMain.classList.add('main-nav--opened');
			document.body.style.overflow = 'hidden';
		} else {
			navMain.classList.remove('main-nav--opened');
			navMain.classList.add('main-nav--closed');
			document.body.style.overflow = '';
		}
	});

	$(function () {

		var lastScrollTopValue = 0;
		$(window).scroll(function () {
			var scrollTopValue = $(this).scrollTop();
			if (scrollTopValue <= 0) {
				navMain.classList.remove('main-nav--scroll-up');
				navMain.classList.remove('main-nav--scroll-down');
				return;
			}
			if (scrollTopValue <= lastScrollTopValue) {
				navMain.classList.add('main-nav--scroll-up');
				navMain.classList.remove('main-nav--scroll-down');
			} else {
				navMain.classList.add('main-nav--scroll-down');
				navMain.classList.remove('main-nav--scroll-up');
			}
			lastScrollTopValue = scrollTopValue;
		});

	});

})();