// подключение css
$(document).ready(function() {
    $("head").append("<link rel='stylesheet' type='text/css' href='style/magnific-popup.css' />");
    $("head").append("<link rel='stylesheet' type='text/css' href='style/style.css' />");

});
$(function() {
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body,html').animate({scrollTop: bl_top}, 700);
		return false;
	})
	$('a[data-target^="top"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_bottom = $(target).offset().top - 150;
		$('body,html').animate({scrollTop: bl_bottom}, 700);
		return false;
	})
});

// Magnific Popup. Тип Ajax - загрузка контента в модальном окне
$(document).ready(function() {

	$('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.simple-ajax-popup').magnificPopup({
		type: 'ajax'
	});
	
});
