(function() {
	window.uneed = window.uneed || {};

	window.uneed.onChangePortfolio = function(number) {
		slides.swipeshow().goTo(number);
		switcherOptions.removeClass('active');
		$(switcherOptions[number]).addClass('active');
	};

	var slides = $(".portfolio-slides"),
		switcherOptions = $('#switcher > a'),
		scrollDown = $('#scroll-down'),
		blockLinks = $('[data-href]'),
		swipeshowConfig = {
			autostart: false,
			$next: $("#switch-right"),
			$previous: $("#switch-left"),
			onactivate: function(slide, index) {
				switcherOptions.removeClass('active');
				$(switcherOptions[index]).addClass('active');
			}
		};

	slides.swipeshow(swipeshowConfig);

	scrollDown.on('click', function() {
		$('html, body').animate({
			scrollTop: window.innerHeight
		}, 800);
	});

	blockLinks.on('click', function() {
		var href = $(this).data('href');
		window.location.href = href;
	});

	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		var self = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) { delta /= 2; }

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function() {
			self.tick();
		}, delta);
	};

	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
			  new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	};
})();