$(function(){

  function init(){
    setSlick($('.kol-container'));

    $('.kol-container').on('afterChange', function(event, slick, currentSlide){
      TweenMax.to($('.kol'), 0.6, {scale: 0.8, ease: Power3.easeOut});
      TweenMax.to($('.kol-' + currentSlide), 0.6, {scale: 1, ease: Power3.easeOut});
    });

    TweenMax.set($('.kol'), {scale: 0.8});
    TweenMax.set($('.kol-0'), {scale: 1});
  }
  init();

  // 設置slick
  function setSlick(el){
    el.slick({
      dots: true,
      infinite: true,
      dots: false,
      speed: 250,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10px',
      easing: 'Back',
      cssEase: 'ease-in',
      prevArrow: '<div class="arrow-left"><img class="img-fluid" src="images/cases/arrow_left.png"></div>',
      nextArrow: '<div class="arrow-right"><img class="img-fluid" src="images/cases/arrow_right.png"></div>',
      
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
          }
        },
      ]
    });
  }
});