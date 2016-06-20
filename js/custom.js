$(document).foundation();
$(document).ready(function(){
	// Show / hide Temporary Menu
	$('#temporary-menu__link').click(function(){
		$('#temporary-menu ul').slideToggle();
	})

	// News Listing page: Banner section
	$('.banner__list').slick();
	
	// Dispensaries Listing page
		// Google Map section - disable wheelscroll
		// you want to enable the pointer events only on click;
		$('.map iframe').addClass('scrolloff'); // set the pointer events to none on doc ready
		$('.map').on('click', function () {
			$('.map iframe').removeClass('scrolloff'); // set the pointer events true on click
		});
		// you want to disable pointer events when the mouse leave the canvas area;
		$('.map iframe').mouseleave(function () {
			$('.map iframe').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
		});
	
		// Sidebar section - show / hide filter items
		$('.dispensaries-listing__sidebar-filter-item h3').click(function() {
			$(this).next('form').slideToggle();
		});
		
	// Dispensaries Details page: Menu section - show / hide table content
	$('.dispensaries-details__menu-item h2').click(function() {
		$(this).next('table').toggle();
	});
	
	// Strains Details page: donut charts
	var percent_val = 0;
	var degrees_val = 0;
	var percent_counter = 0;
	
	if ($('.circle').length != 0) {
		$('.circle').each(function(x) {
			//percent_val = $(this).find('span').text().replace('%','');
			percent_val = $(this).attr('data-value');
			degrees_val = (percent_val * 0.01) * 360;		  
			counter = x+1;			
		
			if (percent_val > 50) {
				$(this).find('.pie.big').attr('style','display: block;');
				$('.benefits').prepend('<style>.benefits-item:nth-of-type('+counter+') .pie.big:before { animation: spin'+counter+' 1s forwards; -moz-animation: spin'+counter+' 1s forwards; -webkit-animation: spin'+counter+' 1s forwards; } @-moz-keyframes spin'+counter+' { 100% { -moz-transform: rotate('+degrees_val+'deg); } } @-webkit-keyframes spin'+counter+' { 100% { -webkit-transform: rotate('+degrees_val+'deg); } } @keyframes spin'+counter+' { 100% { -webkit-transform: rotate('+degrees_val+'deg); transform:rotate('+degrees_val+'deg); } }</style>');
				$(this).find('span').fadeIn();
			}
			else {
				$(this).find('.pie.small').attr('style','display: block;');
				$('.benefits').prepend('<style>.benefits-item:nth-of-type('+counter+') .pie.small:before { animation: spin'+counter+' 1s forwards; -moz-animation: spin'+counter+' 1s forwards; -webkit-animation: spin'+counter+' 1s forwards; } @-moz-keyframes spin'+counter+' { 100% { -moz-transform: rotate('+degrees_val+'deg); } } @-webkit-keyframes spin'+counter+' { 100% { -webkit-transform: rotate('+degrees_val+'deg); } } @keyframes spin'+counter+' { 100% { -webkit-transform: rotate('+degrees_val+'deg); transform:rotate('+degrees_val+'deg); } }</style>');
				$(this).find('span').fadeIn();
			}
		});
	}
});