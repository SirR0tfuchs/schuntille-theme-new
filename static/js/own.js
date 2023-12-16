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

document.addEventListener("DOMContentLoaded", function(event) {

  let display_elements = document.getElementsByClassName("displayElement");
  console.log(display_elements);
  Array.from(display_elements).forEach( (element) => {
  gsap.timeline({
  scrollTrigger: {
    trigger: element,
    pin: true,
    start: "-30% center",
    end: "500% 0",
    scrub: 0,
    markers: false,
    }
  })
  .to(element, {
    opacity: 1,
    y: -250,
    duration: 0.5
  })
  .to(element, {
    duration: 0.5,
  })
  .to(element, {
    opacity: 0,
    duration: 0.3
  }, 0.9);
  });
  })