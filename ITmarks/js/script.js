$(document).ready(function () {
	const animItems = document.querySelectorAll('._anim-item');
	
	function animOnScroll(event) {
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem);
			const animStart = 2;
		
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	};

	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return rect.top + scrollTop;
	};


	if (animItems.length > 0) {
		$(window).scroll(animOnScroll);
		setTimeout(() => {
			animOnScroll();
		}, 300);
	};

	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	})
})