$((function(){let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`),window.addEventListener("resize",()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)});var n=!1,t=document.querySelector(".nav-toggle-menu"),a=document.querySelector(".c-primary-nav");function r(e){return Math.floor(Math.random()*(e[1]-e[0]))+e[0]+"%"}function o(e,n,t){var a=document.createElement("span");a.classList.add("ornamental");for(i=0;i<t;i++)r=i,o=void 0,(o=document.createElement("i")).classList.add("nv-icon"),o.classList.add("wow"),o.classList.add("fadeIn"),o.setAttribute("data-wow-duration","5ms"),o.setAttribute("data-wow-delay",30*r+"ms"),o.classList.add(n),a.appendChild(o);var r,o;e.appendChild(a)}function c(){var e=document.querySelectorAll(".c-block-hero__background-video.l-aspect-ratio__9-16"),n=e.length,t=0;n&&function e(n,t,a){t&&(n(),setTimeout(()=>{e(n,t-1,a)},a))}((function(){e[t++].firstElementChild.play()}),n,600)}function s(e,n,t,a){var o=document.createElement("span");o.classList.add("ornament"),e.appendChild(o);var i=document.createElement("i");i.classList.add("nv-icon"),i.classList.add("wow"),i.classList.add("fadeIn"),i.classList.add(n),o.style.top=r(t),o.style.left=r(a),o.appendChild(i)}t.addEventListener("click",(function(e){e.preventDefault(),!1===n?(n=!0,a.classList.add("c-primary-nav--is-active"),t.classList.add("nav-toggle-menu--is-active")):(n=!1,a.classList.remove("c-primary-nav--is-active"),t.classList.remove("nav-toggle-menu--is-active"))})),$(".has-ornaments").each((function(){window.innerWidth<768?(rangeTop=[5,45],rangeLeft=[5,45],s(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[5,45],rangeLeft=[55,95],s(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft),rangeTop=[55,95],rangeLeft=[5,45],s(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[55,95],rangeLeft=[55,95],s(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft)):(rangeTop=[5,33],rangeLeft=[5,33],s(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[5,33],rangeLeft=[34,66],s(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft),rangeTop=[5,33],rangeLeft=[67,95],s(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[34,66],rangeLeft=[5,33],s(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft),rangeTop=[34,66],rangeLeft=[34,66],s(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[34,66],rangeLeft=[67,95],s(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[67,95],rangeLeft=[5,33],s(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[67,95],rangeLeft=[34,66],s(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[67,95],rangeLeft=[67,95],s(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft))})),function(){var e=document.querySelector(".c-block-hero__background-video");e&&o(e,"nv-icon--ornament_backslash",15);var n=document.querySelector(".c-block-hero__headline");n&&o(n,"nv-icon--ornament_backslash",15);var t=document.querySelector(".c-block-hero__container");t&&o(t,"nv-icon--ornament_plus",3),document.querySelectorAll(".c-card--title-highlight").forEach(e=>{o(e,"nv-icon--ornament_backslash",35)}),document.querySelectorAll(".c-card.decorated").forEach(e=>{o(e,"nv-icon--ornament_minus",8)})}(),window.onload=function(){c()},$('[data-toggle="popover"]').popover({container:"body",html:"true"}),(new WOW).init()}));