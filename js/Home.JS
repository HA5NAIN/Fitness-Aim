jQuery(function ($) {
  $("#navmenu").css("maxHeight", "0px");
  $("#menuicon").on("click", function (e) {
    togglenavmenu();
  });

  swiper();
  owlcarousel();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#navmenu").fadeOut();
    } else {
      $("#navmenu").fadeIn();
    }
  });

  $("#divhome").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".carousel-section").offset().top,
      },
      "slow"
    );
  });

  $("#divservices").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".services-section").offset().top,
      },
      "slow"
    );
  });

  $("#divgallery").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".gallery-section").offset().top,
      },
      "slow"
    );
  });

  $("#divteam").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".team-section").offset().top,
      },
      "slow"
    );
  });

  $("#divcontact").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".contact-section").offset().top,
      },
      "slow"
    );
  });

  $("#divplan").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".plan-section").offset().top,
      },
      "slow"
    );
  });

  $("#btn-back-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#start").offset().top,
      },
      "slow"
    );
  });
});

function togglenavmenu() {
  if ($("#navmenu").css("maxHeight") == "0px") {
    $("#navmenu").css("maxHeight", "145px");
  } else {
    $("#navmenu").css("maxHeight", "0px");
  }
}

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
}

function owlcarousel() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
}
