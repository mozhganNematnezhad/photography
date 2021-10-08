// یعنی از بالا یه مفدار که اسکرول میکنم و یه مقدار 100 تا که میام پایین بعش 
// navbar-shrink
// اضاقه کن 
// و در غیر این صورت حدفش کن... یعنی کمتر بود
// offset یعنی از بالا یه فاصله ای داشته باشد 

// اصافه کردن shrink
$(document).ready(function() {
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };


  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);






  
// active--- مال بوت استرپ هست
// کلاس اکتیو را به تگ های  
// a
//  ما میدهید 
// یعنی به
//  هر کدوم که رسید کلاس اکتیو را بهشون اصافه میکند

   // Activate scrollspy to add active class to navbar items on scroll
   $("body").scrollspy({ target: "#mainNav" });

   
  // 1---
// برای همبرگر منو که در حالت موبایل وقتی که مثلا  
// about
// میزنی بره روی 
// about
// و بعد خود اون کلبس بسته شود
// 2---
//  وقتی کلیک می شود 
// js-scroll-trigger
// کلبس ما هاید شود
// 3---
// هر کدوم از این تگ های  ای من که کلیک شد 
// برو نوبار کلبس منو  کلبسشو هاید کن
// یعنی مثلا من داخل موبایل هستم کلبس خودمو باز کردم و روی پروژه زدم وقتی که زدم و رفت روی پروژه حالا اون کلبس
// من پنهان شود 
  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });





  
  // برای نرم جرکت کردن بین صفحات هست
  // Smooth Scrolling
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  

  // برای دادن انیمشن چپ و راست به پروژه
  // Add Animation fromLeft & fromRight with scroll
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 800) {
      $(".img-project").addClass("fromRight");
      $(".featured-text").addClass("fromLeft");
    } else {
      $(".img-project").removeClass("fromRight");
      $(".featured-text").removeClass("fromLeft");
    }
  });
});






filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}










var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      //  mousewheel: true,
      // keyboard: true,
      spaceBetween: 30,
      loop: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });