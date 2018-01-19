$(document).ready(function() {
	$('.backCalltoggleButton').click(function() {
		$('.backCallForm').toggleClass('hide')
	});

	$('.searchButton').click(function() {
		$('.searchForm').toggleClass('hide')
	});
});