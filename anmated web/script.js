
gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// logo scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


gsap.from("header .logo, nav a, .account",{
    stagger : .3,
    y : 15,
    opacity : 0,
    duration : 2,
})



  gsap.from(".anim",{
    opacity : 0,
    y :20,
    duration : 2
  })
gsap.from("section h1, .para",{
    opacity : 0,
    x : -100,
    duration : 1.6,
    scrollTrigger : {
      trigger : "section",
      scroller : "main",
     
    }
})


gsap.from(".about-sec", {
  opacity : 0,
  stagger : .4,
  y : 300 ,
  duration : 2,
  scrollTrigger : {
    trigger : "section",
    scroller : "main",
  }
})

gsap.from(".page3 .left img",{
  opacity : 0,
  x : -40,
  
  duration : 1,
  scrollTrigger : {
    trigger : ".page3",
    scroller : "main",
    // pin : true
  }

})
gsap.from(".page3 .right img",{
  opacity : 0,
  x : 40,
  duration : 1,
  delay : .5,
  scrollTrigger : {
    trigger : ".page3",
    scroller : "main",
    // pin : true
  }

})

gsap.from(".page4-left img",{
  width : 0,
  opacity : 0,
  duration : 1 , 
  scrollTrigger : {
    trigger : ".page4",
    scroller : "main",
    
  }
})

gsap.from(".fu-con",{
  y : 20,
  opacity : 0,
  duration :1,
  scrollTrigger : {
    trigger : ".future",
    scroller :"main"
  }
})

Shery.textAnimate("#heading h1" , {
    
  style: 2,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});


document.querySelector('.btn').addEventListener("mouseover" , () => {
  
  gsap.to(".video video", {
    opacity : 1,
    duration : 2
  })
})
document.querySelector('.btn').addEventListener("mouseleave" , () => {
  gsap.to(".video video", {
    opacity : 0,
    duration : 2,
  })
})