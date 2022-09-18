gsap.defaults({ duration: 1.5, })

let timeline = gsap.timeline();

timeline.to("#box1", {yPercent: -100},0);
timeline.to("#box2", {yPercent: 100},0);


timeline.from("#teaserInfo", {duration:0.5, y:100, opacity:0});
timeline.to("#teaserTitle", { y: -20, ease: "power4.out" , yoyo: true, yoyoEase: "bounce", repeat: 1, });

timeline.from("#navigation li", {delay: 1, duration: 0.5, y: -20, opacity: 0, stagger: 0.2});



