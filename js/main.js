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