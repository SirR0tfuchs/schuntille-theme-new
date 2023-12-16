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

// above is needed

let tl = gsap.timeline({repeat: -1})

tl.from("#oeffnungszeiten", {
    opacity: 0,
})

tl.to("#oeffnungszeiten", {
    opacity: 0,
})