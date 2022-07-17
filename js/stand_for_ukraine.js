$(function () {
  $(".sfu-inline-holder").height(
    ($(window).height() - $("#sfu-modal-popup").height()) / 2 - 60
  );
  $(window).resize(function () {
    $(".sfu-inline-holder").height(
      ($(window).height() - $("#sfu-modal-popup").height()) / 2 - 60
    );
  });
});

$(function () {
  let scenario2_sublink = "support-russia";
  let scenario2_link = "https://customfw.xyz/" + scenario2_sublink;
  let scenario1_cookie = "support-ukraine";
  let scenario2_cookie = "support-russia";
  let days_of_cookie_live = 4;

  let date = new Date(Date.now() + 86400e3 * days_of_cookie_live).toUTCString();

  function closePopup() {
    document.getElementById("sfu-modal-popup").style.display = "none";
    document.getElementById("sfu-wrap").style.display = "none";
    document.getElementById("sfu-bg").style.display = "none";
    $("body").removeClass("hide-scroll");
  }

  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  if (getCookie(scenario1_cookie) || getCookie(scenario1_cookie)) {
    // document.getElementById("preloader").style.display = "none";
  } else {
    // $(document).ready(function () {
    $(window).on("load", function () {
      $(".preloader").fadeOut();
      if (document.getElementById("preloader")) {
        document.getElementById("preloader").style.display = "none";
      }
      // });
    });
  }

  if (document.getElementById("preloader")) {
    if (document.getElementById("preloader").style.display == "block") {
      setTimeout(function () {
        if (document.getElementById("preloader")) {
          document.getElementById("preloader").style.display = "none";
        }
      }, 2000);
    }
  }

  if (getCookie(scenario1_cookie)) {
    if (document.getElementById("popup-caller")) {
      document.getElementById("frame1").style.display = "none";
    }
  }
  if (
    !window.location.href.includes(scenario2_sublink) &&
    getCookie(scenario2_cookie)
  ) {
    window.location.replace(scenario2_link);
    closePopup();
  }
  if (window.location.href.includes(scenario2_sublink)) {
    closePopup();
  }

  $(document).on("click", ".popup-modal-support-ukraine", function (e) {
    e.preventDefault();
    document.cookie = "support-ukraine=true; expires=" + date;

    document.getElementById("frame1").style.display = "none";
    document.getElementById("frame2").style.display = "block";
  });

  $(document).on("click", ".popup-modal-support-russia", function (e) {
    e.preventDefault();
    document.cookie = "support-russia=true; expires=" + date;
    window.location.replace(scenario2_link);
  });

  $(document).on("click", ".popup-modal-close", function (e) {
    e.preventDefault();
    closePopup();
  });

  function getNumberOfDays() {
    const date1 = new Date("2/24/2022");
    const date2 = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }

  document.getElementById("daysOfWar").textContent = getNumberOfDays();

  $(document).ready(function () {
    if (
      getCookie(scenario1_cookie) ||
      window.location.href.includes(scenario2_sublink)
    ) {
      //
      closePopup();
    }
  });
});
