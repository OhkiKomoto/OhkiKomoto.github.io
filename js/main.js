(() => {

	const onTestimonialChange = () => {
		let firstChild, lastChild;
        const prevArrow = document.querySelector(".arrow-left");
        const nextArrow = document.querySelector(".arrow-next");
        const testimonials = document.querySelector(".testimonials ul");

        document.addEventListener("click", () => {
        	if(event.target === prevArrow) {
                lastChild = testimonials.lastElementChild;
                testimonials.insertAdjacentElement("afterbegin", lastChild);
        	} else if (event.target === nextArrow) {
                firstChild = testimonials.firstElementChild;
                testimonials.insertAdjacentElement("beforeend", firstChild);
        	}
        })
	}
})();