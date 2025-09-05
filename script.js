function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".projects-next",
      prevEl: ".projects-prev",
    },
    breakpoints: {
      0:   { slidesPerView: 1, slidesPerGroup: 1 },
      640: { slidesPerView: 2, slidesPerGroup: 2 },
      1024:{ slidesPerView: 3, slidesPerGroup: 3 },
    },
  });


