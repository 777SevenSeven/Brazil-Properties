// Navbar
document.addEventListener("DOMContentLoaded", () => {
    const $navBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    $navBurgers.forEach(el => {
        el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle("is-active"); 
            $target.classList.toggle("is-active"); 
        });
    });
});

// Isotope JS
const $isotopeChecker = $(".isotope-container").isotope({
    itemSelector: ".isotope-element",
    layoutMode: "fitRows",
});

$("#isotope-filters").on("click", "div", function () {
    let filterValue = $(this).attr("data-filter");
    $isotopeChecker.isotope({ filter: filterValue });
});

$(".button-group").each(function (index, buttonGroup) { 
    let $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "div", function() {
        $buttonGroup.find(".is-selected").removeClass("is-selected"); 
        $(this).addClass("is-selected");
    });
});

// Slick JS
$(".testimonial-slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".previous-button"),
    nextArrow: $(".next-button"),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            },
        },
    ],
});

// Scroll to Top Button
let scrollButton = document.getElementById("scroll-button");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

$("a[href='#top']").click(function () {
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
});
