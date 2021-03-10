window.addEventListener("scroll", function() { document.querySelector("nav").classList.toggle("sticky", 0 < window.scrollY) });


var home = document.getElementById("home-link");
home.addEventListener("mouseover", showNavbarHomePopup), home.addEventListener("mouseout", hideNavbarHomePopup);

var homeNavbarPopup = document.getElementById("home-menu");
homeNavbarPopup.addEventListener("mouseover", showNavbarHomePopup), homeNavbarPopup.addEventListener("mouseout", hideNavbarHomePopup);

var shop = document.getElementById("shop-link");
shop.addEventListener("mouseover", showNavbarShopPopup), shop.addEventListener("mouseout", hideNavbarShopPopup);

var shopNavbarPopup = document.getElementById("shop-menu");
shopNavbarPopup.addEventListener("mouseover", showNavbarShopPopup), shopNavbarPopup.addEventListener("mouseout", hideNavbarShopPopup);

var blog = document.getElementById("blog-link");
blog.addEventListener("mouseover", showNavbarBlogPopup), blog.addEventListener("mouseout", hideNavbarBlogPopup);

var blogNavbarPopup = document.getElementById("blog-menu");
blogNavbarPopup.addEventListener("mouseover", showNavbarBlogPopup), blogNavbarPopup.addEventListener("mouseout", hideNavbarBlogPopup);

var loginbutton = document.getElementById("reg");
loginbutton.addEventListener("click", loginBox);

var closebutton = document.getElementById("close");
 closebutton.addEventListener("click", hideLoginBox);

function showNavbarHomePopup() {
	homeNavbarPopup.classList.add("navbar-section-hover")
}

// const showNavbarHomePopup = () => {
//  return homeNavbarPopup.classList.add("navbar-section-hover");
// }

function hideNavbarHomePopup() {
	homeNavbarPopup.classList.remove("navbar-section-hover")
}

function showNavbarShopPopup() { 
	shopNavbarPopup.classList.add("navbar-section-hover")
}

function hideNavbarShopPopup() { 
	shopNavbarPopup.classList.remove("navbar-section-hover") 
}

function showNavbarBlogPopup() { 
	blogNavbarPopup.classList.add("navbar-section-hover") 
}

function hideNavbarBlogPopup() { 
	blogNavbarPopup.classList.remove("navbar-section-hover")
}

function loginBox() { 
	document.getElementById("login-box").classList.add("navbar-section-hover") 
}

function hideLoginBox() { 
	document.getElementById("login-box").classList.remove("navbar-section-hover")
} 

const counters = document.querySelectorAll(".counter"),
    speed = 200;
counters.forEach(counter => { const target = () => { var e = +counter.getAttribute("data-target"),
            count = +counter.innerText,
            increase = e / speed;
        count < e ? (counter.innerText = Math.round(count + increase), setTimeout(target, 1)) : counter.innerText = Math.round(e) };
    target() });
