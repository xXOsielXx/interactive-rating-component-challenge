// Rating Buttons

const ratingBtns = document.querySelectorAll(".rating-btn");

ratingBtns.forEach(e => {
	selectedNumber = e.textContent;
	e.addEventListener("click", () => {
		ratingBtns.forEach(e => {
			if (e.classList.contains("rating-btn-active")) {
				e.classList.remove("rating-btn-active")
			}
		})
		e.classList.add("rating-btn-active");
		selectedNumber = e.textContent;
	})
});

// Submit Button

const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
	const ratingComponent = document.getElementById("rating-component");

	ratingComponent.textContent = "";

	const imgThankYou = document.createElement("img");
	imgThankYou.src = "images/illustration-thank-you.svg";
	imgThankYou.alt = "Mobile sending a message";
	imgThankYou.classList.add("img-thank-you");

	const selectedText = document.createElement("span");
	selectedText.classList.add("selected-text");
	selectedText.textContent = `You selected ${selectedNumber} of 5`;

	const h2 = document.createElement("h2");
	h2.classList.add("text-align-center");
	h2.textContent = "Thank you!";

	const p = document.createElement("p");
	p.classList.add("text-align-center");
	p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

	ratingComponent.appendChild(imgThankYou);
	ratingComponent.appendChild(selectedText);
	ratingComponent.appendChild(h2);
	ratingComponent.appendChild(p);
})