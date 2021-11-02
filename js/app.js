// javascript code for the scroll up icon
const scrollup = document.querySelector("#scroll-up");

// javascript scroll up functionality
scrollup.addEventListener("click", () => 
{
   window.scrollTo({
       top: 0,
       left:0,
       behavior: "smooth",
   });
}
);

// javascript code for the menu item

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// select nav links
const navlink = document.querySelectorAll(".nav-link");

// hamburger menu function
burger.addEventListener("click",() => 
{
   ul.classList.toggle("show");
}

);

// close hamburger menu when a link is clicked
navlink.forEach((link) => {
    link.addEventListener("click",() =>{
        ul.classList.remove("show");
    })



});