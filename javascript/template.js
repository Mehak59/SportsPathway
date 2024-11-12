window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navigation');
menu.onclick=()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

