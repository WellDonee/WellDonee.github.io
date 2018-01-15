var button = document.querySelector('.backCalltoggleButton');

button.onclick = function() {
	var element = document.querySelector('.backCallForm');
	var arrow = document.querySelector('.backCalltoggleButton::after');
	if (element.classList.contains('hide')) {
		element.classList.remove('hide');
		arrow.style.transform = 'rotate(0deg)';
	} else {
		element.classList.add('hide');
		arrow.style.transform = 'rotate(90deg)';
	}
}

$(document).ready(function() {
	$('.searchButton').click(function() {
		$('.searchForm').toggleClass('hide')
	});
});