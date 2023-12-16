document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    });

  Array.from(document.getElementsByClassName("links")).forEach( (element, index) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      swiper.slideTo(index, 500, false);
    })
  })
})
