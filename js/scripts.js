document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".menu-toggle").addEventListener("click",e=>{document.body.classList.toggle("nav-open")});const e=document.querySelector(".site-header");window.addEventListener("scroll",a=>{0===window.scrollY?e.classList.remove("scrolled"):e.classList.add("scrolled")})})),jQuery(document).ready((function(){const e=jQuery("#topBanner"),a=(e.height(),jQuery("#navToggler"));a.click(()=>{"false"===a.attr("aria-expanded")?a.attr("aria-expanded",!0):a.attr("aria-expanded",!1),jQuery("body").toggleClass("nav-open"),jQuery(".nav-bar").toggleClass("nav-open")});jQuery("#mainNavDrawer");jQuery(window).resize(()=>{jQuery(window).width()>768&&(jQuery("body").removeClass("nav-open"),jQuery(".nav-bar").removeClass("nav-open"),a.attr("aria-expanded",!1))}),jQuery(window).scroll((function(){0===jQuery(window).scrollTop()?e.removeClass("scrolled"):e.addClass("scrolled")}))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsImUiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwid2luZG93Iiwic2l0ZUhlYWRlciIsInJlbW92ZSIsImFkZCIsImpRdWVyeSIsInJlYWR5IiwidG9wQmFubmVyIiwibmF2VG9nZ2xlciIsImhlaWdodCIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJhdHRyIiwicmVzaXplIiwicmVtb3ZlQ2xhc3MiLCJ3aWR0aCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsU0FBU0MsaUJBQWlCLG9CQUFvQixXQUN6QkQsU0FBU0UsY0FBYyxnQkFDL0JELGlCQUFpQixRQUFTRSxJQUNqQ0gsU0FBU0ksS0FBS0MsVUFBVUMsT0FBTyxjQUluQ0MsTUFBTUMsRUFBQ1AsU0FBaUJDLGNBQWUsZ0JBQ3JDSyxPQUFJQSxpQkFBQSxTQUFzQkosSUFDSE0sSUFBckJELE9BQUFBLFFBREZBLEVBRU9ILFVBQUFJLE9BQUEsWUFFTkQsRUFBQUgsVUFBQUssSUFBQSxpQkFpQkhDLE9BQUFYLFVBQUFZLE9BQUEsV0FDQSxNQUFBQyxFQUFBRixPQUFBLGNBR01HLEdBRk5ELEVBQUFFLFNBRW1CSixPQUFPLGdCQVF4QkEsRUFBT0ssTUFBUUMsS0FDZixVQUFBTixFQUFPTyxLQUFZRCxpQkFSckJILEVBQUFJLEtBQUEsaUJBQUEsR0FZQVAsRUFBZVEsS0FBQUEsaUJBQWEsR0FHMUJSLE9BQUEsUUFBQU0sWUFBQSxZQUVBTixPQUFBLFlBQUFNLFlBQUEsY0FHRU4sT0FBbUJTLGtCQUNuQk4sT0FBQUEsUUFBV0ksT0FBSyxLQVRwQlAsT0FBQUosUUFBQWMsUUFBQSxNQWtCQVYsT0FBT0osUUFBUWUsWUFBTyxZQUNwQlgsT0FBSUEsWUFBZVksWUFBZixZQUNGVixFQUFVTyxLQUFBQSxpQkFBVixNQUZKVCxPQUFPSixRQUFRZSxRQUFPLFdBQ2UsSUFBL0JYLE9BQU9KLFFBQVFnQixZQUNqQlYsRUFBVU8sWUFBWSxZQUV0QlAsRUFBVVcsU0FBUyIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKTtcbiAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtb3BlbicpO1xuICB9KTtcblxuICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPT09IDApIHtcbiAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gY29uc3Qgc2l0ZUhlYWRlckhlaWdodCA9IHNpdGVIZWFkZXIuc2Nyb2xsSGVpZ2h0IC0gMTtcbiAgLy8gY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250ZW50Jyk7XG4gIC8vIGlmKHdpbmRvdy5pbm5lckhlaWdodCA+PSA3NjgpIHtcbiAgLy8gICBwYWdlQ29udGVudC5zdHlsZSA9IGBwYWRkaW5nLXRvcDogJHtzaXRlSGVhZGVySGVpZ2h0fXB4O2A7XG4gIC8vIH1cbn0pO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdG9wQmFubmVyID0galF1ZXJ5KCcjdG9wQmFubmVyJyk7XG4gIGNvbnN0IHRvcEJhbm5lckhlaWdodCA9IHRvcEJhbm5lci5oZWlnaHQoKTtcblxuICAvLyBqUXVlcnkoJ2JvZHknKS5jc3MoJ3BhZGRpbmctdG9wJywgdG9wQmFubmVySGVpZ2h0ICsgJ3B4Jyk7XG5cbiAgLy8gY29uc3Qgdmlld3BvcnRIZWlnaHQgPSAoalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSB0b3BCYW5uZXJIZWlnaHQpICogLjAxO1xuICAvLyBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA8PSA3NjgpIHtcbiAgLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aWV3cG9ydEhlaWdodH1weGApO1xuICAvLyB9XG5cbiAgY29uc3QgbmF2VG9nZ2xlciA9IGpRdWVyeSgnI25hdlRvZ2dsZXInKTtcbiAgbmF2VG9nZ2xlci5jbGljaygoKSA9PiB7XG4gICAgaWYgKG5hdlRvZ2dsZXIuYXR0cignYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICBuYXZUb2dnbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2VG9nZ2xlci5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgIH1cblxuICAgIGpRdWVyeSgnYm9keScpLnRvZ2dsZUNsYXNzKCduYXYtb3BlbicpO1xuICAgIGpRdWVyeSgnLm5hdi1iYXInKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcbiAgfSk7XG5cbiAgY29uc3QgbWFpbk5hdkRyYXdlciA9IGpRdWVyeSgnI21haW5OYXZEcmF3ZXInKTtcbiAgalF1ZXJ5KHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAvLyBjb25zdCB0b3BCYW5uZXJIZWlnaHRSZXNpemVkID0gdG9wQmFubmVyLmhlaWdodCgpO1xuICAgIC8vIG1haW5OYXZEcmF3ZXIuY3NzKCd0b3AnLCB0b3BCYW5uZXJIZWlnaHRSZXNpemVkICsgJ3B4Jyk7XG4gICAgLy8galF1ZXJ5KCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsIHRvcEJhbm5lckhlaWdodFJlc2l6ZWQgKyAncHgnKTtcblxuICAgIC8vIFJlc2V0IG5hdiBzdGF0ZSBpZiB3aW5kb3cgZ2V0cyB0b28gbGFyZ2VcbiAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ25hdi1vcGVuJyk7XG4gICAgICBqUXVlcnkoJy5uYXYtYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1vcGVuJyk7XG4gICAgICBuYXZUb2dnbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gY29uc3Qgd2luZG93SGVpZ2h0ID0gKGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpIC0gdG9wQmFubmVySGVpZ2h0UmVzaXplZCkgKiAuMDE7XG4gICAgLy8gaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KSB7XG4gICAgLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt3aW5kb3dIZWlnaHR9cHhgKTtcbiAgICAvLyB9XG4gIH0pO1xuXG4gIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpID09PSAwKSB7XG4gICAgICB0b3BCYW5uZXIucmVtb3ZlQ2xhc3MoJ3Njcm9sbGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcEJhbm5lci5hZGRDbGFzcygnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXX0=
