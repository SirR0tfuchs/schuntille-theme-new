const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#oeffnungszeiten',
        start: '35% 85%',
        scrub: false,
        markers: true,
    }
})

tl.to("#oeffnungszeiten", {
    x: 2000,
    duration: 0.7,
})

tl.to("#angebot", {
    x: 2000,
    duration: 0.7,
})

tl.to("#veranstaltungen", {
    x: 2000,
    duration: 0.7,
})

tl.to("#faq", {
    x: 2000,
    duration: 0.7,
})

