//======================
// responsive navbar section js 
// ==================================
const phone_nav= document.querySelector(".phone-navbar-btn");
 const headerElem = document.querySelector(".header")

 phone_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
 })


//======================
// portfolio section js 
// ==================================

const p_btns = document.querySelector(".p-btns")
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    if(!p_btn_clicked.classList.contains("p-btn")){
        return;
    }

    p_btn.forEach((currElem) => currElem.classList.remove("p-btn-active"))

    p_btn_clicked.classList.add('p-btn-active');

    // Find the number in data  attar;
    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img_elem.forEach((currElem) => currElem.classList.add("p-img-not-active"))

    img_active.forEach((currElem) => currElem.classList.remove("p-img-not-active"))

})

// Swiper js code below >>>>>>>>>>>>>>>>

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// media query >>>>>>>>>>>>>

const myJsmedia = (widthSize) =>{
    if(widthSize.matches) {
         new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
        });

    }else{
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    }
}

const widthSize = window.matchMedia("(max-width: 790px)")
//call listener funcion at run time
myJsmedia(widthSize);
//Attach listener function on state charges
widthSize.addEventListener("change", myJsmedia);



//scroll Up button code in below >>>>>>;
const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
 
const scrollElem = document.createElement("div");
scrollElem.classList.add("scrollTop-style");
scrollElem.innerHTML = `<ion-icon name="arrow-up-outline" class= "scroll-up"></ion-icon>`
// scrollElem.innerHTML = `<ion-icon name="arrow-up-outline class= "scroll-top"></ion-icon>`
footerElem.after(scrollElem) ;

const scrollTop = ()=>{
    heroSection.scrollIntoView({behavior: "smooth"});

}
scrollElem.addEventListener("click", scrollTop);


//Numbe counter Animation;
const counterNum = document.querySelectorAll(".counter-numbers")
const speed = 500;
counterNum.forEach((currElem) => {
    const updateNum = () => {
        const targetNum = parseInt(currElem.dataset.number);
        const initialNum = parseInt(currElem.innerText)
        const incrementNum = Math.trunc(targetNum/speed);
        // console.log(incrementNum);

        if(initialNum< targetNum){
            currElem.innerText = `${initialNum + incrementNum}+`;
            setTimeout(updateNum, 10)
        }
    }
    updateNum()

})



