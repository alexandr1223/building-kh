window.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  $(document).ready(function(){
    $(".set > a").on("click", function(event){
      event.preventDefault();
      if($(this).hasClass('active')){
        $(this).removeClass("active");
        $(this).siblings('.contentAcc').slideUp(200);
        $(".set > a svg").removeClass("plus")
        $(this).find("svg").removeClass("plus");
      } else {
        $(".set > a svg").removeClass("plus");
        $(this).find("svg").addClass("plus")
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $('.contentAcc').slideUp(200);
        $(this).siblings('.contentAcc').slideDown(200);
      }
    });
  });

  $('.review__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<div id='next' class='next-arrow'><img src='/img/icon/right-arrow.svg'></div>",
    nextArrow: "<div id='prev' class='prev-arrow'><img src='/img/icon/right-arrow.svg'></div>",
    responsive: [
      {
        breakpoint: 989,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  function moreImg() {
    document.querySelector('.gallery__btn').addEventListener('click', () => {
      document.querySelectorAll('.gallery a').forEach(item => {
        item.classList.remove('gallery__hide')
        document.querySelector('.gallery__btn').style.display = "none"
      })
      
    })
  }
  moreImg();

  function videoOpen() {
    document.querySelector('.why__btn').addEventListener('click', () => {
      document.querySelector('.video').classList.add('showModal')
    })
  }
  videoOpen();

  function videoClose() {
    document.querySelector('.video').addEventListener('click', (event) => {
      if (event.target.classList.contains('video')) {
        document.querySelector('.video').classList.remove('showModal')
      }
    })
  }
  videoClose();

    // window.onload = function () {
    //   document.body.classList.add('loaded_hiding');
    //   window.setTimeout(function () {
    //     document.body.classList.add('loaded');
    //     document.body.classList.remove('loaded_hiding');
    //   }, 500);
    // }

    lightGallery(document.querySelector('.lightgallery'));

    $('img.img-svg').each(function(){
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    });

  
  
});

function modalShow(btn) {
  document.querySelector(`${btn}`).addEventListener('click', () => {
    document.querySelector('.modal').classList.add('showModal')
  })
}

modalShow('.menu__btn');

function modalHide() {
  document.querySelector('.modal').addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      document.querySelector('.modal').classList.remove('showModal')
    }
  })
}

modalHide();


$(function(){
    $('input[name="phone"]').mask("99 999 9999");
  });

  $(function(){
    var input = document.querySelectorAll('input[name="phone"]');
    

    input.forEach(function(item) {

      errorMsg = document.querySelector("#error-msg"),
      validMsg = document.querySelector("#valid-msg");

      var iti = window.intlTelInput(item, {
        onlyCountries: [ "ua", "al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
  "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
  "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
  "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "gb"],
      hiddenInput: "full_phone",
      initialCountry:"ua",
      autoHideDialCode: false,
      separateDialCode: true
      });
      
      // let str = document.querySelector('.iti__selected-flag').getAttribute("title");
      //   str = str.split("+");
      //   document.querySelector('input[name="input-hidden"]').value = str[1];
      
      // document.body.addEventListener('click', () => {
      //   let str = document.querySelector('.iti__selected-flag').getAttribute("title");
      //   str = str.split("+");
      //   document.querySelector('input[name="input-hidden"]').value = str[1];
      // })

    //   var reset = function() {
    //     input.classList.remove("error");
    //     errorMsg.innerHTML = "";
    //     errorMsg.classList.add("hide");
    //     validMsg.classList.add("hide");
    //   };
    
    // // on blur: validate
    // item.addEventListener('blur', function() {
    //   reset();
    //   if (input.value.trim()) {
    //     if (iti.isValidNumber()) {
    //       validMsg.classList.remove("hide");
    //     } else {
    //       input.classList.add("error");
    //       var errorCode = iti.getValidationError();
    //       errorMsg.innerHTML = errorMap[errorCode];
    //       errorMsg.classList.remove("hide");
    //     }
    //   }
    // });
    //   // on keyup / change flag: reset
    //   item.addEventListener('change', reset);
    //   item.addEventListener('keyup', reset);

    });
  })
  


// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     const menu = document.querySelector('.navigation-menu')
//     menu.classList.toggle('navigation-menu_active')
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

 
function scrollDownEvent(item) {
	$(item).on("click", function (event) {
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
			
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		if(id.includes('http')){
			document.location.href=id;
		}
    //отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
};
scrollDownEvent('a[href*="#"]');

$('.scroll-down').on("click", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

  //забираем идентификатор бока с атрибута href
  var id  = $(this).attr('href'),

  //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
  
  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
});


// $(document).on('click', 'div[class^="vacancies-buttons"]', function(e) {
//   e.preventDefault();
//   console.log(e.target);
//   console.log(this);
//   alert('Вы кликнули по ссылке с классом ' + this.className);
// });