$(function () {
  $("#stay-for-ukraine-popup").append(`
  
  <div id="sfu-bg" class="sfu-bg sfu-ready"></div>
    <div id="sfu-wrap" class="sfu-wrap sfu-auto-cursor sfu-ready">
      <div class="sfu-container sfu-inline-holder">
        <div class="sfu-content" id="sfu-modal-popup">
          <div id="test-modal" class="sfu-hide white-popup-block">
            <h1>
              <g-emoji
                class="g-emoji"
                alias="ukraine"
                fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1e6.png"
                >🇺🇦</g-emoji
              >
              УКРАИНА НУЖДАЕТСЯ В ВАШЕЙ ПОМОЩИ!
              <g-emoji
                class="g-emoji"
                alias="ukraine"
                fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1e6.png"
                >🇺🇦</g-emoji
              >
            </h1>

            <!-- //first frame of the popup -->
            <div id="frame1">
              <p>
                Сегодня <span id="daysOfWar"></span>-й день полномасштабного
                вторжения. Войны, которую начала россия против Украины.
                Подобно фашистам, в 4 утра, российская армия без формального
                объявления войны вторглась на территорию Украины.
              </p>
              <p>
                В то страшное утро я проснулся от взрывов. Российские ракеты
                ударили в аэродром, который находился в моем родном городе.
                Такие удары были по всей стране. Я до сих пор не могу поверить
                в то, что случилось. Российская агрессия уже второй раз
                заставляет меня и мою семью переезжать из Донбасса, бросать
                своё жилье, друзей, любимое дело. В 2014-м году я покинул
                Краматорск и уехал жить и работать в Кривой Рог. В 2022-м
                Кривой Рог уже не был безопасным местом для меня и моей семьи.
              </p>
              <p>
                Сейчас мы снова скитаемся. Я не знаю будет ли цел мой дом. Не
                знаю переживут ли войну мои друзья и родственники, которые
                остались в городе. И сейчас такая ситуация у каждого Украинца.
                Каждый день тревога, каждый день что-то ощутимо взрывается.
                Каждый день гибнут дети и взрослые. И всё это принесла нам
                россия. Так называемые "освободители".
              </p>
              <p>
                Огромное количество молодых ребят с обоих сторон гибнут сейчас
                на территории Украины. Но если каждому понятно за что гибнут
                украинцы, то понять за что гибнут росияне не может никто.
              </p>
              <p>
                "Если не знаешь как поступить - поступи правильно". И для
                каждого россиянина может быть только один правильный поступок
                - не идти воевать, не пускать на войну своих отцов, сыновей,
                братьев. Сохраните свои жизни и жизни наших Защитников.
                Помните о том, что выполнение преступного приказа так же
                является преступлением.
              </p>

              <!-- links, that set cookies -->
              <div>
                <!-- first link, set scenario1_cookie  -->
                <p>
                  <strong>
                    <a class="popup-modal-support-russia" href="#"
                      >Я поддерживаю военную агрессию России против
                      Украины!</a
                    ></strong
                  >
                </p>
                <!-- first link, set scenario1_cookie  -->
                <!-- first link, set scenario1_cookie  -->
                <p>
                  <strong>
                    <a class="popup-modal-support-ukraine" href="#"
                      >Я против войны в Украине!</a
                    ></strong
                  >
                </p>
                <!-- first link, set scenario1_cookie  -->
              </div>
            </div>

            <!-- //second frame of the popup -->
            <div id="frame2">
              <h2>Как помочь Украине?</h2>
              <ul>
                <li>
                  Помочь можно финансово с помощью банковского перевода, или
                  перевода на крипто-валютный кошелёк. Список реквизитов есть
                  на сайте
                  <a
                    href="https://war.ukraine.ua/ru/podderzhyte-ukraynu/"
                    target="_blank"
                    >war.ukraine.ua</a
                  >
                </li>
                <li>
                  Вы можете помочь в распространении правды о войне в Украине.
                  Ежечасно тысячи телеграмм-каналов и каналов в youtube
                  собирают информацию о военных преступлениях россии на
                  территории Украины. Найти список таких каналов можно на
                  сайте
                  <a href="https://manifest.in.ua/war/" target="_blank"
                    >manifest.in.ua</a
                  >. Не верьте на слово, зайдите в региональные
                  телеграм-каналы и прочитайте что пишут там люди.
                </li>
                <li>
                  Не доверяйте и не распространяйте информацию с пророссийских
                  youtube и telegram-каналов. Ничего, кроме лжи вы там не
                  услышите.
                </li>
                <li>
                  Прислушивайтесь к тому, что говорят независимые
                  расследовательные группы, например
                  <a href="https://www.bellingcat.com/" target="_blank"
                    >Bellingcat</a
                  >,
                  <a href="https://www.hrw.org/ru" target="_blank"
                    >Human Rights Watch</a
                  >
                  или
                  <a
                    href="https://www.youtube.com/c/MackNack/"
                    target="_blank"
                    >Conflict Intelligence Team</a
                  >. Проверяйте не является ли новость фейком, например через
                  канал
                  <a
                    href="https://www.youtube.com/c/FakeNewsTvrain"
                    target="_blank"
                    >Fake News</a
                  >. Помните, что украинцы защищают свои земли и своё право на
                  существование. Мы не убиваем своих людей ради красивой
                  картинки и поддержки запада. Российская армия не нуждается в
                  дополнительной дискредитации. Она и так прекрасно с ней
                  справляется.
                </li>
                <li>
                  Не доверяйте авторитетам. Лучше посмотрите на какую
                  информацию авторитет ссылается. Очень часто такая информация
                  говорит сама за себя.
                </li>
              </ul>

              <!-- links of the second frame -->
              <div>
                <!-- link that close popup -->
                <p>
                  <strong
                  ><a class="popup-modal-close" href="#"
                  >Перейти к гайду</a
                  ></strong
                  >
                </p>
                <!--// link that close popup -->

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    `)
});

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

  //preloader stuff 

  // if (getCookie(scenario1_cookie) || getCookie(scenario1_cookie)) {
  //   // document.getElementById("preloader").style.display = "none";
  // } else {
  //   $(window).on("load", function () {
  //     $(".preloader").fadeOut();
  //     if (document.getElementById("preloader")) {
  //       document.getElementById("preloader").style.display = "none";
  //     }
  //     // });
  //   });
  // }

  // if (document.getElementById("preloader")) {
  //   if (document.getElementById("preloader").style.display == "block") {
  //     setTimeout(function () {
  //       if (document.getElementById("preloader")) {
  //         document.getElementById("preloader").style.display = "none";
  //       }
  //     }, 2000);
  //   }
  // }

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
