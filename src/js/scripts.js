document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.querySelector('.menu-toggle');
	menuToggle.addEventListener('click', e => {
		document.body.classList.toggle('nav-open');
	});

	const siteHeader = document.querySelector('.site-header');
	window.addEventListener('scroll', e => {
		if (window.scrollY === 0) {
			siteHeader.classList.remove('scrolled');
		} else {
			siteHeader.classList.add('scrolled');
		}
	});

	// Fade In on Scroll
	let options = {
		rootMargin: '0px',
		threshold: [0, 0.4, 0.5]
	}
	let homeObserver = new IntersectionObserver(fadeIn, options);
	let teachingsFadeItems = Array.from(document.querySelectorAll('.wpfc-sermon'));
	let appFadeItems = Array.from(document.querySelectorAll('.minute-audio'));

	function fadeIn(elements) {
		elements.forEach(element => {
			if (element.intersectionRatio !== 0) {
				element.target.style.opacity = 1;
				element.target.style.transform = 'scale(1)';
			} else {
				element.target.style.opacity = 0;
				element.target.style.transform = 'scale(.8)';
			}
		});
	};
	teachingsFadeItems.forEach(item => {
		homeObserver.observe(item);
	});
	appFadeItems.forEach(item => {
		homeObserver.observe(item);
	});

	var SLIDER_CLASS = 'slider';
	var DELAY = 6000;
	var sliders = document.getElementsByClassName(SLIDER_CLASS);

	initSliders();

	function slideAll() {
		for (var i = 0; i < sliders.length; i++) {
			if (!sliders[i].getAttribute('data-slider-paused')) {
				slide(sliders[i]);
			}
		}
	}

	function slide(slider) {
		slider.sliderIndex++;
		slider.children[0].style.marginLeft = -slider.clientWidth * (slider.sliderIndex % slider.children.length) + 'px';
	}

	function initSliders() {
		for (var i = 0; i < sliders.length; i++) {
			var slider = sliders[i];

			slider.sliderIndex = 0;
			slider.onclick = clickSlider;
		}
		setInterval(slideAll, DELAY);
	}

	function clickSlider(e) {
		if (!e.target.classList.contains(SLIDER_CLASS)) {
			return;
		}

		var bounds = this.getBoundingClientRect();
		if (e.clientX - bounds.left < bounds.width / 2) {
			this.sliderIndex += sliders.length;
		}
		slide(this);
	}

});

jQuery(document).ready(function () {
	const topBanner = jQuery('#topBanner');
	const topBannerHeight = topBanner.height();

	// jQuery('body').css('padding-top', topBannerHeight + 'px');

	// const viewportHeight = (jQuery(window).height() - topBannerHeight) * .01;
	// if (jQuery(window).width() <= 768) {
	//   document.documentElement.style.setProperty('--vh', `${viewportHeight}px`);
	// }

	const navToggler = jQuery('#navToggler');
	navToggler.click(() => {
		if (navToggler.attr('aria-expanded') === 'false') {
			navToggler.attr('aria-expanded', true);
		} else {
			navToggler.attr('aria-expanded', false);
		}

		jQuery('body').toggleClass('nav-open');
		jQuery('.nav-bar').toggleClass('nav-open');
	});

	const mainNavDrawer = jQuery('#mainNavDrawer');
	jQuery(window).resize(() => {
		// const topBannerHeightResized = topBanner.height();
		// mainNavDrawer.css('top', topBannerHeightResized + 'px');
		// jQuery('body').css('padding-top', topBannerHeightResized + 'px');

		// Reset nav state if window gets too large
		if (jQuery(window).width() > 768) {
			jQuery('body').removeClass('nav-open');
			jQuery('.nav-bar').removeClass('nav-open');
			navToggler.attr('aria-expanded', false);
		}

		// const windowHeight = (jQuery(window).height() - topBannerHeightResized) * .01;
		// if (jQuery(window).width() <= 768) {
		//   document.documentElement.style.setProperty('--vh', `${windowHeight}px`);
		// }
	});

	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() === 0) {
			topBanner.removeClass('scrolled');
		} else {
			topBanner.addClass('scrolled');
		}
	});
});
