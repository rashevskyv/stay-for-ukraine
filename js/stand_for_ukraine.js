function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

ready(() => {
  let scenario2_sublink = "support-russia";
  let scenario2_link = "https://customfw.xyz/" + scenario2_sublink;
  let scenario1_cookie = "support-ukraine";
  let scenario2_cookie = "support-russia";
  let days_of_cookie_live_1st_scenario = 7;
  let days_of_cookie_live_2nd_scenario = 3;
  let locationCameFrom = window.location;
  let domain = "domain=customfw.xyz; path=/; samesite";

  let openSiteOnFlagClick = "https://customfw.xyz/support-ukraine";

  const day_war_began = new Date("2/24/2022");
  const current_date = new Date();
  let date_1st_scenario = new Date(
    Date.now() + 86400e3 * days_of_cookie_live_1st_scenario
  ).toUTCString();
  let date_2nd_scenario = new Date(
    Date.now() + 86400e3 * days_of_cookie_live_2nd_scenario
  ).toUTCString();

  function moveToPage(location) {
    window.location.replace(location);
  }

  function closePopup() {
    document.querySelector("#sfu-modal-popup").style.display = "none";
    document.querySelector("#sfu-wrap").style.display = "none";
    document.querySelector("#sfu-bg").style.display = "none";

    document.querySelector("html").classList.remove("hide-scroll");
  }

  document.querySelector("html").classList.add("hide-scroll");

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

  function fadeOutEffect(target) {
    var fadeTarget = target;
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.05;
      } else {
        clearInterval(fadeEffect);
        document.querySelector("#preloader").style.display = "none";
      }
    }, 5);
  }

  //preloader stuff
  ready(() => {
    if (getCookie(scenario1_cookie) || getCookie(scenario1_cookie)) {
      document.querySelector("#preloader").style.display = "none";
    } else {
      fadeOutEffect(document.querySelector("#preloader"));
    }
  });

  addPopup();

  // render flag
  let flag =
    "<div class='ukrane-flag_container'><a class='ukrane-flag-ribbon' href='" +
    openSiteOnFlagClick +
    "' target='_blank' rel='noopener noreferrer'></a></div>";
  document.querySelector("#ukranian-flag").innerHTML = flag;

  // proper align popup on vertical
  let calculatePaddingHeight =
    (window.innerHeight -
      document.querySelector("#sfu-modal-popup").offsetHeight) /
      2 -
    60;
  let paddingHeight = "height: " + calculatePaddingHeight + "px";
  document
    .querySelector(".sfu-inline-holder")
    .setAttribute("style", paddingHeight);

  // proper align popup on vertical if page resized
  window.addEventListener(
    "resize",
    function () {
      let calculatePaddingHeight =
        (window.innerHeight -
          document.querySelector("#sfu-modal-popup").offsetHeight) /
          2 -
        60;
      let paddingHeight = "height: " + calculatePaddingHeight + "px";
      document
        .querySelector(".sfu-inline-holder")
        .setAttribute("style", paddingHeight);
    },
    true
  );

  // if cookie for scenario2 exist and you are not on the scenario2_sublink page, close popup
  if (
    !window.location.href.includes(scenario2_sublink) &&
    getCookie(scenario2_cookie)
  ) {
    moveToPage(scenario2_link);
    closePopup();
  }
  // close popup on scenario2_sublink page
  if (window.location.href.includes(scenario2_sublink)) {
    closePopup();
  }

  // cookie stuff. Put cookie according to choosed scenario
  // add cookie scenario1_cookie if pressed 2nd link on 1st frame
  document
    .querySelector(".popup-modal-support-ukraine")
    .addEventListener("click", (e) => {
      e.preventDefault();
      document.cookie =
        scenario1_cookie + "=true; expires=" + date_1st_scenario + ";" + domain;
      // change frame 1 to frame 2 after link 2 on 1st frame was pressed
      document.getElementById("frame1").style.display = "none";
      document.getElementById("frame2").style.display = "block";
    });
  // add cookie scenario2_cookie if pressed 1st link on 1st frame
  document
    .querySelector(".popup-modal-support-russia")
    .addEventListener("click", (e) => {
      e.preventDefault();
      document.cookie =
        scenario2_cookie + "=true; expires=" + date_2nd_scenario + ";" + domain;
      moveToPage(scenario2_link);
    });
  // close popup
  document
    .querySelector(".popup-modal-close")
    .addEventListener("click", (e) => {
      e.preventDefault();
      closePopup();
    });

  // how much days were left after war start (2/24/2022)
  function getNumberOfDays() {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = current_date.getTime() - day_war_began.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }

  // add how much days were left from war was start to span with id #daysOfWar
  document.querySelector("#daysOfWar").textContent = getNumberOfDays();

  // check if you had scenario1_cookie OR you on the scenario2_sublink page, close popup
  ready(() => {
    if (
      getCookie(scenario1_cookie) ||
      window.location.href.includes(scenario2_sublink)
    ) {
      //
      closePopup();
    }
  });
});

if (document.querySelector("#i_regret")) {
  document
    .querySelector("#i_regret")
    .addEventListener("click", (e) => {
      e.preventDefault();
      if (getCookie(scenario1_cookie)){
        document.cookie = scenario1_cookie + "=none" + "; expires=" + date1
        moveToPage(getCookie(scenario1_cookie))
      }
      if (getCookie(scenario2_cookie)){
        document.cookie = scenario2_cookie + "=none" + "; expires=" + date1
        moveToPage(getCookie(scenario2_cookie));
      }
      // document.cookie =
      //   scenario1_cookie + "=; Max-Age=0; path=/; domain=" + location.hostname;
      // document.cookie =
      //   scenario2_cookie + "=; Max-Age=0; path=/; domain=" + location.hostname;
    });
}

// function iRegret() {
//   let regret_message = `
// <center><a id="i_regret">Я понял, что был не прав и больше не поддерживаю захватническую войну в соседнем государстве</a></center>
// {: .notice--success}
// `;
// document.querySelector("#iregreat").innerHTML = regret_message;
// }

function addPopup() {
  let popup_block = `
  
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
                <!-- //first link, set scenario1_cookie  -->

                <!-- second link, set scenario2_cookie  -->
                <p>
                  <strong>
                    <a class="popup-modal-support-ukraine" href="#"
                      >Я против войны в Украине!</a
                    ></strong
                  >
                </p>
                <!-- //first link, set scenario2_cookie  -->
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
    
    `;
  document.querySelector("#stay-for-ukraine-popup").innerHTML = popup_block;
}
