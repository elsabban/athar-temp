/*
   Template Name: StudyLab - Kid & Online Education HTML Template
   Author: ThemeLeader
   Author URI: https://themeforest.net/user/themeleaderf
   Description: StudyLab - Kid & Online Education HTML Template
   Version: 1.0
*/
/* 
---> Table of content <---
1. Isotope
2. Main slider
3. Counter UP
4. Magnific Popup
5. Testimonial slider
6. Testimonial Classic Slider
7. Magnific Image Popup
8. Partner Slider
9. Service Slider
10. Team Slider
11. Contact form
12. Back to top
13. Sticky header
---><---
*/

jQuery(function ($) {
   "use strict";

 


   /* Document Ready Function */
   $(document).ready(function () {


      $('input').each(function (e) {
         $(this).attr('autocomplete', 'off');
         $(this).attr('autocorrect', 'off')
      });
      $(document).contextmenu(function () {
         return true;
      });

      /* Li Active Class */
      // Get current page URL
      var url = window.location.href;
      // remove # from URL
      url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
      // remove parameters from URL
      url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
      // select file name
      url = url.substr(url.lastIndexOf("/") + 1);
      // If file name not avilable
      if (url == '') {
         url = 'index.html';
      }
      // Loop all menu items
      $('.navbar-nav li').each(function () {
         // select href
         var href = $(this).find('a').attr('href');
         // Check filename
         if (url == href) {
            // Select parent class
            var parentClass = $(this).parent('ul').attr('class');
            if (parentClass == 'dropdown-menu') {
               // Add class
               $(this).addClass('active');
               $(this).parents('.navbar-nav li').addClass('active');
            } else {
               // Add class
               $(this).addClass('active');
            }
         }
      });

      /* Select 2 JS */
      if ($('.filter-group .form-group .form-control').length > 0) {
         $('.filter-group .form-group .form-control').select2();
      }
      if ($('#country').length > 0) {
         $('#country').select2();
      }


      /*-----------------------------------------
                     Menu Toggle
      -------------------------------------------*/

      if ($(window).width() < 991) {
         $(".navbar-nav li a").on("click", function () {
            $(this).parent("li").find(".dropdown-menu").slideToggle();
            $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
         });
      }

      /*-----------------------------------------
                     Main Slider
      -------------------------------------------*/
      if ($('.tl-slider-carousel').length > 0) {
         $('.tl-slider-carousel').owlCarousel({
            items: 1,
            smartSpeed:2000,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            mouseDrag: true,
            navText: ['<i class="icon icon-chevron-left"></i>', '<i class="icon icon-chevron-right"></i>'],
            responsive: {
               0: {
                  nav: false,
                  mouseDrag: false,
               },
               600: {
                  nav: false,
                  mouseDrag: false,
               },
               1000: {
                  nav: true,
                  mouseDrag: true,
               },
            }
         });
      } //Main Slider End


      /*-----------------------------------------
                  Counter up
  
      /*-----------------------------------------
                  Testimonial Slider
      -------------------------------------------*/

 

      /*-----------------------------------------
                  Testimonial Classic Slider
      -------------------------------------------*/

      if ($('.testimonial-classic-carousel').length > 0) {
         $('.testimonial-classic-carousel').owlCarousel({
            items: 2,
            loop: true,
            margin:10,
            smartSpeed: 900,
            nav: false,
            autoplay: true,
            dots: true,
            mouseDrag: true,
            responsive: {
               0: {
                  items: 1,
                  mouseDrag: false,
               },
               600: {
                  items: 2,
                  mouseDrag: false,
               },
               1000: {
                  items: 3,
                  mouseDrag: true,
                  dots: true,
               },
            }
         });
      }

      /*-----------------------------------------
                  Magnific Image Popup
      -------------------------------------------*/


      /*-----------------------------------------
                  Partner Slider
      -------------------------------------------*/

      /*-----------------------------------------
                  Service Slider
      -------------------------------------------*/

   

      /*-----------------------------------------
                  Team Slider
      -------------------------------------------*/


      /*-----------------------------------------
                  Contact Form
      -------------------------------------------*/

      $('#contact-form').submit(function () {

         var $form = $(this),
            $error = $form.find('.error-container'),
            action = $form.attr('action');

         $error.slideUp(750, function () {
            $error.hide();

            var $name = $form.find('.form-name'),
               $email = $form.find('.form-email'),
               $subject = $form.find('.form-subject'),
               $message = $form.find('.form-message');

            $.post(action, {
                  name: $name.val(),
                  email: $email.val(),
                  url: $subject.val(),
                  message: $message.val()
               },
               function (data) {
                  $error.html(data);
                  $error.slideDown('slow');

                  if (data.match('success') != null) {
                     $name.val('');
                     $email.val('');
                     $subject.val('');
                     $message.val('');
                  }
               }
            );

         });

         return false;

      });


      /*-----------------------------------------
                  Countdown Timer
      -------------------------------------------*/

      /*-----------------------------------------
                     Parallax JS
      -------------------------------------------*/

      if ($('#scene').length > 0) {
         var scene = $('#scene').get(0);
         var parallaxInstance = new Parallax(scene, {
            relativeInput: true,
         });
         parallaxInstance.friction(0.2, 0.2);;
      }

      /*-----------------------------------------
                  Back to top
      -------------------------------------------*/

      $(window).on('scroll', function () {
         if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
         } else {
            $('#back-to-top').fadeOut();
         }
      });

      // scroll body to 0px on click
      $('#back-to-top').on('click', function () {
         $('#back-to-top').tooltip('hide');
         $('body,html').animate({
            scrollTop: 0
         }, 800);
         return false;
      });

      $('#back-to-top').tooltip('hide');


      /* ---------------------------------------------
                     Sticky Header 
      ------------------------------------------------ */

      // var toggleAffix = function (affixElement, scrollElement, wrapper) {

      //    var height = affixElement.outerHeight(),
      //       top = wrapper.offset().top;

      //    if (scrollElement.scrollTop() >= top) {
      //       wrapper.height(height);
      //       affixElement.addClass("affix");
      //    } else {
      //       affixElement.removeClass("affix");
      //       wrapper.height('auto');
      //    }

      // };
      // $('[data-toggle="affix"]').each(function () {
      //    var ele = $(this),
      //       wrapper = $('<div></div>');

      //    ele.before(wrapper);
      //    $(window).on('scroll resize', function () {
      //       toggleAffix(ele, $(this), wrapper);
      //    });

      //    // init
      //    toggleAffix(ele, $(window), wrapper);
      // });

      $(function () {
         $(document).scroll(function () {
           var $nav = $("header");
           $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
         });
       });
    
       
       
      /* WoW Init */
      new WOW().init();

   }); //Document Ready Function End

});