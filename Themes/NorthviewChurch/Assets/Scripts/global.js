//Global Scripts
$(function() { //document.ready
    
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
/*
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
*/
  
  
  var navActive = false,
      navOpen = document.querySelector('.nav-toggle-menu'),
      navListOpen = document.querySelector('.c-primary-nav');
  
  navOpen.addEventListener("click", function(event){
  	event.preventDefault();
  
    if (navActive === false) {
  	    navActive = true;
  	    navListOpen.classList.add("c-primary-nav--is-active");
  	    navOpen.classList.add("nav-toggle-menu--is-active");
  	} 
  	else {
  		 navActive = false;
  		 navListOpen.classList.remove("c-primary-nav--is-active");
  	   navOpen.classList.remove("nav-toggle-menu--is-active");
  	}
  });
  function randPercentRange(range){
    return Math.floor(Math.random() * (range[1]-range[0])) + range[0] + '%';
  }
  // Function to execute X function, Y number of times with Z of interval delay 
  function recursiveDelay(functionToCall, executionsNumber, timeoutInMilliseconds) {
      if (executionsNumber) { //exit condition
  
          functionToCall();  // external function execution
  
          setTimeout(
              () => { recursiveDelay(functionToCall, executionsNumber - 1, timeoutInMilliseconds); //recursive call
              }, timeoutInMilliseconds);
      }
  }
  
  //hero scripts
  function addOrnamentalElem(appendObject,appendIconClass,numIcons) { 
    // create a new element 
    var newSpan = document.createElement("span");
    // add the text node to the newly created div
    newSpan.classList.add("ornamental");    
    // External function to call
    let appendIcon = function(j) {
      var newIcon = document.createElement("i");
      newIcon.classList.add("nv-icon");
      newIcon.classList.add("wow");
      newIcon.classList.add("fadeIn");
      newIcon.setAttribute('data-wow-duration',"5ms")
      newIcon.setAttribute('data-wow-delay',((30 * j)) + "ms")
      newIcon.classList.add(appendIconClass);
      newSpan.appendChild(newIcon);
    }
    for (i = 0; i < numIcons; i++) {
      appendIcon(i);
    }
    // add the newly created element and its content into the DOM 
    appendObject.appendChild(newSpan);
  }
  function playHeroVideos(){
    var heroVideos = document.querySelectorAll('.c-block-hero__background-video');
    var numVids = heroVideos.length;
    var n = 0;
  
    // play [n]th video and increment [n]
    let playVideo = function() {
      //console.log(heroVideos[loop]);
      heroVideos[n++].firstElementChild.play();
    }
    
    // Initial call
    if (numVids > 1) {
      recursiveDelay(playVideo, numVids, 600);
    }
  }
  
  function addOrnament(appendObject,appendIconClass,rangeTop,rangeLeft) {      
    // create a new element 
    var newSpan = document.createElement("span");
    // add the text node to the newly created div
    newSpan.classList.add("ornament");  
    // add the newly created element and its content into the DOM 
    appendObject.appendChild(newSpan);
    var newIcon = document.createElement("i");
    newIcon.classList.add("nv-icon");
    newIcon.classList.add("wow");
    newIcon.classList.add("fadeIn");
    newIcon.classList.add(appendIconClass);
    newSpan.style.top = randPercentRange(rangeTop);
    newSpan.style.left = randPercentRange(rangeLeft);
    newSpan.appendChild(newIcon);
  }
  function addSlashes(){
    var heroVideo = document.querySelector('.c-block-hero__background-video');
    if (heroVideo) addOrnamentalElem(heroVideo,"nv-icon--ornament_backslash",15);
    var heroHeadline = document.querySelector('.c-block-hero__headline');
    if (heroHeadline) addOrnamentalElem(heroHeadline,"nv-icon--ornament_backslash",15);
    var heroContainer = document.querySelector('.c-block-hero__container');
    if (heroContainer) addOrnamentalElem(heroContainer,"nv-icon--ornament_plus",3);
    var calloutPrimary = document.querySelectorAll('.c-card--title-highlight');
    calloutPrimary.forEach(item => { 
      addOrnamentalElem(item,"nv-icon--ornament_backslash",35)
    });
    var cardOrnamental = document.querySelectorAll('.c-card.decorated');
    cardOrnamental.forEach(item => { 
      addOrnamentalElem(item,"nv-icon--ornament_minus",8)
    });
  }
  
  $('.has-ornaments').each(function(){
    var hasOrnaments = this;
    if (window.innerWidth < 768) {
      rangeTop = [5,45]; rangeLeft = [5,45];
      addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
      rangeTop = [5,45]; rangeLeft = [55,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
      rangeTop = [55,95]; rangeLeft = [5,45];
      addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
      rangeTop = [55,95]; rangeLeft = [55,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
    } else {
      rangeTop = [5,33]; rangeLeft = [5,33];
      addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
      rangeTop = [5,33]; rangeLeft = [34,66];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
      rangeTop = [5,33]; rangeLeft = [67,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
      rangeTop = [34,66]; rangeLeft = [5,33];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
      rangeTop = [34,66]; rangeLeft = [34,66];
      addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
      rangeTop = [34,66]; rangeLeft = [67,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
      rangeTop = [67,95]; rangeLeft = [5,33];
      addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
      rangeTop = [67,95]; rangeLeft = [34,66];
      addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
      rangeTop = [67,95]; rangeLeft = [67,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);        
    }
  });
  
  addSlashes();
  window.onload = function(){
    playHeroVideos()
  };

  $('[data-toggle="popover"]').popover({
    container: 'body',
    html: 'true'
  });
  new WOW().init();
  cssVars();
});