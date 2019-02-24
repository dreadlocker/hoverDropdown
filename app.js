const navOptionsArr = document.querySelectorAll('[name="option"]');

const showDropdown = e =>
	(e.target.firstElementChild.style.opacity = "1");
const hideDropdown = e =>
	(e.target.firstElementChild.style.opacity = "0");

navOptionsArr.forEach(element => {
	element.addEventListener("mouseenter", showDropdown);
	element.addEventListener("mouseleave", hideDropdown);
});