"use strict";
const navigation = document.querySelector("#mainNavigation");

// Window Object Event
window.addEventListener("scroll", () => {
	this.scrollY < navigation.offsetHeight
		? navigation.classList.remove("scrolled")
		: navigation.classList.add("scrolled");
});
