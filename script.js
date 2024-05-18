
        //Get the button
        let mybutton = document.getElementById("btn-back-to-top");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", backToTop);

        function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

//================================
        const navEl = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 10) {
                navEl.classList.add('navbar-scrolled');

            }

            else if (window.scrollY < 10) {
                navEl.classList.remove('navbar-scrolled');
            }
        })
//===============================
const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
    // Define a dobra superior, inferior e laterais da tela
    const windowTop = (offset * window.innerHeight) / 100;
    const windowBottom = window.innerHeight - windowTop;
    const windowLeft = 0;
    const windowRight = window.innerWidth;

    this.start = (element) => {
        window.requestAnimationFrame(() => {
            // Seta os atributos customizados
            element.style.animationDelay = element.dataset.animationDelay;
            element.style.animationDuration = element.dataset.animationDuration;

            // Inicia a animacao setando a classe para animar
            element.classList.add(element.dataset.animation);

            // Seta o elemento como animado
            element.dataset.animated = "true";
        });
    };

    this.inViewport = (element) => {
        // Obtem o boundingbox do elemento
        const elementRect = element.getBoundingClientRect();
        const elementTop =
            elementRect.top + parseInt(element.dataset.animationOffset) ||
            elementRect.top;
        const elementBottom =
            elementRect.bottom - parseInt(element.dataset.animationOffset) ||
            elementRect.bottom;
        const elementLeft = elementRect.left;
        const elementRight = elementRect.right;

        // Verifica se o elemento esta na tela
        return (
            elementTop <= windowBottom &&
            elementBottom >= windowTop &&
            elementLeft <= windowRight &&
            elementRight >= windowLeft
        );
    };

    // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
    this.verifyElementsInViewport = (els = elements) => {
        for (let i = 0, len = els.length; i < len; i++) {
            // Passa para o proximo laço se o elemento ja estiver animado
            if (els[i].dataset.animated) continue;

            this.inViewport(els[i]) && this.start(els[i]);
        }
    };

    // Obtem todos os elementos a serem animados
    this.getElements = () =>
        document.querySelectorAll("[data-animation]:not([data-animated])");

    // Atualiza a lista de elementos a serem animados
    this.update = () => {
        elements = this.getElements();
        elements && this.verifyElementsInViewport(elements);
    };

    // Inicia os eventos
    window.addEventListener("load", this.update, false);
    window.addEventListener(
        "scroll",
        () => this.verifyElementsInViewport(elements),
        { passive: true }
    );
    window.addEventListener(
        "resize",
        () => this.verifyElementsInViewport(elements),
        { passive: true }
    );
};

// Initialize
const optionss = {
    offset: 15 // percentage of the window
};

const animation = new AnimateOnScroll(optionss);

//================================
$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zooms").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });
});
//==============================
$(document).ready(function () {
    $('#testimonial-carousel').owlCarousel({
        items: 3,        // Set the number of items to display at a time
        loop: true,      // Enable infinite looping
        autoplay: true,  // Enable autoplay
        margin: 20,      // Set the margin between items
        dots: true,      // Enable indicators (dots)

        responsive: {
            0: {
                items: 1 // Display 1 item on screens smaller than 768px
            },
            768: {
                items: 2 // Display 2 items on screens between 768px and 992px
            },
            992: {
                items: 3 // Display 3 items on screens larger than 992px
            }
        }
    });
});
