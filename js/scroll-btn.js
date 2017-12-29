$(function() {

	$('a[href^="#"]:not([href="#"])').click(function (event) {
		event.preventDefault();
    var scrollTo = $(this).attr('href');
    $('html, body').animate({
    	scrollTop: $(scrollTo).offset().top
    }, 1000);
  });

});