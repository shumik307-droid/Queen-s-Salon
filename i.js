// ===============================
// QUEEN'S SALON & STUDIO
// i.js
// ===============================

// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

});


// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});


// ===============================
// FAQ Accordion
// ===============================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question=>{

    question.addEventListener("click",()=>{

        const answer = question.nextElementSibling;

        const icon = question.querySelector("span");

        document.querySelectorAll(".faq-answer").forEach(item=>{

            if(item!==answer){

                item.style.maxHeight = null;

            }

        });

        document.querySelectorAll(".faq-question span").forEach(i=>{

            if(i!==icon){

                i.innerHTML="+";

            }

        });

        if(answer.style.maxHeight){

            answer.style.maxHeight=null;

            icon.innerHTML="+";

        }

        else{

            answer.style.maxHeight=answer.scrollHeight+"px";

            icon.innerHTML="-";

        }

    });

});


// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.pageYOffset>300){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        navbar.classList.remove("show");

    });

});


// ===============================
// Active Navigation
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const reveals=document.querySelectorAll(

".service-card,.gallery-item,.team-card,.testimonial-card,.about-image,.about-content,.video-card,.contact-info,.map"

);

function reveal(){

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// Gallery Popup
// ===============================

const images=document.querySelectorAll(".gallery-item img");

const popup=document.createElement("div");

popup.id="popup";

popup.innerHTML=`

<span id="closePopup">&times;</span>

<img id="popupImage">

`;

document.body.appendChild(popup);

const popupImage=document.getElementById("popupImage");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        popup.style.display="flex";

        popupImage.src=image.src;

    });

});

document.getElementById("closePopup").onclick=()=>{

    popup.style.display="none";

};

popup.onclick=e=>{

    if(e.target===popup){

        popup.style.display="none";

    }

};


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const update=()=>{

        const target=+counter.getAttribute("data-target");

        const count=+counter.innerText;

        const increment=target/100;

        if(count<target){

            counter.innerText=Math.ceil(count+increment);

            setTimeout(update,20);

        }

        else{

            counter.innerText=target;

        }

    };

    update();

});


// ===============================
// Footer Year
// ===============================

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}


// ===============================
// Loading Animation
// ===============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

console.log("Queen's Salon Website Loaded Successfully ❤️");
