const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => { /*goes to next image*/
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
/*loops the images*/
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1 
    if (newIndex >= slides.children.length) newIndex = 0
/*removes previous image*/
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})