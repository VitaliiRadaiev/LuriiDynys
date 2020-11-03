var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================

window.onload = function() {
	// === Burger Handler =====================================================================
{
	let burg = document.querySelector('.burger');
	let sidePanel = document.querySelector('.side-panel');
	if(burg) {
		burg.addEventListener('click',function() {
			if(sidePanel) {
				sidePanel.classList.toggle('open');
			}
		})
	}
	
	if(sidePanel) {
		window.addEventListener('click', function(e) {
			if(!e.target.closest('.side-panel') && !e.target.closest('.burger')) {
				sidePanel.classList.remove('open');
			}
		})
	}
}
// === Burger Handler =====================================================================	;

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

	// === Плавная прокрута якорей ==================================================================
	if($('.anchor').length>0) {

		$(".anchor").click(function() {
		  var elementClick = $(this).attr("href")
		  var destination = $(elementClick).offset().top - 20;
		  jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		  }, 400);
		  return false;
		});

	}
	// === // Плавная прокрута якорей ==================================================================

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
};
	{
	const slider = document.querySelector('.blog-block .swiper-container');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					centeredSlides: true,
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

};
	{
	let card = document.querySelectorAll('.card-blog');
	if(card.length>0) {
		card.forEach( function(elem, index) {
			let textBlock = elem.querySelector('.card-blog__text');

			let span = textBlock.querySelector('span')
			if(span) {
				span.remove();
			}
			
			let text = textBlock.innerText;
			if(text.length > 405) {
				textBlock.innerHTML = [...text].splice(0, 405).join('') + ' <span>… more</span>';
			} else {
				textBlock.innerHTML = text + ' <span>… more</span>';
			}

		});
	}
};
	{
	const slider = document.querySelector('.products-block .swiper-container');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					centeredSlides: true,
					pagination: {
					    el: slider.querySelector('.swiper-pagination'),
					    clickable: true,
					  },
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

};
	{
	//SlideToggle
	let _slideUp = (target, duration = 500) => {
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.style.display = 'none';
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
	let _slideDown = (target, duration = 500) => {
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;
		if (display === 'none')
			display = 'block';

		target.style.display = display;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
	let _slideToggle = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			if (window.getComputedStyle(target).display === 'none') {
				return _slideDown(target, duration);
			} else {
				return _slideUp(target, duration);
			}
		}
	}
	//========================================

	let commentsBlock = document.querySelectorAll('.comments');
	if(commentsBlock.length>0) {
		commentsBlock.forEach(item => {
			item.addEventListener('click', function(e) {
				if(e.target.closest('.comments__reply')) {
					let btn = e.target.closest('.comments__reply');
					_slideUp(btn);
					_slideDown(btn.nextElementSibling);
				}

				if(e.target.closest('.form-comment__cancel')) {
					e.preventDefault();
					let cancel = e.target.closest('.form-comment__cancel');
					let form = cancel.closest('.form-comment');
					 _slideUp(form);
					 setTimeout(() => {
					 	_slideDown(form.previousElementSibling);
					 }, 800)
				}
			})
		})
	}

	let btnLeavComment = document.querySelector('.post-blog__btn-leave-comment');
	if(btnLeavComment) {
		btnLeavComment.addEventListener('click', function() {
			_slideUp(this);
			_slideDown(this.previousElementSibling);
			this.style.opacity = '0';
		})

		let form = btnLeavComment.previousElementSibling;
		let btnCancel = form.querySelector('.form-comment__cancel');
		btnCancel.addEventListener('click', function(e) {
			e.preventDefault();
			_slideUp(form);
			_slideDown(btnLeavComment);
			btnLeavComment.style.opacity = '1';
		})
	}
};
	{
	const slider = document.querySelector('.recent-posts .swiper-container');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					centeredSlides: true,
					pagination: {
					    el: slider.querySelector('.swiper-pagination'),
					    clickable: true,
					  },
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

};


};