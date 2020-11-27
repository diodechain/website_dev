/**
 *
 *  Main JavaScript
 *
 *  @package gleesik_scripts
 *
 **/

// IIFE - Immediately Invoked Function Expression
(function ($, window, document) {
  // The $ is now locally scoped

  // Listen for the jQuery ready event on the document
  $(function () {
    // The DOM is ready!

    // Global Variables
    var $window = $(window);

    /**
     *  Parallax with Scrollax.js - Initialization
     **/
    ("use strict");
    $.Scrollax();

    /**
     *  Main Menu Navigation
     **/
    var $body = $("body");
    var $nav_menu = $(".navigation-bar");
    var $nav_menu_link = $("#navMenu ul li a");
    var $nav_menu_link_subnav = $("#navMenu ul li.subnav .nav-link");

    var $toggle_menu_button = $(".navTrigger");
    var $toggle_submenu = $(".toggle-submenu");
    var $toggle_submenu_back = $(".toggle-submenu .button-back");
    var $toggle_submenu_close = $(".toggle-submenu .button-close");

    var $footer_scrollup_button = $("#scrollupButton");

    /**
     *  Mobile Menu Navigation
     **/
    $nav_menu_link_subnav.on("click", function () {
      var parentLink = this.dataset.href;
      console.log(parentLink);
      $toggle_submenu.each(function () {
        if (this.dataset.parent == parentLink) {
          $(this).addClass("show");
        } else {
          $(this).removeClass("show");
        }
      });
    });

    // Mobile Menu Back button
    $toggle_submenu_back.on("click", function () {
      $toggle_submenu.removeClass("show");
    });

    // Mobile Menu Close button
    $toggle_submenu_close.on("click", function () {
      $toggle_submenu.removeClass("show");
      $nav_menu.toggleClass("active");
      $body.toggleClass("no-scroll");
      $(this).toggleClass("active");
    });

    // Setting initial active menu
    var $current = null;
    $nav_menu_link.each(function () {
      let href = $(this).attr("href");
      let path = location.pathname.substr(1);
      if ((!$current && !path) || (href && path.includes(href))) {
        $current = $(this);
        if (!path) return;
        $(this).parent().addClass("current-menu-item");
        if ($(this).parent().prop("tagName") != "LI") {
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("current-menu-item");
        }
      }
    });

    // Navigation Menu Link
    $nav_menu_link.on("click", function () {
      // Select Current Navigation Item
      $nav_menu_link.parent().removeClass("current-menu-item");
      $(this).parent().addClass("current-menu-item");

      // Close Mobile Menu
      $nav_menu.removeClass("active");
      $toggle_menu_button.removeClass("active");
      $body.removeClass("no-scroll");
    });

    // Toggle Mobile Menu
    $toggle_menu_button.on("click", function () {
      $nav_menu.toggleClass("active");
      $body.toggleClass("no-scroll");
      $(this).toggleClass("active");
    });

    // Scroll Up Button and action
    $footer_scrollup_button.on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });

    // Remove all classes on window resize
    $window.on("resize", function () {
      $nav_menu.removeClass("active");
      $body.removeClass("no-scroll");
      $toggle_menu_button.removeClass("active");
      $toggle_submenu.removeClass("show");
    });

    /**
     * Updating Article Links to open in new tabs
     */
    $(".blog-single-page .article-content a").attr("target", "_blank");

    /**
     * About page animated text
     */
    var txt = "Web2 security is broken";
    var tagline = document.getElementById("tagline");
    if (tagline && tagline.innerHTML == txt) {
      let j = 0;
      let elements = ["security", "privacy", "participation", "monetization"];
      let frag = "";
      let speed = 70;
      let nextwordspeed = 5000;
      function typeWriter() {
        if (frag.length < elements[j].length) {
          frag += elements[j].charAt(frag.length);
          document.getElementById("tagline").innerHTML =
            'Web2 <span class="frag">' + frag + "</span> is broken";
          setTimeout(typeWriter, speed);
        } else {
          // document.getElementById("tagline").innerHTML += '<span class="frag">.</span>';
          frag = "";
          j = (j + 1) % elements.length;
          setTimeout(typeWriter, nextwordspeed);
        }
      }
      typeWriter();
    }

    /**
     *  Video
     */
    var $site_header = $(".site-header");
    var $video_overlay = $site_header.find("#video_overlay");
    var $video_button = $site_header.find("#video_btn");

    $video_button.on("click", function (e) {
      e.preventDefault();
      //var $src = $(this).attr("href");
      var $iframe =
        '<iframe src="https://player.vimeo.com/video/318384993?autoplay=1" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      $video_overlay.html($iframe).fadeIn(200);

      // Lock Body Scroll
      $body.addClass("no-scroll");
    });
    // Hide Overlay Lightbox
    $video_overlay.on("click", function () {
      // Hide Overlay Image
      $(this).fadeOut(200);

      // Remove Image from DOM
      $video_overlay.children("iframe").remove();

      // Unlock Body Scroll
      $body.removeClass("no-scroll");
    });

    /**
     *  Smooth Scrolling for Links
     **/
    $('a[href*="#"]:not([href="#"])').on("click", function () {
      console.log("slslslsl")
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });

    /**
     * Documentation navigation
     */
    let $heads = $(".toc-widget h3");
    $heads.click(function () {
      $(this).parent().toggleClass("folded");
    });

    /**
     * Documentation secondary navigation
     */
    let $shortcut = $(".nav-sidebar");
    $shortcut.click(function () {
      $(".col-sidebar").toggle();
      $shortcut.toggleClass("folded");
    });

    /**
     * Documentation search
     */
    let $items = $(".toc-widget li");
    let search = function () {
      let term = $(this).val().toLowerCase();
      if (term.length < 3) {
        $items.removeClass("matching-item");
        $items.removeClass("non-matching-item");
        $(this).removeClass();
        return;
      }
      let found = 0;
      $items.removeClass("matching-item");
      $items.addClass("non-matching-item");
      for (i in idx) {
        if (idx[i][1].includes(term)) {
          $(idx[i][0]).addClass("matching-item");
          $(idx[i][0]).removeClass("non-matching-item");
          found++;
        }
      }
      if (found > 0) {
        $(this).removeClass();
        $(this).addClass("active");
      } else {
        $(this).removeClass();
        $(this).addClass("notfound");
      }
    };
    $("#search").keyup(search);
    $("#search").change(search);

    /**
     * Downloads (dDrive and Diode CLI)
     */
    let OSName = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.userAgent.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.userAgent.indexOf("Linux") != -1) {
      if (navigator.userAgent.indexOf("armv") != -1) OSName = "Raspberry Pi";
      else OSName = "Linux";
    }
    let downloadLink = $(
      "." + OSName.toLowerCase().replace(/\s+/g, '-')
    );
    if (downloadLink.length > 0) {
      downloadLink.removeClass("hide");
      let file = downloadLink.attr("href");
      file = file.substring(file.lastIndexOf("/") + 1);
      $("#filename").text(file);
      $("#osname").text(OSName);
    }

    // Pricing page - plans (carousel)
    const planCarousel = $("#plans_xs");
    if (planCarousel) {
      planCarousel.owlCarousel({
        loop: true,
        dots: true,
        autoWidth: true,
        items: 3
      });
    }

    // FAQ TOC
    let toc = $("#auto-table-of-contents");
    if (toc) {
      toc.nextAll("h2").each((e, h2) => {
        let url = window.location.pathname + "#" + h2.id;
        toc.append("<li><a href='" + url + "'>" + $(h2).html() + "</a></li>");
        let ul = $("<ul></ul>");
        toc.append(ul);
        $(h2)
          .nextUntil("h2", "h3")
          .each((e, h3) => {
            let url = window.location.pathname + "#" + h3.id;
            ul.append(
              "<li><a href='" + url + "'>" + $(h3).html() + "</a></li>"
            );
          });
      });
    }
  });
})(window.jQuery, window, document);
// The global jQuery object is passed as a parameter
