const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
// const toTop = document.querySelector(".to-top");

// navbar burger //
burger.addEventListener('click', function(){
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
});

// accordion
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

// back to top//
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })