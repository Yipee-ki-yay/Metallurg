// =============== begin tournament-tabs

const tabs = document.querySelectorAll(".tournament-tab");
const contents = document.querySelectorAll(".tournament-tab-content");
const tabsWrap = document.querySelector(".tournament-tabs-titles-wrap");
const activeClass = "active";

tabsWrap.addEventListener("click", (e) => {
	if (e.target.classList.contains("tournament-tab")) {
		[...tabs].forEach((tab, tabIndex, tabArray) => {
			tab.classList.remove(activeClass);
			contents[tabIndex].classList.remove(activeClass);
			if (e.target === tab) {
				tab.classList.add(activeClass);
				contents[tabIndex].classList.add(activeClass);
			}
		});
	}
});


// =============== end tournament-tabs


// ===============begin main-slider
$('.main-slider').slick({
	infinite: true,
	dots: true,
	arrows: false,
});
// ===============end main-slider

// ===============begin secondary-slider__slider
$('.secondary-slider__slider').slick({
	// slide: '.secondary-slider-item',
	infinite: true,
	dots: false,
	arrows: true,
	appendArrows: $(".secondary-slider__navigation"),
	prevArrow: '<button class="slick-prev"><span class="icon-chevron_left"></span></button>',
	nextArrow: '<button class="slick-next"><span class="icon-chevron-right"></span></button>',
});
// ===============end secondary-slider__slider

// =============== begin youtube-slider
 $('.slider-youtube__for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-youtube__nav',
	autoplay: false
});
$('.slider-youtube__nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-youtube__for',
	dots: false,
	arrows: false,
	centerMode: false,
	focusOnSelect: true

});
// =============== end youtube-slider

