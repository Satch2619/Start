
gsap.to("#box1", { yPercent: -100});
gsap.to("#box2", { yPercent: 100});

gsap.from("#navigation li", {delay: 1, duration: 0.5, y: -20, opacity: 0, stagger: 0.2});