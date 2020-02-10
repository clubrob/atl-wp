document.addEventListener("DOMContentLoaded", function() {
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

  // const siteHeaderHeight = siteHeader.scrollHeight - 1;
  // const pageContent = document.querySelector('.site-content');
  // if(window.innerHeight >= 768) {
  //   pageContent.style = `padding-top: ${siteHeaderHeight}px;`;
  // }
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
