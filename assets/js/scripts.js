/*
 * Foundation Scripts
 * Ver 1.4.23
 * Author: LO Studio
 * @link https://www.linoolmostudio.it/
 *
 * This file should contain any js scripts you want to add to the site and will be called automatically in the footer
 *
 */


/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ CUSTOM SCRIPTS ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */

jQuery(document).ready(function($) {



	// SECTION TRIGGER GSAP
	jQuery(".sec_trigger, .s1, .textAnim").each(function() {
	    target = jQuery(this);
	    ScrollTrigger.create({
	        trigger: target,
	        start: "top 90%",
	        end: "99999 top",
	        // markers: true,
	        toggleClass: { targets: target, className: "active" }
	    });
	});







	// TEXT ANIMATION
	gsap.utils.toArray(".textAnim h2, .textAnim h3").forEach((title) => {

		var containerTrigger = jQuery(title).closest('div');
		var childSplit_h2 = new SplitText(title, { type: "lines", linesClass: "split-child" });
		var parentSplit_h2 = new SplitText(title, { type: "lines", linesClass: "split-parent" });

		gsap.from(childSplit_h2.lines, {
			scrollTrigger: {
				trigger: containerTrigger,
				start: "top 80%",
	        	end: "99999 top",
				toggleActions: "play none none reverse",
			},

			duration: 1.5,
			yPercent: 100,
			opacity: 0,
			ease: "power4",
			stagger: 0.1
		});
	});

	// ONLY H1 (delay per animazione)
	gsap.utils.toArray(".textAnim h1").forEach((title) => {

		var containerTrigger = jQuery(title).closest('.container');
		var childSplit_h2 = new SplitText(title, { type: "lines", linesClass: "split-child" });
		var parentSplit_h2 = new SplitText(title, { type: "lines", linesClass: "split-parent" });

		gsap.from(childSplit_h2.lines, {
			scrollTrigger: {
				trigger: containerTrigger,
				start: "top bottom",
	        	end: "99999 top",
				toggleActions: "play none none reverse",
			},

			duration: 1.5,
			yPercent: 100,
			opacity: 0,
			ease: "power4",
			stagger: 0.1,
			delay: 0.75
		});
	});
















	// CUSTOM HERO PARALLAX


	/*
	// CASE : Section 1
	jQuery(window).scroll(function() { 
		var moving = jQuery('.section_class .bkg_thumb img'); // Target Element
		var value = jQuery(window).scrollTop() / 2.5; // Value in px
		var value = jQuery(window).scrollTop() * (2.5 / 100); // Value in %
		moving.css({ 'transform' : 'translateY(' + value + 'px)' });
	});


	// CASE : Section with 'height >= 100vh'
	jQuery(window).scroll(function() { 
		var moving = jQuery('.section_class .bkg_abs');
		var offset = jQuery('.section_class').offset().top;
		var difference = jQuery(window).scrollTop() - offset;

		// Scala in px
		var value = difference / 3;
		moving.css( 'transform', 'translateY(' + value + 'px )' );

		// Scala in %
		var value = difference * (3 / 100);
		moving.css( 'transform', 'translateY(' + value + '% )' );

	});


	// CASE : Section with 'height < 100vh'
	var moving = jQuery('.section_class .bkg_abs');
	jQuery(window).scroll(function() { 

		// Definire per il .bkg_abs questi valori css = 'height: auto; min-height: 100%; background-size: 100%;'

		// Calcola l'altezza in base all'altezza della sezione contenitore + parte di scroll in parallasse

		var scrollTop = jQuery(window).scrollTop();
		var offset = jQuery('#sec_gluten').offset().top;
		var diff = scrollTop - offset;
		var parallax = diff / 2.5;
		var moving = jQuery('#sec_gluten .bkg_abs');
		// moving.css( 'padding-top', ( jQuery('#sec_gluten').height() - parallax ) );
		moving.css( 'margin-top', parallax );

	});
	*/


	// ZOOM ON SCROLL - Potrebbe essere interessante aggiungere l'effetto all'Hero Parallax
	/*
	jQuery(window).scroll(function() {
		var scroll = jQuery(window).scrollTop();
		//value = (1 + '.' + Math.round(scroll/105));
		value = (1+ (scroll/2000));
		jQuery(".img_bkg").css({ 'transform' : 'scale(' +value+ ')' });
	});
	*/


	// PARALLAX WITH ZOOM ON SCROLL
	/*
	jQuery(window).scroll(function(){ 

		var moving = jQuery('.section_class .bkg_abs'); // Target Element
		var scroll = jQuery(window).scrollTop();
		var value = jQuery(window).scrollTop() / 2.5; // Value in px
		var value = jQuery(window).scrollTop() * (2.5 / 100); // Value in %
		moving.css({ 'transform' : 'translateY(' + value + 'px)' });

		//value = (1 + '.' + Math.round(scroll/105));
		value = (1+ (scroll/2000));
		jQuery('.section_class .bkg_abs img').css({ 'transform' : 'scale(' +value+ ')' });

	});
	*/






	// ADD ATTRIBUTE / DATA TO ELEMENTS
	/*
	alert(jQuery('#outer').html());   // alerts <div id="mydiv" data-myval="10"> </div>
	var a = jQuery('#mydiv').data('myval'); //getter
	jQuery('#mydiv').attr("data-myval","20"); //setter
	alert(jQuery('#outer').html());   //alerts <div id="mydiv" data-myval="20"> </div>
	*/
	jQuery('textarea').attr("rows", "3");






	/*∞∞ IE FALLBACK ∞∞*/

	jQuery('#is-IE-off').click(function(){
		jQuery('body').removeClass('is-IE');
	});






	// OPZIONALE - Utile per centrare l'offset se lo sticky non ha altezza fissa
	/*
	jQuery(document).ready(function($){
		var height = jQuery('.sticky').height();
		var offset = jQuery(window).height() - height;
		jQuery('.sticky').css( 'top', offset / 2 );
	});
	*/




});


var mega_text_console = "\n█   ▄▀▀▄     ▄▀▀ ▀█▀ █ █ █▀▄ ▀ ▄▀▀▄ \n█ ▄ █  █      ▀▄  █  █ █ █ █ █ █  █ \n▀▀▀  ▀▀      ▀▀   ▀   ▀  ▀▀  ▀  ▀▀   \n\nDeveloper? Designer? Just curious? Why don't you take a look at our many projects -> https://www.linoolmostudio.it/portfolio-siti-web-bergamo/";
console.log(mega_text_console);

/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  END | CUSTOM SCRIPTS ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */

