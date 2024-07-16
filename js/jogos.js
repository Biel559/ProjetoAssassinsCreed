document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4, // Exibir 4 slides por vez
        spaceBetween: 30, // Espaço entre os slides
        navigation: {
        },
        breakpoints: {
            // Quando a largura da janela é >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // Quando a largura da janela é >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // Quando a largura da janela é >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // Quando a largura da janela é >= 1024px
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const swiperContainers = document.querySelectorAll(".swiper-container");
    
        swiperContainers.forEach((container) => {
            const slides = container.querySelectorAll(".swiper-slide");
            let slidesPerView = 4; // Definir o número inicial de slides por visualização
    
            // Função para ajustar o número de slides por visualização
            function adjustSlides() {
                const containerWidth = container.offsetWidth; // Largura do contêiner
                let slideWidth = slides[0].offsetWidth; // Largura do slide
    
                // Calcula quantos slides cabem na largura do contêiner
                slidesPerView = Math.floor(containerWidth / slideWidth);
    
                // Atualiza o número de slides por visualização no swiper
                const swiper = new Swiper(container, {
                    slidesPerView: slidesPerView,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
    
            // Chama a função para ajustar os slides inicialmente e em redimensionamentos
            adjustSlides();
            window.addEventListener('resize', adjustSlides);
        });
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

