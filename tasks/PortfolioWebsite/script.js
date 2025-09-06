const swiper = new Swiper('.card-wrapper', {
 
  loop: true,
  spaceBetween: 30 ,

  // نقاط التنقل بالانجليزي (pagination bullets)
  pagination: {
    el: '.swiper-pagination',
    clickable: true ,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//هاي مشان تصير (responsive)
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
   
  }

 
});

  let lastScroll = 0;
  const navbar = document.getElementById("navbar") ;

  window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      
      navbar.style.top = "-80px"; 
    } else {
      
      navbar.style.top = "0";
    }
    

    lastScroll = currentScroll;


  });