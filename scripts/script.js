const home = document.getElementById('home-link');

const homeNavbarPopup = document.getElementById('home-menu');

const shop = document.getElementById('shop-link');

const shopNavbarPopup = document.getElementById('shop-menu');

const blog = document.getElementById('blog-link');

const blogNavbarPopup = document.getElementById('blog-menu');

const loginbutton = document.getElementById('reg');

const closebutton = document.getElementById('close');

const form = document.getElementById('form');
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('sticky', window.scrollY > 0);
});
function showNavbarHomePopup() {
  homeNavbarPopup.classList.add('navbar-section-hover');
}

function hideNavbarHomePopup() {
  homeNavbarPopup.classList.remove('navbar-section-hover');
}
function showNavbarShopPopup() {
  shopNavbarPopup.classList.add('navbar-section-hover');
}
function hideNavbarShopPopup() {
  shopNavbarPopup.classList.remove('navbar-section-hover');
}
function showNavbarBlogPopup() {
  blogNavbarPopup.classList.add('navbar-section-hover');
}
function hideNavbarBlogPopup() {
  blogNavbarPopup.classList.remove('navbar-section-hover');
}
function loginBox() {
  document.getElementById('login-box').classList.add('navbar-section-hover');
}

function hideLoginBox() {
  document.getElementById('login-box').classList.remove('navbar-section-hover');
}

home.addEventListener('mouseover', showNavbarHomePopup);
home.addEventListener('mouseout', hideNavbarHomePopup);

homeNavbarPopup.addEventListener('mouseover', showNavbarHomePopup);
homeNavbarPopup.addEventListener('mouseout', hideNavbarHomePopup);

shop.addEventListener('mouseover', showNavbarShopPopup);
shop.addEventListener('mouseout', hideNavbarShopPopup);

shopNavbarPopup.addEventListener('mouseover', showNavbarShopPopup);
shopNavbarPopup.addEventListener('mouseout', hideNavbarShopPopup);

blog.addEventListener('mouseover', showNavbarBlogPopup);
blog.addEventListener('mouseout', hideNavbarBlogPopup);

blogNavbarPopup.addEventListener('mouseover', showNavbarBlogPopup);
blogNavbarPopup.addEventListener('mouseout', hideNavbarBlogPopup);

loginbutton.addEventListener('click', loginBox);

closebutton.addEventListener('click', hideLoginBox);

form.addEventListener('submit', (e) => {
  const username = document.getElementById('user-input').value;
  localStorage.setItem('firstname', username);
  const storedname = localStorage.getItem('firstname');
  document.getElementById('reg').innerHTML = `Hi ${storedname}`;
  e.preventDefault();
  document.getElementById('login-box').classList.remove('navbar-section-hover');
});

const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increase = target / speed;

    // eslint-disable-next-line no-param-reassign
    
// count < target ? (counter.innerText = Math.round(count + increase),
//     setTimeout(updateCount, 1)) : counter.innerText = Math.round(target);

    counter.innerText = (count < target) ? (Math.round(count + increase),
    setTimeout(updateCount, 1)) : Math.round(target);
  };
  updateCount();
});
