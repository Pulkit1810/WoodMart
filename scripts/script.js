const home = document.getElementById("home-link");

const homeNavbarPopup = document.getElementById("home-menu");

const shop = document.getElementById("shop-link");

const shopNavbarPopup = document.getElementById("shop-menu");

const blog = document.getElementById("blog-link");

const blogNavbarPopup = document.getElementById("blog-menu");

const loginbutton = document.getElementById("reg");

const closebutton = document.getElementById("close");

const form = document.getElementById("form");
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("sticky", window.scrollY > 0);
});
function showNavbarHomePopup() {
  homeNavbarPopup.classList.add("navbar-section-hover");
}

function hideNavbarHomePopup() {
  homeNavbarPopup.classList.remove("navbar-section-hover");
}
function showNavbarShopPopup() {
  shopNavbarPopup.classList.add("navbar-section-hover");
}
function hideNavbarShopPopup() {
  shopNavbarPopup.classList.remove("navbar-section-hover");
}
function showNavbarBlogPopup() {
  blogNavbarPopup.classList.add("navbar-section-hover");
}
function hideNavbarBlogPopup() {
  blogNavbarPopup.classList.remove("navbar-section-hover");
}
function loginBox() {
  document.getElementById("login-box").classList.add("navbar-section-hover");
}

function hideLoginBox() {
  document.getElementById("login-box").classList.remove("navbar-section-hover");
}

home.addEventListener("mouseover", showNavbarHomePopup);
home.addEventListener("mouseout", hideNavbarHomePopup);

homeNavbarPopup.addEventListener("mouseover", showNavbarHomePopup);
homeNavbarPopup.addEventListener("mouseout", hideNavbarHomePopup);

shop.addEventListener("mouseover", showNavbarShopPopup);
shop.addEventListener("mouseout", hideNavbarShopPopup);

shopNavbarPopup.addEventListener("mouseover", showNavbarShopPopup);
shopNavbarPopup.addEventListener("mouseout", hideNavbarShopPopup);

blog.addEventListener("mouseover", showNavbarBlogPopup);
blog.addEventListener("mouseout", hideNavbarBlogPopup);

blogNavbarPopup.addEventListener("mouseover", showNavbarBlogPopup);
blogNavbarPopup.addEventListener("mouseout", hideNavbarBlogPopup);

loginbutton.addEventListener("click", loginBox);

closebutton.addEventListener("click", hideLoginBox);

form.addEventListener("submit", (e) => {
  const username = document.getElementById("user-input").value;
  localStorage.setItem("firstname", username);
  const storedname = localStorage.getItem("firstname");
  document.getElementById("reg").innerHTML = `Hi ${storedname}`;
  e.preventDefault();
  document.getElementById("login-box").classList.remove("navbar-section-hover");
});

const counters = document.querySelectorAll(".counter");
const speed = 200;
counters.forEach((counter) => {
  const counterTracker = counter;
  const updateCount = () => {
    const target = +counterTracker.getAttribute("data-target");
    const count = +counterTracker.innerText;
    const increase = target / speed;

    // eslint-disable-next-line no-param-reassign
    // count < target ? (counter.innerText = Math.round(count + increase),
    //     setTimeout(updateCount, 1)) : counter.innerText = Math.round(target);

    counterTracker.innerText =
      count < target
        ? (Math.round(count + increase), setTimeout(updateCount, 1))
        : Math.round(target);
  };
  updateCount();
});

var call_showPosition = document.getElementById("getlocation").addEventListener("click",showPosition);

function showPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap, showError);
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

// Define callback function for successful attempt

function showMap(position) {
  // Get location data

  lat = position.coords.latitude;

  long = position.coords.longitude;

  var latlong = new google.maps.LatLng(lat, long);

  var myOptions = {
    center: latlong,

    zoom: 16,

    mapTypeControl: true,

    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL,
    },
  };

  var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);

  var marker = new google.maps.Marker({
    position: latlong,
    map: map,
    title: "You are here!",
  });
}

// Define callback function for failed attempt

function showError(error) {
  if (error.code == 1) {
    result.innerHTML =
      "You've decided not to share your position, but it's OK. We won't ask you again.";
  } else if (error.code == 2) {
    result.innerHTML =
      "The network is down or the positioning service can't be reached.";
  } else if (error.code == 3) {
    result.innerHTML =
      "The attempt timed out before it could get the location data.";
  } else {
    result.innerHTML = "Geolocation failed due to unknown error.";
  }
}
