let tl = gsap.timeline();


tl.from("header .logo",{
    x : -60,
    duration : .5,
    opacity : 0,

   
   
})

tl.from("nav a, .account a,.account button ",{
    y : -60,
    duration : .4,

    opacity : 0,
    stagger : 0.4
})

tl.from(".left h2",{
    x : -50,
    duration:.4,
    opacity : 0,
    stagger : 0.4
})
tl.from(".right, .main .left h2 img ",{
    scale: 0,
    duration:1,
    opacity : 0,
    stagger : 0.4
})

gsap.from("section .sec-left .vid div h3, .sec-left .vid button ,.sec-left  .skills button",{
    x : -50,
    duration:.4,
    opacity : 0,
    stagger : 0.4,
    scrollTrigger :{
        trigger : ".sec-left",
        scroller : "body",
       
        
    }  


})

gsap.from("#section .sec-right img",{
    scale: 0,
    duration:1,
    opacity : 0,
    stagger : 0.1,
    scrollTrigger: {
        trigger : ".sec-right",
        scroller : "body",
        

    }
})


