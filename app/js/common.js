$(window).click(function() {
	$('.header__mob-menu').removeClass('show');
	$('.header__mob').removeClass('show-menu');
	$('.burger-button').removeClass('active');
  });

$('.burger-button').on('click', function () {
	$(this).toggleClass('active');
	$('.header__mob-menu').toggleClass('show');
	$('.header__mob').toggleClass('show-menu');
});

  
$('.burger-button').click(function(event){
	event.stopPropagation();
});