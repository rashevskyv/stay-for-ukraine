$(function () {
  let scenario2_sublink = "support-russia";
  let scenario2_link = "https://customfw.xyz/" + scenario2_sublink;
  let scenario1_cookie = "support-ukraine";
  let scenario2_cookie = "support-russia";

  if (getCookie(scenario1_cookie) || getCookie(scenario1_cookie)) {
    document.getElementById("preloader").style.display = "none";
  } else {
    // $(document).ready(function () {
      $(window).on("load", function () {
        $(".preloader").fadeOut();
        document.getElementById("preloader").style.display = "none";
      // });
    });
  }

  if (document.getElementById("preloader").style.display == 'block') {
    setTimeout(function(){
      document.getElementById("preloader").style.display = "none";
  }, 2000);
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
    $.magnificPopup.close();
  }
  if (window.location.href.includes(scenario2_sublink)) {
    $.magnificPopup.close();
  }

  $(".popup-modal").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#username",
    modal: true,
  });

  $(document).on("click", ".popup-modal-support-ukraine", function (e) {
    e.preventDefault();
    let date = new Date(Date.now() + 86400e3 * 7);
    date = date.toUTCString();
    document.cookie = "support-ukraine=true; expires=" + date;

    document.getElementById("frame1").style.display = "none";
    document.getElementById("frame2").style.display = "block";
  });

  $(document).on("click", ".popup-modal-support-russia", function (e) {
    e.preventDefault();
    let date = new Date(Date.now() + 86400e3 * 7);
    date = date.toUTCString();
    document.cookie = "support-russia=true; expires=" + date;
    window.location.replace(scenario2_link);
    document.getElementById("mfp-modal-popup").style.display = "none";
  });

  $(document).on("click", ".popup-modal-close", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
    document.getElementById("mfp-modal-popup").style.display = "none";
  });

  function getNumberOfDays() {
    const date1 = new Date("2/24/2022");
    const date2 = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  document.getElementById("daysOfWar").textContent = getNumberOfDays();

  $(document).ready(function () {
    if (
      !getCookie(scenario1_cookie) &&
      !window.location.href.includes(scenario2_sublink)
    ) {
      document.getElementById("mfp-modal-popup").style.display = "none";
      $(".popup-modal").click();
    }
  });
});
