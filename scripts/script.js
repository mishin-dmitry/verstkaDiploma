$(document).ready(function(){
	var w = $(window).width();

	$('.page_is_loaded').addClass('active');

	$('.btn__call').click(function(){
		$('.popup-container__call').show();
		$('html, body').css('overflow-y', 'hidden');
	});

	$('.connection__btn').click(function(){
		$('.popup-container__call').show();
		$('html, body').css('overflow-y', 'hidden');
	});

	$('.btn__orange--footer').click(function(){
		$('.popup-container__call').show();
		$('html, body').css('overflow-y', 'hidden');
	});

	$('.main-inform__btn').click(function(){
		$('.popup-container__more').show();
		$('html, body').css('overflow-y', 'hidden');
	});

	$('.wrap-white__btn').click(function(){
		$('.popup-container__more').show();
		$('html, body').css('overflow-y', 'hidden');
	});

	$('.wrap-grey__btn').click(function(){
		$('.popup-container__more').show();
		$('html, body').css('overflow-y', 'hidden');
	});

	$('.popup-container').click(function(event){
		if(event.target == this) {
			$(this).hide();
			$('html, body').css('overflow-y', 'auto');
		}
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:20,
		navText: ["<img src='../img/arrow-left.png'>","<img src='../img/arrow-right.png'>"],
		responsiveClass:true,
		responsive:{
        0:{
            items:1
        },
        768:{
            items:2,
        },
        1025:{
        	items: 3,
        	nav: true,
			dots: false,
    	}
    }
	});
	var div = $('.dropdown');
	var button = $('.dropdown__btn');
	var menu = $('.nav__header');

	div.click(function(){
		button.toggleClass('open');
		menu.toggleClass('active');
	});
});