$(function(){

  let questionStatus = [true, true, true, true];
  let questionAmount = 4;
  let typewriterAry = [];
  let allQA = [
    {
      id: 1,
      answer: 4,
      numberOfOptions: 4,
      question: '敏銳的你，認為誰有可能感染HPV(人類乳突病毒)？',
      detail: 'HPV主要傳染途徑為性行為，^100\n透過接觸皮膚傷口、^100\n黏膜或體液而感染。^100\n少數因為外部生殖器接觸^100\n帶有HPV的物品，也可能感染HPV。^100\n不分男女，人一生中感染^100\nHPV的機率高達80%！^100\n病毒可能藏在泳池、溫泉等等地方…^100\n小心重複感染後還可能引發癌症！^100\n快預約醫師HPV諮詢！',
    },
    {
      id: 2,
      answer: 2,
      numberOfOptions: 4,
      question: '委託人的生殖器長出花椰菜狀的突起斑塊，疑似出現感染HPV(人類乳突病毒)的症狀，你建議他…？',
      detail: '眉頭一皺，案情不單純！^100\n會不會是由HPV感染^100\n所引起的「菜花」！？^100\n快指派他到全台超過220間^100\nHPV衛教友善診所，^100\n有最專業的醫師團隊和^100\n最豐富完整的HPV衛教文宣品，^100\n任何關於HPV的各種^100\n疑難雜症都可以諮詢！',
    },
    {
      id: 3,
      answer: 1,
      numberOfOptions: 3,
      question: '委託人跟另一半愛情長跑十年，你認為單一性伴侶的她有沒有可能感染HPV(人類乳突病毒)？',
      detail: '別以為單一性伴侶就完全安全！^100\n美國研究指出，^100\n即使一生中只有一位性伴侶，^100\n也有近6成的人可能感染HPV，^100\n顯示情侶間互相傳染機率很高！',
    },
    {
      id: 4,
      answer: 4,
      numberOfOptions: 4,
      question: '委託人因性關係紊亂，害怕自己得到HPV(人類乳突病毒)，他該去哪裡諮詢與檢驗？',
      detail: 'HPV感染不分男女，^100\n建議可前往婦產科、泌尿科、^100\n家醫科、小兒科、感染科或是^100\n耳鼻喉科，諮詢專業醫師。^100\n保護自己，帶上伴侶^100\n一起預防也一樣重要！',
    },
    {
      id: 5,
      answer: 4,
      numberOfOptions: 4,
      question: '你能告訴委託人，要如何預防感染HPV(人類乳突病毒)嗎？',
      detail: 'HPV預防三關鍵跟我唸一遍：^100\n安全性行為—發生親密行為時，^100\n全程使用保險套；^100\n依醫囑接種HPV疫苗，^100\n是預防HPV最直接且積極的方式；^100\n女性定期接受抹片檢查，^100\n若感染可以及早發現、及早治療！^100\n政府補助30歲以上婦女^100\n每年一次子宮頸抹片篩檢，^100\n建議每年定期檢查，^100\n至少也要每三年檢查一次。',
    },
    {
      id: 6,
      answer: 2,
      numberOfOptions: 4,
      question: '依你的判斷，誰不能施打HPV(人類乳突病毒)疫苗 ？',
      detail: '柯南其實才7歲！^100\n9歲以上就可依醫囑接種HPV疫苗！^100\n目前台灣有2價、9價的^100\nHPV疫苗可選擇，^100\n2價HPV疫苗可施打於^100\n9歲以上女性；^100\n而9價HPV疫苗9-45歲^100\n男女性皆可施打。',
    },
    {
      id: 7,
      answer: 4,
      numberOfOptions: 4,
      question: '若委託人遇到以下狀況，還能不能施打HPV(人類乳突病毒)疫苗？',
      detail: '感染HPV後，^100\n即使有抗體仍有再次感染的風險。^100\n接種HPV疫苗可以幫助避免^100\n再次感染，及預防其他型別感染，^100\n是預防HPV最直接且積極的方式！^100\n記得也要安全性行為、^100\n女性定期接受抹片檢查，^100\nHPV預防三步驟少一個都不行！^100\n感染HPV後可施打的時間點^100\n請諮詢您的醫師。',
    },
    {
      id: 8,
      answer: 2,
      numberOfOptions: 4,
      question: '哪些疾病或癌症，不可能是因為委託人感染HPV(人類乳突病毒)後而導致的？',
      detail: '別再搞錯！^100\nHPV (Human Papillomavirus)和^100\nHIV (Human Immunodeficiency ^100\nVirus)是完全不一樣的！^100\nHPV型別約100多型，^100\n重複感染高致癌型別HPV可能導致^100\n子宮頸癌、子宮頸腺癌、陰道癌、^100\n外陰癌、肛門癌等男女癌症，^100\n感染低致癌型別HPV^100\n則可能導致菜花。',
    },
    {
      id: 9,
      answer: 4,
      numberOfOptions: 4,
      question: '委託人子宮頸抹片報告顯示異常，有可能出現以下哪些狀況？',
      detail: 'HPV感染者一般沒有症狀，^100\n大部分感染會在一年內自體清除，^100\n若發生持續性感染，^100\n就有可能引發癌前病變或癌症！^100\n當女性抹片檢查結果有異常，^100\n需進一步檢查，^100\n才能確定診斷和是否需治療。^100\n子宮頸癌是台灣女性癌症^100\n死亡原因第八位，^100\n是婦女健康的隱形殺手，不可輕忽！',
    },
    {
      id: 10,
      answer: 3,
      numberOfOptions: 3,
      question: '若男性委託人感染HPV (人類乳突病毒)，有可能會跟下列什麼花有關？',
      detail: '你相信嗎？^100\n全球男性因HPV致病人數較女性高！^100\nHPV有100多型別，男性重複感染^100\n高致癌型別HPV可能^100\n導致肛門癌(菊花QQ)，^100\n感染低致癌型別HPV^100\n則可能導致菜花。^100\n未施打HPV疫苗的18-70歲男性，^100\n菜花治好後仍有至少4成復發率。^100\n呼籲男性保護自己也保護另一半，^100\n兩性共同預防更完整！',
    },
  ]

  function init(){

    var randomAry = getRandomNum(questionAmount, 10);

    resetSection();
    setQuestion(randomAry);
    goDescriptionEnter();

    $('.btn-start').on('click', goQuestionEnter);
    $('.link-rule').on('click', function(){
      TweenMax.to($('.rule'), 0.6, {autoAlpha: 1});
    });
    $('.rule-close').on('click', function(){
      TweenMax.to($('.rule'), 0.6, {autoAlpha: 0});
    });

    for(let i=1; i<=questionAmount; i++){
      addQuestionHandler(i);
    }

    function addQuestionHandler(qId){
      // 作答
      $('.q-' + qId + ' .option').on('click', function(){
        if(!questionStatus[qId - 1]) return;
        questionStatus[qId - 1] = false;

        let q = $('.q-' + qId);
        let qTop = q.offset().top;
        let qOptionTop = q.find('.option-group').offset().top;
        let qAnswer = q.find('.answer');
        let moveY = qOptionTop - qTop;
        
        q.addClass('active');
        qAnswer.addClass('active');
        
        // 找出本來的題目
        let orgId = $(this).data('org');
        let orgQ = allQA.filter(item => (item.id === orgId));      
        let {answer, numberOfOptions} = orgQ[0];
  
        for(let i=1; i<=numberOfOptions; i++){
          let option = q.find('.option-group .option:nth-child(' + i + ')');
          if(i === answer){
            option.addClass('big');
          }else{
            option.addClass('small');
          }
        }
  
        TweenMax.to($('.q-' + qId), 0.6, {scrollTo: {y: 'max'}, delay: 0.1, ease: Power3.easeOut,
          onComplete: function(){
            
          }
        });

        countdownTimer(600, 100, function(){
          let el = document.querySelector('.q-' + qId + ' .typed-detail');
          let strings = typewriterAry[qId - 1];
          typewriter(el, strings, function(){
            TweenMax.to($('.q-' + qId + ' .arrow-group'), 0.3, {autoAlpha: 1});
            TweenMax.to($('.q-' + qId), 0.6, {scrollTo: {y: 'max'}, ease: Power3.easeOut});
          });
        })
      });

      // 下一題
      $('.q-' + qId + ' .arrow-group').on('click', function(){
        let nextId = qId + 1;
        let nextElement;

        if(qId === questionAmount){
          nextElement = $('.final-answer');
        }else{
          nextElement = $('.q-' + nextId);
        }

        TweenMax.to($('.q-' + qId), 0.6, {top: '-100%', autoAlpha: 0});
        TweenMax.to(nextElement, 0.6, {top: '0%', autoAlpha: 1});
      });
    }
  }
  init();

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

    // typewirters.push(typed);
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

  // 陣列取亂數不重複
  function getRandomNum(getLength, aryLength) { 
    let result = []; 
    let testArray = Array.from({length: aryLength}, (unused, index) => index + 1);
    for (let i=0; i < getLength; i++) { 
      let random = Math.floor(Math.random() * testArray.length); 
      if(result.includes(testArray[random])){ 
        continue; 
      } 
      result.push(testArray[random]); 
      testArray.splice(random, 1); 
    } 

    return result; 
  } 

  // 序文進場
  function goDescriptionEnter(){
    countdownTimer(500, 100, function(){
      $('#typed-des').empty();
      let strings = '看來，你已掌握了真相^100\n若你能破解情愛謎題^100\n成功拯救深陷其中的委託人^100\n將有機會獲得 LINE POINTS 100點';
      typewriter(document.querySelector('#typed-des'), strings, function(){
        TweenMax.to($('.link-rule'), 0.6, {autoAlpha: 1});
        TweenMax.to($('.btn-start'), 0.6, {autoAlpha: 1});
      });
    });
  }

  // reset 這個單元
  function resetSection(){
    TweenMax.set($('.question-container'), {autoAlpha: 0, y: 100});
    TweenMax.set($('.description-container'), {autoAlpha: 1});
    TweenMax.set($('.btn-start'), {autoAlpha: 0});
  }

  // 設置問題
  function setQuestion(ary){
    let filterAry = [];
    for(let i=0; i<allQA.length; i++){
      for(let j=0; j<ary.length; j++){
        if(allQA[i].id === ary[j]){
          filterAry.push(allQA[i]);
        }
      }
    }
    console.log(filterAry);
    
    let element = '';
    filterAry.forEach((item, index) => {
      typewriterAry[index] = item.detail;

      element += `
      <div class="q q-${index + 1}">
        <p class="font-family-serif num"><span>Q${index + 1}</span>/4</p>
        <h5 class="text-center">${item.question}</h5>
        <div class="d-flex flex-column align-items-center option-group">
          ${setOption(item.id, item.numberOfOptions)}
        </div>
        <p class="d-flex justify-content-center text-center answer">
          <span class="typed-detail"></span>
        </p>
        <div class="arrow-group">
          <div class="arrow"></div>
        </div>
      </div>
      `;
    });
    $('.question-group').prepend(element);

    for(let i=0; i<questionAmount; i++){
      let q = $('.q-' + (i + 1));
      if(i === 0){
        q.css('top', '0%');
      }else{
        q.css('top', '100%');
      }
      // q.css('top', '100%');
    }
   
    $('.final-answer').css('top', '100%');
  }

  // 設置問題選項
  function setOption(id, amount){
    let optionElement = '';
    for(var i=0; i<amount; i++){
      optionElement += `
      <div class="option" data-org="${id}">
        <img class="img-fluid" src="images/qa/option_${id}_${i + 1}.png">
      </div>
      `;
    }
    return optionElement;
  }

  // 問題進場
  function goQuestionEnter(){
    TweenMax.to($('.question-container'), 0.6, {autoAlpha: 1, y: 0, delay: 0.1});
    TweenMax.to($('.description-container'), 0.6, {autoAlpha: 0});

    $('.wrapper').addClass('active');
    $('.questions-container').addClass('active');
  }

});