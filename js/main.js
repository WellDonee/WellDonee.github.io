$(document).ready(function() {
	$('.backCalltoggleButton').click(function() {
		$('.backCallForm').slideToggle(500)
	});

	$('.searchButton').click(function() {
		$('.searchForm').toggleClass('hide')
	});
	$('.subMenuToggle').click(function() {
		$('.projectsSubMenu').slideToggle(500)
	});
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 2,
  	slideBy: 2,
  	loop: true,
  	autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false
  });
});