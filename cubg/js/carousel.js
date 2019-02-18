
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow:4 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 950,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 720,
      settings: {
        slidesToShow: 2
      }
    },{
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
