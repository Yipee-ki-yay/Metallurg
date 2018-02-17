
//===============begin hamburger mobile menu
const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenus = document.querySelector('.header-menus-wrapper');
const closeMobileMenusBtn = document.querySelector('.close-hamburger-menu');
const mainMenu = document.querySelector('.header-menu');
const mainMenuItems = document.getElementsByClassName('header-menu__item');
const sportClubMenus = document.getElementsByClassName('sport-club-menu');
const mainCastMenus = document.getElementsByClassName('main-cast-menu');

hamburgerBtn.addEventListener("click", function(event){
	event.preventDefault();
	mobileMenus.classList.add('menus-open');
});

closeMobileMenusBtn.addEventListener("click", function(event){
	event.preventDefault();
	mobileMenus.classList.remove('menus-open');
});

mainMenu.addEventListener("click", function(event){	
	let target = event.target;
	if(target.className == "header-menu__link") {
		event.preventDefault();
		for (var i = 0; i < sportClubMenus.length; i++) {
			sportClubMenus[i].classList.remove('menus-open');
		}
		let secMenu = target.parentNode.getElementsByClassName('sport-club-menu');
		secMenu[0].classList.add('menus-open');
	}
	else if(target.className == "sport-club-menu__link") {
		event.preventDefault();
		for (var i = 0; i < mainCastMenus.length; i++) {
			mainCastMenus[i].classList.remove('menus-open');
		}
		let thirdMenu = target.parentNode.getElementsByClassName('main-cast-menu');
		thirdMenu[0].classList.add('menus-open');
	}
});
//===============end hamburger mobile menu


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
	autoplay: false,
	adaptiveHeight: true
});
$('.slider-youtube__nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-youtube__for',
	dots: false,
	arrows: false,
	centerMode: false,
	focusOnSelect: true,
	responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]

});
// =============== end youtube-slider

