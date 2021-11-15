//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_about = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

if (document.querySelector('.cat-slider__body')) {
	new Swiper('.cat-slider__body', {
		observer: true,
		observeParents: true,
		speed: 800,
		loop: true,
		watchOverflow: true,
		slidesPerGroup: 3,
		// Dotts
		pagination: {
			el: '.cat-slider__dots',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-arrows__item_next',
			prevEl: '.slider-arrows__item_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 30
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 45
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 65
			},
		}
	})
}

if (document.querySelector('.slider-cats__body')) {
	new Swiper('.slider-cats__body', {
		observer: true,
		observeParents: true,
		speed: 800,
		loop: true,
		watchOverflow: true,
		slidesPerGroup: 1,
		// Dotts
		pagination: {
			el: '.slider-cats__dots',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-cats-arrows__item_next',
			prevEl: '.slider-cats-arrows__item_prev',
		},
	})
}

if (document.querySelector('.slider-about__body')) {
	new Swiper('.slider-about__body', {
		observer: true,
		observeParents: true,
		speed: 400,
		dynamic: true,
		watchOverflow: true,
		centeredSlides: true,
		loop: true,
		freeMode: true,
		// Dotts
		pagination: {
			el: '.slider-about__dots',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-about-arrows__item_next',
			prevEl: '.slider-about-arrows__item_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
			},
			// when window width is >= 768px
			768: {
				spaceBetween: 70,
				slidesPerView: 2.2,
			},
		}
	})
}
