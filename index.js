function smoothScroll(target,duration){
  let a = document.querySelector(target);
  let targetPostion = a.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPostion - startPosition;
  let startTime = null;
}

smoothScroll(".section2",1000);