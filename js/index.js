$(function(){
  let winW, winH, winCenterX, winCenterY;
  let marqueeTimer;
  let ratio1 = 1;
  let ratio2 = 1;
  let entranceStatus = '';
  let storyStatus = '';
  let typed;
  let typewirters = [];

  let w_bg = $('.intro-2 .w-bg');
  let title_1 = $('.intro-2 .title-1');
  let title_1_bg = $('.intro-2 .title-1-bg');
  let title_2 = $('.intro-2 .title-2');
  let title_3 = $('.intro-2 .title-3');
  let title_3_bg = $('.intro-2 .title-3-bg');
  let title_4 = $('.intro-2 .title-4');
  let title_4_bg = $('.intro-2 .title-4-bg');
  let title_5 = $('.intro-2 .title-5');
  let title_5_bg = $('.intro-2 .title-5-bg');
  let title_6 = $('.intro-2 .title-6');
  let title_6_bg = $('.intro-2 .title-6-bg');
  let title_7 = $('.intro-2 .title-7');
  let title_7_bg = $('.intro-2 .title-7-bg');
  let title_8 = $('.intro-2 .title-8');
  let title_8_bg = $('.intro-2 .title-8-bg');

  let arrowGroup = $('.entrance .arrow-group');
  let bg_1 = $('.entrance .bg-1');
  let bg_filter = $('.entrance .filter-1');
  let guy_1_1 = $('.entrance .guy-1-1');
  let guy_1_2 = $('.entrance .guy-1-2');
  let guy_1_3 = $('.entrance .guy-1-3');
  let guy_2_1 = $('.entrance .guy-2-1');
  let guy_2_2 = $('.entrance .guy-2-2');
  let guy_3_1 = $('.entrance .guy-3-1');
  let guy_3_2 = $('.entrance .guy-3-2');
  let guy_3_3 = $('.entrance .guy-3-3');

  let main_pattern = $('.entrance .main-pattern');
  let main_pattern_bg = $('.entrance .main-pattern-bg');
  let sub_pattern = $('.entrance .sub-pattern');
  let sub_pattern_line = $('.entrance .sub-pattern-line');

  // for xs
  let xs_RT = [
    {id: 1, ratio: 0.3, delay: 0.1},
    {id: 2, ratio: 0.8, delay: 0.1},
    {id: 5, ratio: 0.4, delay: 0.1},
    {id: 13, ratio: 0.2, delay: 0.2},
    {id: 14, ratio: 0.2, delay: 0.2},
    {id: 22, ratio: 0.2, delay: 0.2},
    {id: 28, ratio: 0.2, delay: 0.2},
    {id: 29, ratio: 0.2, delay: 0.2},
    {id: 30, ratio: 0.2, delay: 0.2},
  ];
  let xs_RB = [
    {id: 8, ratio: 0.5, delay: 0.1},
    {id: 9, ratio: 0.3, delay: 0.1},
    {id: 11, ratio: 0.2, delay: 0.1},
    {id: 10, ratio: 0.4, delay: 0.2},
    {id: 24, ratio: 0.4, delay: 0.2},
    {id: 26, ratio: 0.4, delay: 0.2},
  ];
  let xs_LT = [
    {id: 3, ratio: 0.6, delay: 0.1},
    {id: 6, ratio: 0.5, delay: 0.1},
    {id: 15, ratio: 0.3, delay: 0.1},
    {id: 16, ratio: 0.3, delay: 0.1},
    {id: 17, ratio: 0.4, delay: 0.2},
    {id: 18, ratio: 0.4, delay: 0.2},
    {id: 19, ratio: 0.4, delay: 0.2},
    {id: 20, ratio: 0.4, delay: 0.2},
    {id: 21, ratio: 0.4, delay: 0.2},
    {id: 27, ratio: 0.4, delay: 0.2},
  ];
  let xs_LB = [
    {id: 4, ratio: 0.5, delay: 0.1},
    {id: 7, ratio: 0.2, delay: 0.1},
    {id: 12, ratio: 0.3, delay: 0.2},
    {id: 23, ratio: 0.3, delay: 0.2},
    {id: 25, ratio: 0.3, delay: 0.2},
  ];
  // for lg
  let lg_RT = [
    {id: 3, ratio: 0.3, delay: 0.1},
    {id: 6, ratio: 0.3, delay: 0.1},
    {id: 13, ratio: 0.4, delay: 0.2},
    {id: 15, ratio: 0.4, delay: 0.2},
    {id: 16, ratio: 0.4, delay: 0.2},
    {id: 17, ratio: 0.4, delay: 0.2},
    {id: 18, ratio: 0.4, delay: 0.2},
    {id: 19, ratio: 0.4, delay: 0.2},
    {id: 20, ratio: 0.4, delay: 0.2},
    {id: 27, ratio: 0.4, delay: 0.2},
  ];
  let lg_RB = [
    {id: 1, ratio: 0.5, delay: 0.1},
    {id: 2, ratio: 0.3, delay: 0.1},
    {id: 5, ratio: 0.3, delay: 0.1},
    {id: 14, ratio: 0.4, delay: 0.2},
    {id: 21, ratio: 0.4, delay: 0.2},
    {id: 22, ratio: 0.4, delay: 0.2},
    {id: 28, ratio: 0.4, delay: 0.2},
    {id: 29, ratio: 0.4, delay: 0.2},
    {id: 30, ratio: 0.4, delay: 0.2},
  ];
  let lg_LT = [
    {id: 4, ratio: 0.3, delay: 0.1},
    {id: 7, ratio: 0.5, delay: 0.1},
    {id: 12, ratio: 0.4, delay: 0.2},
    {id: 23, ratio: 0.4, delay: 0.2},
    {id: 25, ratio: 0.4, delay: 0.2},
  ];
  let lg_LB = [
    {id: 8, ratio: 0.2, delay: 0.1},
    {id: 9, ratio: 0.2, delay: 0.1},
    {id: 10, ratio: 0.4, delay: 0.2},
    {id: 11, ratio: 0.4, delay: 0.2},
    {id: 24, ratio: 0.3, delay: 0.2},
    {id: 26, ratio: 0.3, delay: 0.2},
  ];

  let storyStrings = [
    {
      id: 1,
      xsString: '偵探你好，^100\n我現在完全失去了方向，^100\n希望你聽了我的故事後，^100\n可以幫幫我...',
      lgString: '偵探你好，我現在完全失去了方向，^100\n希望你聽了我的故事後，可以幫幫我...',
      endString: '行車紀錄器裡，^100\n傳來最熟悉的聲音，^100\n但內容卻讓她顫抖不已...',
    },
    {
      id: 2,
      xsString: '偵探你好，你有沒有什麼祕密，^100\n是瞞著最親密的愛人？^100\n無助..恐懼..^100\n困住我奔向幸福的重重枷鎖，^100\n你能幫我解開嗎？',
      lgString: '偵探你好，你有沒有什麼祕密，是瞞著最親密的愛人？^100\n無助..恐懼..困住我奔向幸福的重重枷鎖，你能幫我解開嗎？',
      endString: '電話那頭究竟傳來什麼消息？^100\n她震動的瞳孔，^100\n讓幸福的空氣裡凝結著一絲不安情緒',
    },
    {
      id: 3,
      xsString: '你就是偵探嗎？^100\n看起來跟我年紀差不多耶…^100\n真的能幫我解決問題嗎？^100\n算了不管了，事情是這樣的…',
      lgString: '你就是偵探嗎？看起來跟我年紀差不多耶…^100\n真的能幫我解決問題嗎？算了不管了，事情是這樣的…',
      endString: '房內的空氣，瀰漫著複雜的香氣，^100\n那首生日快樂，似乎成了愛情的悲歌…',
    },
    {
      id: 4,
      xsString: '唉...經過三天了，^100\n心情比較平復一點，​^100\n但我真的還是很難相信​^100\n我女友會做這種事…',
      lgString: '唉...經過三天了，心情比較平復一點，​^100\n但我真的還是很難相信​我女友會做這種事…',
      endString: '520？526？920？藏在這些數字背後的​^100\n真相，即將浮出水面……​',
    },
    {
      id: 5,
      xsString: '哇～第一次見到偵探本人耶！！^100\n我今天要跟你說的這件事，^100\n算是個突發事件，^100\n讓我和男友的感情發生了變化…​',
      lgString: '哇～第一次見到偵探本人耶！！我今天要跟你說的這件事，^100\n算是個突發事件，讓我和男友的感情發生了變化…',
      endString: '悄悄提領萬元的他，趁著女友睡得香甜時，​^100\n撥出了一通未知電話…​',
    }
  ]

  let loading1, loading2, loading3, loading4, loading5, loading6;

  const Util = {
    toGetParam:function(name, casesensitive) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      let href = window.location.href;
        
      if (!casesensitive) name = name.toLowerCase();
      if (!casesensitive) href = href.toLowerCase();
        
      let regexS = "[\\?&]" + name + "=([^&#]*)";
      let regex = new RegExp(regexS);
      let results = regex.exec(href);
  
      if (results == null) {
        return "";
      } else {
        return results[1];
      }
    }
  };

  const LoadingLoop = function(_el){
    let el = _el;

    function loopA(){
      // console.log('loop a:', el.parent().attr('class'));
      let speed = Math.random() * (2 - 0.5) + 0.5;
      let delayTime = Math.random() * (2 - 0.1) + 0.1;

      // console.log(speed, delayTime);
      TweenMax.fromTo(el, speed, 
        {
          scale: 0.3,
          alpha: 0
        },
        {
          scale: 1,
          alpha: 1,
          ease: Power3.easeOut, 
          delay: delayTime, 
          onComplete: loopB, 
          onCompleteParams: [el],
        },
      );
    }

    function loopB(){
      // console.log('loop b:', el.parent().attr('class'));
      let speed = Math.random() * (2 - 0.5) + 0.5;
      let delayTime = Math.random() * (0.5 - 0.1) + 0.1;
  
      TweenMax.to(el, speed, {
        alpha: 0, 
        ease: Power3.easeOut, 
        delay: delayTime, 
        onComplete: loopA, 
        onCompleteParams: [el],
      });
    }

    const obj = {};
    obj.kill = function(){
      for(let i=1; i<=6; i++){
        TweenMax.killTweensOf($('.loading .text-'+i+' img'));
      }
    }

    {
      $(document).ready(function () {
        loopA();
      });
    }

    return obj;
  };

  function loading(start){
    if(start){
      loading1 = new LoadingLoop($('.loading .text-1 img'));
      loading2 = new LoadingLoop($('.loading .text-2 img'));
      loading3 = new LoadingLoop($('.loading .text-3 img'));
      loading4 = new LoadingLoop($('.loading .text-4 img'));
      loading5 = new LoadingLoop($('.loading .text-5 img'));
      loading6 = new LoadingLoop($('.loading .text-6 img'));
    }else{
      loading1.kill();
      loading2.kill();
      loading3.kill();
      loading4.kill();
      loading5.kill();
      loading6.kill();
    }
  }

  $.html5Loader({
    filesToLoad: 'js/resource.json',
    onBeforeLoad: function(){
      // console.log('on BeforeLoad');
      loading(true);

      trackPageView('UA-140665809-5', 'pv_lovedetective_loading');
      _smq.push(['pageview','/loading','lovedetective_loading']);
    },
    onComplete: function(){
      // console.log('on complete');
      TweenMax.to($('.loading-bg'), 0.5, {autoAlpha: 0, delay: 2});
      TweenMax.to($('.loading'), 0.5, {autoAlpha: 0, delay: 2, onComplete: function(){
        init();
        loading(false);
      }})
      // init();
    },
    onElementLoaded: function(obj, elm){
      //console.log(elm);
    },
    onUpdate: function(percentage){
      // console.log(percentage);
    }
  });

  function init(){
    $(window).on('resize', onResize);
    onResize();
    resetTitle();
    resetGuy();
    initCase();
    
    // 測試使用
    $('.start').on('click', function(){
      // goChipExit();
      // goTitleEnter();
      // goEntranceExit();
      // goCasesEnter();
      // goGuyEnter();
    });
    
    // 點擊切換下一個畫面
    $('.entrance .arrow-group').on('click', function(){
      if(entranceStatus === 'guyEnterProgress' || entranceStatus === 'guyExitProgress') return;

      if(entranceStatus === ''){
        goGuyEnter();
      }
      if(entranceStatus === 'guyEnterComplete'){
        trackEvent('bt_intokv_start', 'index');
        _smq.push(['custom','lovedetective','kv', 'start']);

        entranceStatus = 'guyExitProgress';
        goGuyExit();
      }
      if(entranceStatus === 'guyExitComplete'){
        trackEvent('bt_kvword_start', 'index');
        _smq.push(['custom','lovedetective','kvword', 'start']);

        goEntranceExit();
        goCasesEnter();
      }
    });

    // 案件綁定偵聽
    for(let i=1; i<=storyStrings.length; i++){
      addCaseHandler(i);
    }
    
    function addCaseHandler(caseId){
      let strings = storyStrings.filter(item => {
        return item.id == caseId
      });

      // 開啟案件
      $('.case-' + caseId).on('click', function(){
        switch(caseId){
          case 1:
            trackEvent('bt_case_shirt', 'index');
            trackPageView('UA-140665809-5', 'pv_lovedetective_caseshirt');
            _smq.push(['custom','lovedetective','case', 'bt_case_shirt']);
            _smq.push(['pageview','/caseshirt','lovedetective_caseshirt']);
            break;
          case 2:
            trackEvent('bt_case_bride', 'index');
            trackPageView('UA-140665809-5', 'pv_lovedetective_casebride');
            _smq.push(['custom','lovedetective','case', 'bt_case_bride']);
            _smq.push(['pageview','/casebride','lovedetective_casebride']);
            break;
          case 3:
            trackEvent('bt_case_hunt', 'index');
            trackPageView('UA-140665809-5', 'pv_lovedetective_casehunt');
            _smq.push(['custom','lovedetective','case', 'bt_case_hunt']);
            _smq.push(['pageview','/casehunt','lovedetective_casehunt']);
            break;
          case 4:
            trackEvent('bt_case_bank', 'index');
            trackPageView('UA-140665809-5', 'pv_lovedetective_casebank');
            _smq.push(['custom','lovedetective','case', 'bt_case_bank']);
            _smq.push(['pageview','/casebank','lovedetective_casebank']);
            break;
          case 5:
            trackEvent('bt_case_vaccine', 'index');
            trackPageView('UA-140665809-5', 'pv_lovedetective_casevaccine');
            _smq.push(['custom','lovedetective','case', 'bt_case_vaccine']);
            _smq.push(['pageview','/casevaccine','lovedetective_casevaccine']);
            break;
        }
        resetClue();
        $('.story-' + caseId + ' .typed-text-1 span').empty();
  
        TweenMax.to($('.story-' + caseId), 0.6, {autoAlpha: 1, 
          onComplete: function(){
            let el_xs = document.querySelector('.story-' + caseId + ' #typed-text-xs-1');
            let el_lg = document.querySelector('.story-' + caseId + ' #typed-text-lg-1');
            let strings_xs = strings[0].xsString;
            let strings_lg = strings[0].lgString;
            typewriter(el_xs, strings_xs, function(){
              goClueEnter(caseId);
            });
            typewriter(el_lg, strings_lg, function(){});
          }
        });
      });

      // 點擊案件線索
      $('.story-' + caseId + ' .pic_clue_filter').on('click', function(){
        if(storyStatus === 'storyFindClue') return;
        storyStatus = 'storyFindClue';
        $('.story-' + caseId + ' #typed-text-2 span').empty();
        
        switch(caseId){
          case 1:
            trackEvent('bt_caseshirt_car', 'index');
            _smq.push(['custom','lovedetective','caseshirt', 'bt_caseshirt_car']);
            break;
          case 2:
            trackEvent('bt_casebride_phone', 'index');
            _smq.push(['custom','lovedetective','casebride', 'bt_casebride_phone']);
            break;
          case 3:
            trackEvent('bt_casehunt_glass', 'index');
            _smq.push(['custom','lovedetective','casehunt', 'bt_casehunt_glass']);
            break;
          case 4:
            trackEvent('bt_casebank_transfer', 'index');
            _smq.push(['custom','lovedetective','casebank', 'bt_casebank_transfer']);
            break;
          case 5:
            trackEvent('bt_casevaccine_wallet', 'index');
            _smq.push(['custom','lovedetective','casevaccine', 'bt_casevaccine_wallet']);
            break;
        }
        
        let el = document.querySelector('.story-' + caseId + ' #typed-text-2');
        let strings_end = strings[0].endString;
        typewriter(el, strings_end, function(){
          countdownTimer(800, 100, function(){
            storyStatus = '';
            goClueExit(caseId);
            goClueEndEnter(caseId);
          });
        });
      });
    }

    // 關閉案件
    $('.story-close').on('click', function(){
      resetClue();
      storyStatus = '';
      TweenMax.to($('.story'), 0.6, {autoAlpha: 0});
      
      // 清空打字機實體
      if(typewirters.length > 0) {
        typewirters.forEach(item => {
          item.stop();
          item.destroy();
          typewirters = [];
        })
      }
    });

    // 線索結尾動畫
    $('.story-1 .content-2 article').on('scroll', goClueEndScroll_1);
    $('.story-2 .content-2 article').on('scroll', goClueEndScroll_2);
    $('.story-3 .content-2 article').on('scroll', goClueEndScroll_3);
    $('.story-4 .content-2 article').on('scroll', goClueEndScroll_4);
    $('.story-5 .content-2 article').on('scroll', goClueEndScroll_5);
  }

  function onResize(){
    winW = $(window).innerWidth();
    winH = $(window).innerHeight();
    winCenterX = winW * 0.5;
    winCenterY = winH * 0.5;

    let page = Util.toGetParam('section');
    // 如果從QA單元過來就跳過intro直接進case
    if(page === 'case') {
      TweenMax.set($('.intro-1'), {autoAlpha: 0});
      TweenMax.set($('.intro-2'), {autoAlpha: 0});
      goCasesEnter(); 
    }else{
      // 依據window width去配置跑馬燈數量
      if(entranceStatus === ''){
        let marqueeAmount = Math.ceil(winW / 60);
        setMarquee(marqueeAmount);
      }
    }

    // 測試使用 跳過階段
    // TweenMax.set($('.intro-1'), {autoAlpha: 0});
    // TweenMax.set($('.intro-2'), {autoAlpha: 0});
    // TweenMax.set($('.entrance'), {autoAlpha: 0});
    // TweenMax.set($('.pattern-container'), {autoAlpha: 0});

    // 1333x750背景縮放比例
    let winRatio = winH / winW;
    let bgRatio;

    if(winW < 992){
      bgRatio = 1333 / 750;
    }else{
      bgRatio = 750 / 1333;
    }

    if(bgRatio < winRatio){
      $('.scale-container').css('height', winH);
      $('.scale-container').css('width', winH / bgRatio);
    }else{
      $('.scale-container').css('height', winW * bgRatio);
      $('.scale-container').css('width', winW);
    }

    // 770x1080背景縮放比例
    $('.h-scale-container').css('width', winH * 770 / 1080);
    $('.h-scale-container').css('height', winH);
 
    if($('.h-scale-container').innerWidth() < winW){
      $('.h-scale-container').css('width', winH * 770 / 1080);
      $('.h-scale-container').css('height', winH);
    } else{
      $('.h-scale-container').css('width', winW);
      $('.h-scale-container').css('height', winW * 1080 / 770);
    }
  }

  // 案件初始化
  function initCase(){
    setSlick($('.case-container'));

    TweenMax.set($('.case'), {scale: 0.8});
    if(winW > 992){
      TweenMax.set($('.case-4'), {scale: 1});
    }else{
      TweenMax.set($('.case-1'), {scale: 1});
    }
    

    $('.case-container').on('afterChange', function(event, slick, currentSlide){
      TweenMax.to($('.case'), 0.6, {scale: 0.8, ease: Power3.easeOut});

      let nowId;
      if(winW > 992){
        nowId = (currentSlide + 2) > 5 ? 1 : currentSlide + 2
      }else{
        nowId = currentSlide + 1;
      }
      TweenMax.to($('.case-new-' + nowId), 0.6, {scale: 1, ease: Power3.easeOut});
    });
  }

  // 打字機
  function typewriter(el, strings, callback){
    typed = new Typed(el, {
      strings: [strings],
      typeSpeed: 50,
      showCursor: false,
      onComplete: function(){
        callback();
      }
    });

    typewirters.push(typed);
  }

  // 倒數計時器
  function countdownTimer(TargetSec, rate, callback){
    let _t = 0;
    let timer;
    timer = setInterval(function(){
      _t += 100;
      
      if(_t >= TargetSec){
        clearInterval(timer);
        if(typeof callback === 'function') callback();
      }
    }, rate)
  }

  // 設置跑馬燈數量
  function setMarquee(marqueeAmount){
    trackPageView('UA-140665809-5', 'pv_lovedetective_introkv');
    _smq.push(['pageview','/introkv','lovedetective_introkv']);

    let marqueeEl = '';

    for(let i=0; i<marqueeAmount; i++){
      marqueeEl += `
        <div class="d-flex flex-column text" style="left: ${i*60}px;">${setMarqueeText()}</div>
      `
    }

    $('.marquee').width(marqueeAmount * 60);
    $('.marquee').empty().append(marqueeEl);

    // 啟動跑馬燈
    clearInterval(marqueeTimer);
    marqueeTimer = setInterval(goMarqueeEnter, 50);
    // 三秒後暫停跑馬燈
    countdownTimer(3000, 100, function(){
      goMarqueeExit(marqueeAmount);
    });
  }

  // 設置跑馬燈每一欄內的文字
  function setMarqueeText(){
    let textEl = '';
    let ary = data_intro;

    ary.forEach(item => {
      textEl += `
        <span class="font-family-serif ${item.color}">${item.text}</span>
      `
    });

    // 將陣列第一筆拉到最後一筆
    for(let i=0; i<5; i++){
      let first = ary.shift();
      ary.push(first);
    }

    return textEl
  }

  // 跑馬燈動畫
  function goMarqueeEnter(){
    ratio1 -= 0.5;
    ratio2 += 0.5;

    $('.marquee .text:nth-child(odd)').css('top', ( ratio1 + 50) + '%');
    $('.marquee .text:nth-child(even)').css('top', ( ratio2 + 50) + '%');
  }

  // 跑馬燈動畫暫停與轉場
  function goMarqueeExit(marqueeAmount){
    TweenMax.to($('.marquee .text:nth-child(odd)'), 0.4, {alpha: 0});
    TweenMax.to($('.marquee .text:nth-child(even)'), 0.4, {alpha: 0});
    TweenMax.to($('.intro-1 .bg'), 0.35, {alpha: 0, delay: 0.25, onComplete: function(){
      $('.intro-1').css('visibility', 'hidden');
      clearInterval(marqueeTimer);
      
      countdownTimer(500, 100, goTitleEnter);
    }});
  }

  // 計算碎片中心點座標
  function getChipCenter(el){
    let left = el.offset().left;
    let top = el.offset().top;
    let width = el.innerWidth();
    let height = el.innerHeight();
    let center = {
      x: left + (width * 0.5),
      y: top + (height * 0.5),
    }
    return center
  }

  // 設定碎片動畫參數
  function setChipParams(el, quadrantX, quadrantY, dRatio, delay){
    // 碎片移動的距離
    let distance = winW * dRatio;
    // 計算碎片中心點座標
    let chipCenter = getChipCenter(el);
    // console.log('chip:', chipCenter.x, chipCenter.y);
    // 計算碎片中心到畫面中心點的xy距離 
    let yDistance = chipCenter.y < winCenterY ? winCenterY - chipCenter.y : chipCenter.y - winCenterY;
    let xDistance = chipCenter.x < winCenterX ? winCenterX - chipCenter.x : chipCenter.x - winCenterX;
    // 計算碎片中心到畫面中心點的角度
    let angle = Math.atan2(yDistance, xDistance);
    // 計算碎片飛出的Ｘ軸距離
    let tragetX = xDistance + distance;
    // 計算碎片飛出的Ｙ軸距離
    let targetY = Math.tan(angle) * tragetX;
    // 計算碎片飛出的座標
    let moveX, moveY;

    if(quadrantX === "R"){
      moveX = (winCenterX + tragetX) - (el.innerWidth() * 0.5);
    }
    if(quadrantX === "L"){
      moveX = (winCenterX - tragetX) - (el.innerWidth() * 0.5);
    }
    if(quadrantY === "T"){
      moveY = (winCenterY - targetY) - (el.innerHeight() * 0.5);
    }
    if(quadrantY === "B"){
      moveY = (winCenterY + targetY) - (el.innerHeight() * 0.5);
    }
    // console.log('move:', moveX, moveY);

    TweenMax.to(el, 2.5, {
      left: moveX,
      top: moveY,
      rotation: -30,
      delay: delay,
      ease: Power4.easeOut
    });   
  }

  // 碎片動畫
  function goChipExit(){
    // setChipParams(元素、左右象限、上下象限、移動距離比例、延遲秒數)
    for(let i=0; i<xs_RT.length; i++){
      setChipParams($('.intro-2 .bg-xs .chip-' + xs_RT[i].id), 'R', 'T', xs_RT[i].ratio, xs_RT[i].delay);
    }
    for(let i=0; i<xs_RB.length; i++){
      setChipParams($('.intro-2 .bg-xs .chip-' + xs_RB[i].id), 'R', 'B', xs_RB[i].ratio, xs_RB[i].delay);
    }
    for(let i=0; i<xs_LT.length; i++){
      setChipParams($('.intro-2 .bg-xs .chip-' + xs_LT[i].id), 'L', 'T', xs_LT[i].ratio, xs_LT[i].delay);
    }
    for(let i=0; i<xs_LB.length; i++){
      setChipParams($('.intro-2 .bg-xs .chip-' + xs_LB[i].id), 'L', 'B', xs_LB[i].ratio, xs_LB[i].delay);
    }

    for(let i=0; i<lg_RT.length; i++){
      setChipParams($('.intro-2 .bg-lg .chip-' + lg_RT[i].id), 'R', 'T', lg_RT[i].ratio, lg_RT[i].delay);
    }
    for(let i=0; i<lg_RB.length; i++){
      setChipParams($('.intro-2 .bg-lg .chip-' + lg_RB[i].id), 'R', 'B', lg_RB[i].ratio, lg_RB[i].delay);
    }
    for(let i=0; i<lg_LT.length; i++){
      setChipParams($('.intro-2 .bg-lg .chip-' + lg_LT[i].id), 'L', 'T', lg_LT[i].ratio, lg_LT[i].delay);
    }
    for(let i=0; i<lg_LB.length; i++){
      setChipParams($('.intro-2 .bg-lg .chip-' + lg_LB[i].id), 'L', 'B', lg_LB[i].ratio, lg_LB[i].delay);
    }
  }

  // 標題動畫reset
  function resetTitle(){
    TweenMax.set(title_1, {x: 100, y: 10, alpha: 0});
    TweenMax.set(title_2, {x: -100, y: 30, alpha: 0});
    TweenMax.set(title_3, {x: -50, y: 10, alpha: 0});
    TweenMax.set(title_4, {x: 300, y: 10, alpha: 0});
    TweenMax.set(title_5, {x: -300, y: 10, alpha: 0});
    TweenMax.set(title_6, {x: 300, y: 40, alpha: 0});
    TweenMax.set(title_7, {x: -80, y: 10, alpha: 0});
    TweenMax.set(title_8, {x: 200, y: -10, alpha: 0});
    TweenMax.set(title_1_bg, {alpha: 0});
    TweenMax.set(title_3_bg, {css: {'-webkit-mask-size': '0% 100%'}});
    TweenMax.set(title_4_bg, {css: {'-webkit-mask-size': '0% 100%'}});
    TweenMax.set(title_5_bg, {css: {'-webkit-mask-size': '0% 100%'}});
    TweenMax.set(title_6_bg, {css: {'-webkit-mask-size': '0% 100%'}});
    TweenMax.set(title_7_bg, {alpha: 0});
    TweenMax.set(title_8_bg, {css: {'-webkit-mask-size': '0% 100%'}});
  }

  // 標題動畫進場
  function goTitleEnter(){
    // part 1
    TweenMax.to(title_1, 0.3, {x: 0, y: 0, alpha: 1, ease: Power3.easeOut});
    TweenMax.to(title_2, 0.3, {x: 0, y: 0, alpha: 1, ease: Power3.easeOut});
    TweenMax.to(title_7, 0.3, {x: 0, y: 0, alpha: 1, ease: Power3.easeOut});
    TweenMax.to(title_1_bg, 0.3, {alpha: 1, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_7_bg, 0.3, {alpha: 1, delay: 0.25, ease: Power3.easeOut});
    // part 2
    TweenMax.to(title_4, 0.3, {x: 0, y: 0, alpha: 1, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_5, 0.3, {x: 0, y: 0, alpha: 1, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_4_bg, 0.2, {css: {'-webkit-mask-size': '100% 100%'}, delay: 0.4, ease: Power3.easeOut});
    TweenMax.to(title_5_bg, 0.2, {css: {'-webkit-mask-size': '100% 100%'}, delay: 0.4, ease: Power3.easeOut});
    // part 3
    TweenMax.to(title_3_bg, 0.2, {css: {'-webkit-mask-size': '100% 100%'}, delay: 0.4, ease: Power3.easeOut});
    TweenMax.to(title_6_bg, 0.4, {css: {'-webkit-mask-size': '100% 100%'}, delay: 0.4, ease: Power3.easeOut});
    TweenMax.to(title_8_bg, 0.4, {css: {'-webkit-mask-size': '100% 100%'}, delay: 0.45, ease: Power3.easeOut});
    TweenMax.to(title_3, 0.15, {x: 0, y: 0, alpha: 1, delay: 0.5, ease: Power3.easeOut});
    TweenMax.to(title_6, 0.25, {x: 0, y: 0, alpha: 1, delay: 0.5, ease: Power3.easeOut});
    TweenMax.to(title_8, 0.25, {x: 0, y: 0, alpha: 1, delay: 0.55, ease: Power3.easeOut, 
      onComplete: function(){
        countdownTimer(800, 100, goTitleExit);
        countdownTimer(700, 100, goChipExit);
      }
    });
  }

  // 標題動畫退場
  function goTitleExit(){
    TweenMax.to(w_bg, 0.6, {alpha: 0, ease: Power3.easeOut});
    TweenMax.to(title_1, 0.6, {alpha: 0, ease: Power3.easeOut});
    TweenMax.to(title_2, 0.6, {alpha: 0, ease: Power3.easeOut});
    TweenMax.to(title_7, 0.6, {alpha: 0, ease: Power3.easeOut});
    TweenMax.to(title_1_bg, 0.6, {alpha: 0, ease: Power3.easeOut});
    TweenMax.to(title_7_bg, 0.6, {alpha: 0, ease: Power3.easeOut});

    TweenMax.to(title_4, 0.6, {alpha: 0, delay: 0.1, ease: Power3.easeOut});
    TweenMax.to(title_5, 0.6, {alpha: 0, delay: 0.1, ease: Power3.easeOut});
    TweenMax.to(title_4_bg, 0.6, {alpha: 0, delay: 0.1, ease: Power3.easeOut});
    TweenMax.to(title_5_bg, 0.6, {alpha: 0, delay: 0.1, ease: Power3.easeOut});
    
    TweenMax.to(title_3, 0.6, {alpha: 0, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_6, 0.6, {alpha: 0, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_8, 0.6, {alpha: 0, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_3_bg, 0.6, {alpha: 0, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_6_bg, 0.6, {alpha: 0, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(title_8_bg, 0.6, {alpha: 0, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to($('.intro-2'), 0.3, {autoAlpha: 0, delay: 0.85, onComplete: function(){
      countdownTimer(300, 100, goGuyEnter);
    }});
  }

  // 人物reset
  function resetGuy(){
    TweenMax.set(guy_1_1, {y: -30, alpha: 0});
    TweenMax.set(guy_1_2, {y: -30, alpha: 0});
    TweenMax.set(guy_1_3, {y: -30, alpha: 0});
    TweenMax.set(guy_2_1, {x: -40, alpha: 0});
    TweenMax.set(guy_2_2, {x: -40, alpha: 0});
    TweenMax.set(guy_3_1, {x: 40, alpha: 0});
    TweenMax.set(guy_3_2, {x: 40, alpha: 0});
    TweenMax.set(guy_3_3, {x: 40, alpha: 0});
    TweenMax.set(main_pattern, {scale: 1.6, alpha: 0});
    TweenMax.set(sub_pattern, {scale: 1.4, alpha: 0});
    TweenMax.set(sub_pattern_line, {css: {'-webkit-mask-size': '0% 100%'}});
  }

  // 人物進場
  function goGuyEnter(){
    entranceStatus = 'guyEnterProgress';

    TweenMax.to(guy_1_1, 0.6, {y: 0, alpha: 1, ease: Power3.easeOut});
    TweenMax.to(guy_1_2, 0.6, {y: 0, alpha: 1, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(guy_1_3, 0.6, {y: 0, alpha: 1, delay: 0.1, ease: Power3.easeOut});
    TweenMax.to(guy_2_1, 0.6, {x: 0, alpha: 1, delay: 0.3, ease: Power3.easeOut});
    TweenMax.to(guy_2_2, 0.6, {x: 0, alpha: 1, delay: 0.4, ease: Power3.easeOut});
    TweenMax.to(guy_3_1, 0.6, {x: 0, alpha: 1, delay: 0.3, ease: Power3.easeOut});
    TweenMax.to(guy_3_2, 0.6, {x: 0, alpha: 1, delay: 0.4, ease: Power3.easeOut});
    TweenMax.to(guy_3_3, 0.6, {x: 0, alpha: 1, delay: 0.45, ease: Power3.easeOut});
    TweenMax.to(main_pattern, 0.4, {scale: 1, alpha: 1, delay: 0.5, ease: Bounce.easeOut});
    TweenMax.to(sub_pattern, 0.4, {scale: 1, alpha: 1, delay: 0.95, ease: Bounce.easeOut});
    TweenMax.to(sub_pattern_line, 0.2, {css: {'-webkit-mask-size': '100% 100%'}, delay: 1.4, ease: Power3.easeOut,
      onComplete: function(){
        entranceStatus = 'guyEnterComplete';
        TweenMax.to(arrowGroup, 0.4, {autoAlpha: 1});
      }
    });
  }

  // 人物退場
  function goGuyExit(){
    trackPageView('UA-140665809-5', 'pv_lovedetective_kvword');
    _smq.push(['pageview','/kvword','lovedetective_kvword']);

    TweenMax.to(arrowGroup, 0.6, {autoAlpha: 0});
    TweenMax.to(bg_1, 0.6, {autoAlpha: 0});
    TweenMax.to(bg_filter, 0.6, {autoAlpha: 0});

    TweenMax.to(guy_1_1, 0.6, {alpha: 0, ease: Power3.easeOut});
    TweenMax.to(guy_1_2, 0.6, {alpha: 0, delay: 0.2, ease: Power3.easeOut});
    TweenMax.to(guy_1_3, 0.6, {alpha: 0, delay: 0.1, ease: Power3.easeOut});
    TweenMax.to(guy_2_1, 0.6, {alpha: 0, delay: 0.3, ease: Power3.easeOut});
    TweenMax.to(guy_2_2, 0.6, {alpha: 0, delay: 0.4, ease: Power3.easeOut});
    TweenMax.to(guy_3_1, 0.6, {alpha: 0, delay: 0.3, ease: Power3.easeOut});
    TweenMax.to(guy_3_2, 0.6, {alpha: 0, delay: 0.4, ease: Power3.easeOut});
    TweenMax.to(guy_3_3, 0.6, {alpha: 0, delay: 0.45, ease: Power3.easeOut});

    TweenMax.to(main_pattern, 0.6, {scale: 0.8, y: -190, delay: 0.3, ease: Power3.easeInOut});
    TweenMax.to(main_pattern_bg, 0.6, {css: {'-webkit-mask-size': '0% 100%'}, delay: 0.3, ease: Power3.easeInOut});

    countdownTimer(1000, 100, function(){
      let el = document.querySelector('#typed-preface');
      let strings = '一份秘密文件​^100\n 記載一段又一段愛恨事件​^100\n 你，能否順利破案​^100\n 拯救迷失在情愛迴廊裡的男女？';
      typewriter(el, strings, function(){
        entranceStatus = 'guyExitComplete';
        TweenMax.to(arrowGroup, 0.4, {autoAlpha: 1});
      });
    });
  }

  // 開頭序退場
  function goEntranceExit(){
    TweenMax.to($('.pattern-container'), 1, {y: -winH * 0.4, autoAlpha: 0, ease: Power3.easeOut});
    TweenMax.to($('.preface'), 1, {y: -winH * 0.5, autoAlpha: 0, ease: Power3.easeOut});
    TweenMax.to($('.arrow-group'), 1, {y: 80, autoAlpha: 0, ease: Power3.easeOut});
  }
  
  // 案例進場
  function goCasesEnter(){
    trackPageView('UA-140665809-5', 'pv_lovedetective_case');
    _smq.push(['pageview','/case','lovedetective_case']);

    TweenMax.set(bg_1, {autoAlpha: 0});
    TweenMax.set(bg_filter, {autoAlpha: 0});
    $('.cases').addClass('visible');
    TweenMax.to($('.cases .cases-container'), 1, {top: '0%', ease: Power3.easeOut});
  }

  // 設置slick
  function setSlick(el){
    el.slick({
      dots: true,
      infinite: true,
      dots: false,
      speed: 250,
      slidesToShow: 3,
      slidesToScroll: 1,
      // centerMode: true,
      centerPadding: '10px',
      easing: 'Back',
      cssEase: 'ease-in',
      prevArrow: '<div class="arrow-left"><img class="img-fluid" src="images/cases/arrow_left.png"></div>',
      nextArrow: '<div class="arrow-right"><img class="img-fluid" src="images/cases/arrow_right.png"></div>',
      
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '30px',
          }
        },
      ]
    });
  }

  // 線索reset
  function resetClue(){
    TweenMax.set($('.story .content-1'), {top: '0%'});
    TweenMax.set($('.story .content-1 .pic_clue_2'), {autoAlpha: 0});
    TweenMax.set($('.story .content-1 .pic_clue_filter'), {autoAlpha: 0});
    TweenMax.set($('.story .content-1 .arrow'), {autoAlpha: 0});
    TweenMax.set($('.story .content-2'), {top: '100%'});
    $('.story .content-1 .pic_clue_filter').removeClass('play');
    $('.story .content-2 article').scrollTop(0);
  }

  // 線索進場
  function goClueEnter(storyId){
    let clue_2 = $('.story-' + storyId + ' .pic_clue_2');
    let clue_filter_2 = $('.story-' + storyId + ' .pic_clue_filter');
    let clue_arriw_2 = $('.story-' + storyId + ' .arrow');
    TweenMax.to(clue_2, 0.4, {autoAlpha: 1});
    TweenMax.to(clue_arriw_2, 0.4, {autoAlpha: 1, delay: 0.5});
    TweenMax.to(clue_filter_2, 0.6, {autoAlpha: 1, delay: 0.5, onComplete: function(){
      clue_filter_2.addClass('play');
    }});
  }

  // 線索退場
  function goClueExit(storyId){
    let content_1 = $('.story-' + storyId + ' .content-1');
    TweenMax.to(content_1, 0.8, {top: '-100%', ease: Power3.easeOut});
  }

  // 線索結尾進場
  function goClueEndEnter(storyId){
    let content_2 = $('.story-' + storyId + ' .content-2');
    TweenMax.to(content_2, 0.8, {top: '0%', ease: Power3.easeOut});
  }

  // 案件一線索結尾
  function goClueEndScroll_1(){
    let articleScope;
    let articleTop = $(this).offset().top;
    let pic_1 = $(this).find('.clue-end-1');
    let pic_2 = $(this).find('.clue-end-2');
    let pic_3 = $(this).find('.clue-end-3');
    let picScrollTop_1 = pic_1.offset().top - articleTop;

    if(winW < 992){
      articleScope = $(this).innerHeight() * 0.9;
    }else{
      articleScope = $(this).innerHeight() * 0.8;
    }

    if(picScrollTop_1 < articleScope){
      TweenMax.to(pic_1, 0.5, {y: 0, alpha: 1});
      TweenMax.to(pic_2, 0.5, {y: 0, alpha: 1, delay: 0.1});
      TweenMax.to(pic_3, 0.5, {y: 0, alpha: 1, delay: 0.2});
    }else{
      TweenMax.to(pic_1, 0.5, {y: 30, alpha: 0});
      TweenMax.to(pic_2, 0.5, {y: 30, alpha: 0});
      TweenMax.to(pic_3, 0.5, {y: 30, alpha: 0});
    }
  }

  // 案件二線索結尾
  function goClueEndScroll_2(){
    let articleScope;
    let articleTop = $(this).offset().top;
    let pic_1 = $(this).find('.clue-end-1');
    let pic_2 = $(this).find('.clue-end-2');
    let pic_3 = $(this).find('.clue-end-3');
    let pic_4 = $(this).find('.clue-end-4');
    let pic_5 = $(this).find('.clue-end-5');
    let pic_6 = $(this).find('.clue-end-6');
    let pic_7 = $(this).find('.clue-end-7');
    let picBgScrollTop = $(this).find('.bg').offset().top - articleTop;

    if(winW < 992){
      articleScope = $(this).innerHeight() * 0.6;
    }else{
      articleScope = $(this).innerHeight() * 0.3;
    }

    if(picBgScrollTop < articleScope){
      TweenMax.to(pic_1, 0.5, {x: 0, alpha: 1});
      TweenMax.to(pic_2, 0.5, {x: 0, alpha: 1, delay: 0.1});
      TweenMax.to(pic_3, 0.5, {x: 0, alpha: 1, delay: 0.2});
      loopA();
    }else{
      TweenMax.killTweensOf(pic_4);
      TweenMax.killTweensOf(pic_5);
      TweenMax.killTweensOf(pic_6);
      TweenMax.killTweensOf(pic_7);
      TweenMax.to(pic_1, 0.5, {x: -20, alpha: 0});
      TweenMax.to(pic_2, 0.5, {x: -20, alpha: 0});
      TweenMax.to(pic_3, 0.5, {x: -20, alpha: 0});
      TweenMax.to(pic_4, 0.5, {alpha: 0});
      TweenMax.to(pic_5, 0.5, {alpha: 0});
      TweenMax.to(pic_6, 0.5, {alpha: 0});
      TweenMax.to(pic_7, 0.5, {alpha: 0});
    }

    function loopA(){
      TweenMax.to(pic_5, 0.5, {alpha: 1, delay: 2});
      TweenMax.to(pic_7, 0.5, {alpha: 1, delay: 2, onComplete: loopB});
      TweenMax.to(pic_4, 0.5, {alpha: 0, delay: 2});
      TweenMax.to(pic_6, 0.5, {alpha: 0, delay: 2});
    }
    function loopB(){
      TweenMax.to(pic_5, 0.5, {alpha: 0, delay: 2});
      TweenMax.to(pic_7, 0.5, {alpha: 0, delay: 2, onComplete: loopA});
      TweenMax.to(pic_4, 0.5, {alpha: 1, delay: 2});
      TweenMax.to(pic_6, 0.5, {alpha: 1, delay: 2});
    }
  }

  // 案件三線索結尾
  function goClueEndScroll_3(){
    let articleScope;
    let articleTop = $(this).offset().top;
    let bg = $(this).find('.bg');
    let pic_1 = $(this).find('.clue-end-1');
    let pic_2 = $(this).find('.clue-end-2');
    let pic_3 = $(this).find('.clue-end-3');
    let pic_4 = $(this).find('.clue-end-4');
    let pic_5 = $(this).find('.clue-end-5');
    let picBgScrollTop = bg.offset().top - articleTop;

    if(winW < 992){
      articleScope = $(this).innerHeight() * 0.6;
    }else{
      articleScope = $(this).innerHeight() * 0.4;
    }

    if(picBgScrollTop < articleScope){
      TweenMax.to(pic_1, 0.3, {y: 0, alpha: 1});
      TweenMax.to(pic_2, 0.3, {y: 0, alpha: 1, delay: 0.1});
      TweenMax.to(pic_3, 0.3, {y: 0, alpha: 1, delay: 0.2});
      TweenMax.to($(this).find('.bg > img'), 0.3, {alpha: 1, delay: 0.4});
      TweenMax.to(pic_4, 0.3, {alpha: 1, delay: 0.8});
      TweenMax.to(pic_5, 0.3, {alpha: 1, delay: 0.9});
    }else{
      TweenMax.to(pic_1, 0.3, {y: 30, alpha: 0});
      TweenMax.to(pic_2, 0.3, {y: 30, alpha: 0});
      TweenMax.to(pic_3, 0.3, {y: 30, alpha: 0});
      TweenMax.to(pic_4, 0.3, {alpha: 0});
      TweenMax.to(pic_5, 0.3, {alpha: 0});
      TweenMax.to($(this).find('.bg > img'), 0.3, {alpha: 0});
    }
  }

  // 案件四線索結尾
  function goClueEndScroll_4(){
    let articleScope;
    let articleTop = $(this).offset().top;
    let pic_1 = $(this).find('.clue-end-1');
    let pic_2 = $(this).find('.clue-end-2');
    let picBgScrollTop = $(this).find('.bg').offset().top - articleTop;

    if(winW < 992){
      articleScope = $(this).innerHeight() * 0.6;
    }else{
      articleScope = $(this).innerHeight() * 0.3;
    }

    if(picBgScrollTop < articleScope){
      TweenMax.to(pic_1, 0.5, {y: 0, alpha: 1});
      TweenMax.to(pic_2, 0.5, {y: 0, alpha: 1, delay: 0.1});
    }else{
      TweenMax.to(pic_1, 0.5, {y: 20, alpha: 0});
      TweenMax.to(pic_2, 0.5, {y: 20, alpha: 0});
    }
  }

  // 案件五線索結尾
  function goClueEndScroll_5(){
    let articleScope;
    let articleTop = $(this).offset().top;
    let pic_1 = $(this).find('.clue-end-1');
    let pic_2 = $(this).find('.clue-end-2');
    let pic_3 = $(this).find('.clue-end-3');
    let pic_4 = $(this).find('.clue-end-4');
    let picBgScrollTop = $(this).find('.bg').offset().top - articleTop;

    if(winW < 992){
      articleScope = $(this).innerHeight() * 0.6;
    }else{
      articleScope = $(this).innerHeight() * 0.3;
    }

    if(picBgScrollTop < articleScope){
      loopA();
    }else{
      TweenMax.killTweensOf(pic_1);
      TweenMax.killTweensOf(pic_2);
      TweenMax.killTweensOf(pic_3);
      TweenMax.killTweensOf(pic_4);
      TweenMax.to(pic_1, 0.5, {alpha: 0});
      TweenMax.to(pic_2, 0.5, {alpha: 0});
      TweenMax.to(pic_3, 0.5, {alpha: 0});
      TweenMax.to(pic_4, 0.5, {alpha: 0});
    }

    function loopA(){
      TweenMax.to(pic_1, 0.5, {alpha: 1, delay: 2});
      TweenMax.to(pic_2, 0.5, {alpha: 1, delay: 2, onComplete: loopB});
      TweenMax.to(pic_3, 0.5, {alpha: 0, delay: 2});
      TweenMax.to(pic_4, 0.5, {alpha: 0, delay: 2});
    }
    function loopB(){
      TweenMax.to(pic_1, 0.5, {alpha: 0, delay: 2});
      TweenMax.to(pic_2, 0.5, {alpha: 0, delay: 2, onComplete: loopA});
      TweenMax.to(pic_3, 0.5, {alpha: 1, delay: 2});
      TweenMax.to(pic_4, 0.5, {alpha: 1, delay: 2});
    }
  }
});