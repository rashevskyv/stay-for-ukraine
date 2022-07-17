# stay-for-ukraine

# 🇺🇦 UKRAINE NEEDS YOUR HELP NOW!
>
> I'm the creator of this project and I'm Ukrainian.
>
> **My country, Ukraine, [is being invaded by the Russian Federation, right now](https://www.bbc.com/news/world-europe-60504334)**. I've fled Ivano-Frankivs'k and now I'm safe with my family in the western part of Ukraine. At least for now.
> Russia is hitting target all over my country by ballistic missiles.
>
> **Please, save me and help to save my country!**
>
> Ukrainian National Bank opened [an account to Raise Funds for Ukraine’s Armed Forces](https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi):
>
> ```
> SWIFT Code NBU: NBUA UA UX
> JP MORGAN CHASE BANK, New York
> SWIFT Code: CHASUS33
> Account: 400807238
> 383 Madison Avenue, New York, NY 10179, USA
> IBAN: UA843000010000000047330992708
> ```
> 
> [Come Back and Alive found (savelife.in.ua)](https://savelife.in.ua/)
> 
> ```
> BITCOIN
> bc1qkd5az2ml7dk5j5h672yhxmhmxe9tuf97j39fm6
> 
> ETHEREUM (eth, usdt, usdc)
> 0xa1b1bbB8070Df2450810b8eB2425D543cfCeF79b
> 0x93Bda139023d582C19D70F55561f232D3CA6a54c
> 
> TRC20 (tether)
> TX9aNri16bSxVYi6oMnKDj5RMKAMBXWzon
> 
> Solana (sol)
> 8icxpGYCoR8SRKqLYsSarcAjBjBPuXAuHkeJjJx5ju7a
> ```
>
> You can also donate to [charity supporting Ukrainian army](https://savelife.in.ua/en/donate/).
>
> **THANK YOU!**

Это простой скрипт, позволяющий отобразить попап при заходе на вашу страницу с текстом в поддержку Украины 

Пример работы можно посмотреть на [http://customfw.xyz/stay-for-ukraine/](http://customfw.xyz/stay-for-ukraine/)

Готовый проект со встроенным скриптом можно посмотреть тут - [http://customfw.xyz](http://customfw.xyz)

## Логика работы

В данный момент логика такая - если пользователь поддерживает Украины, то ему будет показан второй фрейм, в котором предлагается несколько вариантов помощи Украине и её гражданам. При повтрной загрузке страницы попап не будет отображаться. Сколько времени не будет регулируется в самом скрипте. 

Если выбрана поддержка войны в Украине, то скрипт перенаправит на страницу, на которой перечислены преступления россии. Любые последующие попытки перейти на сайт, будут так же перенаправлять на эту страницу. 

## Фитчи

* **Прелоадер** перед полной загрузки страницы
* **Флаг** Украины в верхнем левом углу страницы
* **Куки** для того, чтобы запомнить выбор пользователя. Куки хранятся настраиваемое количество времени. Разное время для разных сценариев
* **Фреймы** позволяют дать чуточку больше информации в самом попапе, в зависимости от выбора пользователя

## Установка 

Для того, чтобы встроить этот скрипт на ваш сайт, поместите следующие блоки в тег `<head>`:

```html
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>

    <!-- stay for Ukraine css and js -->
    <script src="js/stand_for_ukraine.js"></script>
    <link rel="stylesheet" href="css/stay_for_ukraine.css" />
```

Это подключит скрипты и стили. Для того, чтобы всё заработало, вставьте блок 

```html
<div id="stay-for-ukraine-popup"></div>
```

где-нибудь внизу страницы, например в футере, или перед закрывающим тегом `<body>`

Прелоадер и флаг в углу опциональны. Включаются следующими блоками: 

```html
    <!-- preloader -->
    <div id="preloader" class="preloader"></div>
    <!-- // preloader -->

    <!-- flag on the left top corner -->
    <div id="ukranian-flag"></div>
    <!-- // flag on the left corner -->
```

Настройка внешнего вида осуществляется в файле `stay_for_ukraine.css`. Настройка логики работы, переменных, текста в самих фреймах, в файле `stand_for_ukraine.js`. 

Никаких зависимостей, кроме jQuery тут нет