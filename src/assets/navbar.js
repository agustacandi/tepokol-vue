const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("nav-btn");
const navTitle = document.getElementById("nav-title");
const navItems = document.getElementById("nav-items");
const closeBtn = document.getElementById("close-btn");
const navRes = document.getElementById("nav-res");

if (window.innerWidth >= 1024) {
	navItems.style.color = "white";
	navBtn.classList.add("hide");
	navbar.style.marginTop = "1.25rem";
} else {
	navBtn.classList.remove("hide");
	navbar.classList.add("nav-colored");
}

// Event untuk pengecekan perubahan lebar layar monitor
window.addEventListener("resize", function (e) {
	if (e.target.innerWidth >= 1024) {
		if (
			document.body.scrollTop >= 50 ||
			document.documentElement.scrollTop >= 50
		) {
			navbar.classList.add("nav-colored");
			navbar.style.marginTop = "0";
		} else {
			navbar.style.marginTop = "1.25rem";
			navItems.style.color = "white";
			navbar.classList.remove("nav-colored");
		}
		navBtn.classList.add("hide");
		navItems.classList.remove("hide");
		navRes.classList.remove("active");
	} else {
		navbar.classList.add("nav-colored");
		navbar.style.marginTop = "0";
		navItems.classList.add("hide");
		navBtn.classList.remove("hide");
	}
});

// Event untuk scroll
window.onscroll = function (e) {
	("use strict");
	if (e.target.body.clientWidth >= 1024) {
		if (document.documentElement.scrollTop >= 50) {
			navbar.style.marginTop = "0";
			navbar.classList.add("nav-colored");
			navItems.style.color = "black";
			navTitle.classList.add("black");
		} else {
			navbar.style.marginTop = "1.25rem";
			navbar.classList.remove("nav-colored");
			navItems.style.color = "white";
			navTitle.classList.remove("black");
		}
	} else {
		if (document.documentElement.scrollTop == 0) {
			navbar.style.marginTop = "0";
			navItems.style.color = "white";
		}
	}
};

navBtn.addEventListener("click", function () {
	navRes.classList.toggle("active");
});