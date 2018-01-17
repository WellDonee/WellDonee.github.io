var button = document.querySelector('.backCalltoggleButton');

button.onclick = function() {
	var element = document.querySelector('.backCallForm');
	var arrow = document.querySelector('.backCalltoggleButton::after');
	if (element.classList.contains('hide')) {
		element.classList.remove('hide');
		arrow.classList.remove('hide');
	} else {
		element.classList.add('hide');
		arrow.classList.add('hide');
	}
}

$(document).ready(function() {
	$('.searchButton').click(function() {
		$('.searchForm').toggleClass('hide')
	});
});