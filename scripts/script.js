window.addEventListener("scroll", function() { document.querySelector("nav").classList.toggle("sticky", 0 < window.scrollY) });

var home = document.getElementById("home-link");
home.addEventListener("mouseover", show), home.addEventListener("mouseout", hide);

var homeNavbarPopup = document.getElementById("home-menu");
homeNavbarPopup.addEventListener("mouseover", show), homeNavbarPopup.addEventListener("mouseout", hide);

var shop = document.getElementById("shop-link");
shop.addEventListener("mouseover", show1), shop.addEventListener("mouseout", hide1);

var shopNavbarPopup = document.getElementById("shop-menu");
shopNavbarPopup.addEventListener("mouseover", show1), shopNavbarPopup.addEventListener("mouseout", hide1);

var blog = document.getElementById("blog-link");
blog.addEventListener("mouseover", show2), blog.addEventListener("mouseout", hide2);

var blogNavbarPopup = document.getElementById("blog-menu");
blogNavbarPopup.addEventListener("mouseover", show2), blogNavbarPopup.addEventListener("mouseout", hide2);

var loginbutton = document.getElementById("reg");
loginbutton.addEventListener("click", login);

var closebutton = document.getElementById("close");
 closebutton.addEventListener("click", hidelog);


 function show() {homeNavbarPopup.classList.add("navbar-section-hover")}

function hide() {homeNavbarPopup.classList.remove("navbar-section-hover") }

function show1() { shopNavbarPopup.classList.add("navbar-section-hover")}

function hide1() { shopNavbarPopup.classList.remove("navbar-section-hover") }

function show2() { blogNavbarPopup.classList.add("navbar-section-hover") }

function hide2() { blogNavbarPopup.classList.remove("navbar-section-hover")}


function login() { document.getElementById("login-box").classList.add("navbar-section-hover") }

function hidelog() { document.getElementById("login-box").classList.remove("navbar-section-hover")} 


const counters = document.querySelectorAll(".counter"),
    speed = 200;
counters.forEach(o => { const d = () => { var e = +o.getAttribute("data-target"),
            n = +o.innerText,
            t = e / speed;
        n < e ? (o.innerText = Math.round(n + t), setTimeout(d, 1)) : o.innerText = Math.round(e) };
    d() });
