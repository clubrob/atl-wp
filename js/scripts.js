document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".menu-toggle").addEventListener("click",e=>{document.querySelector("html").classList.toggle("nav-open")});const e=document.querySelector(".site-header");window.addEventListener("scroll",r=>{0===window.scrollY?e.classList.remove("scrolled"):e.classList.add("scrolled")});let r=new IntersectionObserver((function(e){e.forEach(e=>{0!==e.intersectionRatio?(e.target.style.opacity=1,e.target.style.transform="scale(1)"):(e.target.style.opacity=0,e.target.style.transform="scale(.8)")})}),{rootMargin:"0px",threshold:[0,.4,.5]}),t=Array.from(document.querySelectorAll(".wpfc-sermon")),n=Array.from(document.querySelectorAll(".minute-audio"));function o(e,r){"reverse"===(r||null)?e.sliderIndex--:e.sliderIndex++,e.children[0].style.marginLeft=-e.clientWidth*(e.sliderIndex%e.children.length)+"px"}t.forEach(e=>{r.observe(e)}),n.forEach(e=>{r.observe(e)}),function(){const e=document.querySelector(".slider");e.sliderIndex=0,e.addEventListener("click",r=>{if(!r.target.classList.contains("slider"))return;const t=r.target.getBoundingClientRect();if(r.clientX-t.left<t.width/2)return r.target.sliderIndex+=e.children.length,void o(r.target,"reverse");o(r.target)}),setInterval(()=>o(e),7e3)}()})),jQuery(document).ready((function(){const e=jQuery("#topBanner"),r=(e.height(),jQuery("#navToggler"));r.click(()=>{"false"===r.attr("aria-expanded")?r.attr("aria-expanded",!0):r.attr("aria-expanded",!1),jQuery("body").toggleClass("nav-open"),jQuery(".nav-bar").toggleClass("nav-open")});jQuery("#mainNavDrawer");jQuery(window).resize(()=>{jQuery(window).width()>768&&(jQuery("body").removeClass("nav-open"),jQuery(".nav-bar").removeClass("nav-open"),r.attr("aria-expanded",!1))}),jQuery(window).scroll((function(){0===jQuery(window).scrollTop()?e.removeClass("scrolled"):e.addClass("scrolled")}))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJzaXRlSGVhZGVyIiwicmVtb3ZlIiwiYWRkIiwidGhyZXNob2xkIiwiYXBwRmFkZUl0ZW1zIiwiQXJyYXkiLCJlbGVtZW50IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJmb3JFYWNoIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwicm9vdE1hcmdpbiIsImhvbWVPYnNlcnZlciIsInRlYWNoaW5nc0ZhZGVJdGVtcyIsImZyb20iLCJmYWRlSW4iLCJpbnRlcnNlY3Rpb25SYXRpbyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzbGlkZSIsInNsaWRlckVsZW0iLCJkaXJlY3Rpb24iLCJzbGlkZXJJbmRleCIsImluaXRTbGlkZXIiLCJtYXJnaW5MZWZ0IiwiY2xpZW50V2lkdGgiLCJzbGlkZXIiLCJjaGlsZHJlbiIsImxlbmd0aCIsIml0ZW0iLCJvYnNlcnZlIiwiYm91bmRzIiwiY29udGFpbnMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsIndpZHRoIiwic2V0SW50ZXJ2YWwiLCJqUXVlcnkiLCJyZWFkeSIsInRvcEJhbm5lciIsImhlaWdodCIsInRvZ2dsZUNsYXNzIiwiY2xpY2siLCJuYXZUb2dnbGVyIiwiYXR0ciIsIm1haW5OYXZEcmF3ZXIiLCJyZXNpemUiLCJyZW1vdmVDbGFzcyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsU0FBU0MsaUJBQWlCLG9CQUFvQixXQUN6QkQsU0FBU0UsY0FBYyxnQkFDL0JELGlCQUFpQixRQUFTRSxJQUNuQ0gsU0FBU0UsY0FBYyxRQUFRRSxVQUFVQyxPQUFPLGNBSWxEQyxNQUFNQyxFQUFDTixTQUFpQkMsY0FBaUIsZ0JBQ3ZDSSxPQUFJQSxpQkFBQSxTQUFzQkgsSUFDSEssSUFBckJELE9BQUFBLFFBREZBLEVBRU9ILFVBQUFJLE9BQUEsWUFFTkQsRUFBQUgsVUFBQUssSUFBQSxjQU1EQyxJQU1FQyxFQUFlQyxJQUFBQSxzQkFNYkMsU0FBUUMsR0FDVEMsRUFBTUMsUUFBQUgsSUFDTCxJQUFBQSxFQUFRQyxtQkFDUkQsRUFBUUMsT0FBT0csTUFBTUMsUUFBckIsRUFDREwsRUFBQUMsT0FBQUcsTUFBQUMsVUFBQSxhQUVKTCxFQUFBQyxPQUFBRyxNQUFBRSxRQUFBLEVBSEtOLEVBQVFDLE9BQU9HLE1BQU1DLFVBQVksaUJBZnpCLENBRmRFLFdBQUEsTUFJQVYsVUFBSVcsQ0FBQUEsRUFBWSxHQUFHLE1BQ2ZDLEVBQXFCVixNQUFNVyxLQUsvQnZCLFNBQVN3QixpQkFBaUIsaUJBRXRCYixFQUFZYyxNQUFBQSxLQUFBQSxTQUFaQyxpQkFBcUMsa0JBb0J2QyxTQUFPQyxFQUFLQyxFQUFXQyxHQUdmLGFBRlZELEdBQVdFLE1BR1hGLEVBQUFFLGNBRUVGLEVBQUFBLGNBTUZBLEVBQVNHLFNBQWEsR0FBQWQsTUFBQWUsWUFDcEJKLEVBQVlLLGFBRVpDLEVBQU9KLFlBQVBGLEVBQUFPLFNBQUFDLFFBQ0FGLEtBeEJGdkIsRUFBYUssUUFBUXFCLElBQ25CaEIsRUFBYWlCLFFBQVFELEtBR3ZCMUIsRUFBQUssUUFBQXFCLElBSEVoQixFQUFhaUIsUUFBUUQsS0EwQmxCLFdBTkgsTUFBTUgsRUFBU2xDLFNBQVNFLGNBQWMsV0FFdENnQyxFQUFPSixZQUFjLEVBTW5CSSxFQUFLakMsaUJBQWlCLFFBQVFzQyxJQUM1QnBDLElBQUVXLEVBQUFBLE9BQU9nQixVQUFUVSxTQUErQkwsVUFDL0JSLE9BRUQsTUFBQVksRUFBQXBDLEVBQUFXLE9BQUEyQix3QkFKRCxHQUFJdEMsRUFBRXVDLFFBQVVILEVBQU9JLEtBQU9KLEVBQU9LLE1BQVEsRUFPL0NDLE9BRkVsQixFQUFBQSxPQUFRYixhQUFSb0IsRUFBQUMsU0FBQUMsWUFWRlQsRUFBQXhCLEVBQUFXLE9BQUEsV0FVRWEsRUFBTXhCLEVBQUVXLFVBMUVkK0IsWUFBQSxJQUFBbEIsRUFBQU8sR0FBQSxLQW9GRUgsTUFNQWUsT0FBQTlDLFVBQUErQyxPQUFBLFdBQ0EsTUFBQUMsRUFBQUYsT0FBQSxjQVVFQSxHQWpCc0JFLEVBQVVDLFNBaUJqQkMsT0FBQUEsZ0JBQ2ZKLEVBQU9LLE1BQUEsS0FSVCxVQUFBQyxFQUFBQyxLQUFBLGlCQVdBRCxFQUFNRSxLQUFhLGlCQUFVLEdBRTNCRixFQUFBQyxLQUFBLGlCQUFBLEdBSUFQLE9BQUEsUUFBQUksWUFBQSxZQUNBSixPQUFJQSxZQUFlRixZQUFVLGNBR1hFLE9BQUEsa0JBQ2pCQSxPQUVEeEMsUUFBQWlELE9BQUEsS0FNSVQsT0FBQXhDLFFBQU5zQyxRQUFzQixNQUNwQkUsT0FBSUEsUUFBTVUsWUFBTixZQUNGUixPQUFBQSxZQUFVUSxZQUFZLFlBRHhCSixFQUVPQyxLQUFBLGlCQUFBLE1BSFRQLE9BQU94QyxRQUFRbUQsUUFBTyxXQUNlLElBQS9CWCxPQUFPeEMsUUFBUW9ELFlBQ2pCVixFQUFVUSxZQUFZLFlBRXRCUixFQUFVVyxTQUFTIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10b2dnbGVcIik7XG4gIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcGVuXCIpO1xuICB9KTtcblxuICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaXRlLWhlYWRlclwiKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPT09IDApIHtcbiAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxlZFwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEZhZGUgSW4gb24gU2Nyb2xsXG4gIGxldCBvcHRpb25zID0ge1xuICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgdGhyZXNob2xkOiBbMCwgMC40LCAwLjVdLFxuICB9O1xuICBsZXQgaG9tZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZhZGVJbiwgb3B0aW9ucyk7XG4gIGxldCB0ZWFjaGluZ3NGYWRlSXRlbXMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3BmYy1zZXJtb25cIilcbiAgKTtcbiAgbGV0IGFwcEZhZGVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taW51dGUtYXVkaW9cIikpO1xuXG4gIGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50cykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmludGVyc2VjdGlvblJhdGlvICE9PSAwKSB7XG4gICAgICAgIGVsZW1lbnQudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBlbGVtZW50LnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgZWxlbWVudC50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSguOClcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB0ZWFjaGluZ3NGYWRlSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGhvbWVPYnNlcnZlci5vYnNlcnZlKGl0ZW0pO1xuICB9KTtcbiAgYXBwRmFkZUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBob21lT2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcbiAgfSk7XG5cbiAgLyogSG9tZXBhZ2UgaGVybyBzbGlkZXIgKi9cbiAgZnVuY3Rpb24gc2xpZGUoc2xpZGVyRWxlbSwgZGlyZWN0aW9uKSB7XG5cdGNvbnN0IGRpciA9IGRpcmVjdGlvbiB8fCBudWxsO1xuXG4gICAgaWYgKGRpciA9PT0gXCJyZXZlcnNlXCIpIHtcblx0XHRzbGlkZXJFbGVtLnNsaWRlckluZGV4LS07XG4gICAgfSBlbHNlIHtcblx0XHRzbGlkZXJFbGVtLnNsaWRlckluZGV4Kys7XG5cdH1cblxuICAgIHNsaWRlckVsZW0uY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luTGVmdCA9XG4gICAgICAtc2xpZGVyRWxlbS5jbGllbnRXaWR0aCAqXG4gICAgICAgIChzbGlkZXJFbGVtLnNsaWRlckluZGV4ICUgc2xpZGVyRWxlbS5jaGlsZHJlbi5sZW5ndGgpICtcbiAgICAgIFwicHhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XG5cbiAgICBzbGlkZXIuc2xpZGVySW5kZXggPSAwO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xpZGVyXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJvdW5kcyA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgaWYgKGUuY2xpZW50WCAtIGJvdW5kcy5sZWZ0IDwgYm91bmRzLndpZHRoIC8gMikge1xuICAgICAgICBlLnRhcmdldC5zbGlkZXJJbmRleCArPSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBzbGlkZShlLnRhcmdldCwgXCJyZXZlcnNlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzbGlkZShlLnRhcmdldCk7XG4gICAgfSk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2xpZGUoc2xpZGVyKSwgNzAwMCk7XG4gIH1cblxuICBpbml0U2xpZGVyKCk7XG59KTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgdG9wQmFubmVyID0galF1ZXJ5KFwiI3RvcEJhbm5lclwiKTtcbiAgY29uc3QgdG9wQmFubmVySGVpZ2h0ID0gdG9wQmFubmVyLmhlaWdodCgpO1xuXG4gIC8vIGpRdWVyeSgnYm9keScpLmNzcygncGFkZGluZy10b3AnLCB0b3BCYW5uZXJIZWlnaHQgKyAncHgnKTtcblxuICAvLyBjb25zdCB2aWV3cG9ydEhlaWdodCA9IChqUXVlcnkod2luZG93KS5oZWlnaHQoKSAtIHRvcEJhbm5lckhlaWdodCkgKiAuMDE7XG4gIC8vIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpIDw9IDc2OCkge1xuICAvLyAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZpZXdwb3J0SGVpZ2h0fXB4YCk7XG4gIC8vIH1cblxuICBjb25zdCBuYXZUb2dnbGVyID0galF1ZXJ5KFwiI25hdlRvZ2dsZXJcIik7XG4gIG5hdlRvZ2dsZXIuY2xpY2soKCkgPT4ge1xuICAgIGlmIChuYXZUb2dnbGVyLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIpID09PSBcImZhbHNlXCIpIHtcbiAgICAgIG5hdlRvZ2dsZXIuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdlRvZ2dsZXIuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgIH1cblxuICAgIGpRdWVyeShcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJuYXYtb3BlblwiKTtcbiAgICBqUXVlcnkoXCIubmF2LWJhclwiKS50b2dnbGVDbGFzcyhcIm5hdi1vcGVuXCIpO1xuICB9KTtcblxuICBjb25zdCBtYWluTmF2RHJhd2VyID0galF1ZXJ5KFwiI21haW5OYXZEcmF3ZXJcIik7XG4gIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgLy8gY29uc3QgdG9wQmFubmVySGVpZ2h0UmVzaXplZCA9IHRvcEJhbm5lci5oZWlnaHQoKTtcbiAgICAvLyBtYWluTmF2RHJhd2VyLmNzcygndG9wJywgdG9wQmFubmVySGVpZ2h0UmVzaXplZCArICdweCcpO1xuICAgIC8vIGpRdWVyeSgnYm9keScpLmNzcygncGFkZGluZy10b3AnLCB0b3BCYW5uZXJIZWlnaHRSZXNpemVkICsgJ3B4Jyk7XG5cbiAgICAvLyBSZXNldCBuYXYgc3RhdGUgaWYgd2luZG93IGdldHMgdG9vIGxhcmdlXG4gICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgIGpRdWVyeShcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJuYXYtb3BlblwiKTtcbiAgICAgIGpRdWVyeShcIi5uYXYtYmFyXCIpLnJlbW92ZUNsYXNzKFwibmF2LW9wZW5cIik7XG4gICAgICBuYXZUb2dnbGVyLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCB3aW5kb3dIZWlnaHQgPSAoalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSB0b3BCYW5uZXJIZWlnaHRSZXNpemVkKSAqIC4wMTtcbiAgICAvLyBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA8PSA3NjgpIHtcbiAgICAvLyAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3dpbmRvd0hlaWdodH1weGApO1xuICAgIC8vIH1cbiAgfSk7XG5cbiAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKSA9PT0gMCkge1xuICAgICAgdG9wQmFubmVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcEJhbm5lci5hZGRDbGFzcyhcInNjcm9sbGVkXCIpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdfQ==
