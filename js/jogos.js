document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        allowTouchMove: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    const swiperSlides = document.querySelectorAll(".swiper-slide");

    swiperSlides.forEach((slide) => {
        slide.addEventListener("mouseenter", function () {
            slide.style.transition = "transform 0.3s ease";
            slide.style.transform = "translateY(-10px)";
        });

        slide.addEventListener("mouseleave", function () {
            slide.style.transition = "transform 1.0s ease";
            slide.style.transform = "translateY(0)";
        });
    });
});
