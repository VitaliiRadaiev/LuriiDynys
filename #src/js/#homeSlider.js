{
	let slider = document.querySelector('.slider .swiper-container')
	if(slider) {
		let swiper = new Swiper(slider, {
		  slidesPerView: 1,
		  loop: true,
		  autoHeight: true,
		  navigation: {
		  	nextEl: slider.querySelector('.slider__button-next'),
		  	prevEl: slider.querySelector('.slider__button-prev'),
		  },
		})
	}
}