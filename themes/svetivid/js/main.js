Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
  	$ = jQuery;
    // Using once() to apply the myCustomBehaviour effect when you want to run just one function.

    $(document).ready(function(){
    	$('.close-acc').removeClass('active');
    	$('dd.close-acc').hide();
    });

	//-- Mobile menu
	$('.ham-menu-btn').click(function(){
		$(this).toggleClass('is-active');
		$('.header__nav').fadeToggle();
		$('html, body').toggleClass('noScroll');
	}); 

	//-- Mobile sub nav
	$('.with-sub>a').click(function(e){
		if($(window).width() < 1200){
			e.preventDefault();
		}
		
		$(this).parent().find($('.subNav-holder')).toggleClass('expand');
	});

	// $('.with-sub.no-link>a').click(function(e){
	// 	e.preventDefault();
	// 	//$(this).parent().find($('.subNav-holder')).toggleClass('expand');
	// });

	//-- Lang switcher
	$('.lang-switcher .is-active').on('click', 'a',	 function(e){
		const langLinks = $('.lang-switcher .links li');
		e.preventDefault();

		langLinks.not(document.getElementsByClassName('is-active')).toggle();

		 $(document).on('click', function(event) {
            if (!$(event.target).closest('.lang-switcher').length) {
                // Hide the menus.
                langLinks.not(document.getElementsByClassName('is-active')).hide();
            }
        });
	});
	// Expand accordion on link click
	$('.accordion-nav, .header__subNav').find('a').click( function(e){
		let link = $(this).attr('href');

		if(link.indexOf('#') > -1){
			e.preventDefault();		
			$('dt').removeClass('active');
			$('dd').removeClass('active');
			$('dd').hide();
			
			$(link).addClass('active');
			$(link).next().addClass('active');
			$(link).next().show();

			let toPos = $(link).offset().top - 100;
			console.log(toPos);
			$('html, body').animate({
			        scrollTop: toPos
			}, 1000);
		}
		//console.log(link);
	}); 
	//-- Init slick slider in content
	$('.slick-init').slick({
		dots: true,
		arrows: true,
		autoplay: true
	});

	if($(window).width() < 990 ) {
		$('.mini-award-slick').slick({
			dots: true,
			arrows: false
		});
	}

	window.onscroll = function() {toggleSticky()};

	var navbar = document.getElementsByClassName("header__main")[0];
	var sticky = navbar.offsetTop;

	function toggleSticky() {
	  if (window.pageYOffset >= sticky + 120) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}

	// $('dt').click(function(){
	// 	console.log("click accordion");
	// 	$('html, body').animate({
	// 	    scrollTop: $(this).find('.ckeditor-accordion-toggler').offset().top
	// 	  }, 1000);
	// });
	
}}

