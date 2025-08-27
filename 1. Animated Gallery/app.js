function plugin(active) {
	const slides = document.querySelectorAll('.slide')

	slides[active].classList.add('active')

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActiveClassName()
			slide.classList.add('active')
		})
	}

	function clearActiveClassName() {
		slides.forEach(slide => {
			slide.classList.remove('active')
		})
	}
}

plugin(2)
