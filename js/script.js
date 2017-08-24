(function() {
	var navbarButton = document.getElementById('toggle-navbar');
	var body = document.getElementsByTagName('body')[0];
	navbarButton.addEventListener('click', function() {
		body.classList.toggle('navbar-expanded');
	});
})(window);