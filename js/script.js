$(document).ready(function(){
  $('.section05 .slider-wrap').slick({
     infinite: true ,      // 무한반복
    centerMode: false ,
     slidesToShow: 1,     // 보여지는 슬라이드 개수
     slidesToScroll: 1,   // 넘어가는 슬라이드 개수
     dots: true,         // 점 네비게이션 표시
     arrows: true ,     // 화살표 표시
     fade: false,            // 페이드 효과
     vertical: false,         // 상하 슬라이드
     autoplay: true,       //자동스크롤
     autoplaySpeed: 3000,  //자동스크롤 속도
    pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
	  prevArrow: ".section05 .prev-arrow",
	  nextArrow: ".section05 .next-arrow",
    
  });
});