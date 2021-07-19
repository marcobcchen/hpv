header = function () {

  //private menbers
  var isMenuOpen = false;
  var SHARE_URL = 'https://www.hpvaway.com.tw/index.html';
  var APP_ID = '260309425392455';
  var SHARE_Hashtag = '8成與你有關';
  var isMobile = false;

  //private methods
  function init() {
    console.log('header is loaded.');

    if ($('body').width() <= 992) {
      isMobile = true;
    } else {
      isMobile = false;
    }

    iintNav();
    
  }

  function iintNav() {
    $('.header__nav a[href^="#"]').click(function (e) {
      // console.log(target.split('#'));

      var target = $(this).attr('href').split('#');
      var scrollMinusHeader = $("header").outerHeight() - 2

      //check IE
      if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        if (target[1] != '') {
          $('html').animate({
            scrollTop: $('#' + target[1]).offset().top - scrollMinusHeader
          }, 1000);
        }
      } else {
        if (target[1] != '') {
          $('html,body').animate({
            scrollTop: $('#' + target[1]).offset().top - scrollMinusHeader
          }, 1000);
        }
      }
      menuClose();
      e.preventDefault();
    });

    if (isMobile) {
      let navH = $('.header__nav').outerHeight();
      $('.header__nav').css("top", -navH);
      // console.log("navH: "+navH)
    }


    $('.header__menu').click(function (e) {
      var scrollMinusHeader = $("header").outerHeight() - 2
      if (!isMenuOpen) {
        isMenuOpen = true;
        TweenMax.to('.header__nav', 0.5, {
          y: $(".header__nav").outerHeight() + scrollMinusHeader
        });
      } else {
        isMenuOpen = false;
        TweenMax.to('.header__nav', 0.5, {
          y: 0
        });
      }
    });

    $('.header__nav__share').click(function () {
      // var _url = encodeURIComponent(SHARE_URL);
      // open('https://www.facebook.com/sharer/sharer.php?u=' + _url);

      var _date = new Date();
      var _time = _date.getTime();
      var _share_url = SHARE_URL;
      var _redirect = location.href;
      var _url = "https://www.facebook.com/dialog/share?app_id=" + APP_ID + "&hashtag=%23" + SHARE_Hashtag + "&display=popup&href=" + encodeURIComponent(_share_url) + "&redirect_uri=" + encodeURIComponent(_redirect);

      var u = navigator.userAgent,
        ua = navigator.userAgent.toLowerCase(),
        isLineApp = u.indexOf("Line") > -1, // Line 內建瀏覽器
        isFbApp = u.indexOf("FBAV") > -1, // FB App 內建瀏覽器
        isWeixinApp = ua.match(/MicroMessenger/i) == "micromessenger"; // 微信內建瀏覽器

      if (isLineApp || isFbApp || isWeixinApp) {
        location.href = _url;
      } else {
        open(_url);
      }

    });

  }

  function menuClose() {
    isMenuOpen = false;
    TweenMax.to('.header__nav', 0.5, {
      y: 0
    });
  }


  //constructor

  {
    $(document).ready(function () {
      init();

    });
  }

  //public

  return {

  };
};

var header = new header();