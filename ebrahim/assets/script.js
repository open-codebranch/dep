function selectElement(selector){
	return document.querySelector(selector);
}

/* ================================
	Navbar toggler
=================================*/
var navbar = selectElement(".navbar-collapse");

function toggleNav()
{
    if (navbar.classList.contains("show") == false){
        navbar.classList.add("show");
    }else{
        navbar.classList.remove("show");
    }
}

/* ================================
	Theme toggler
=================================*/
const html = selectElement("html");
const themeToggler = selectElement("#theme-toggler");

let theme = localStorage.getItem("theme");

// Add theme class OR set theme
if (theme != null){
	html.className = theme;
}else{
	localStorage.setItem("theme", "light");
}


// Change theme by clicking theme-toggler
themeToggler.addEventListener("click", function toggleTheme(){

	let theme = localStorage.getItem("theme");

	if (theme == "light"){
		localStorage.setItem("theme", "dark");
		html.className = localStorage.getItem("theme");
		// console.log(localStorage.getItem("theme"));
	}else{
		localStorage.setItem("theme", "light");
		html.className = localStorage.getItem("theme");
		// console.log(localStorage.getItem("theme"));
	}
});