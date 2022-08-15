const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides1 = button
      .querySelectorAll("[data-carousel]")

    slides1.forEach(slide => {
      let slides2 = slide.querySelector("[data-slides]")
      console.log(slides2)
    const activeSlide = slides2.querySelector("[data-active]")
    let newIndex = [...slides2.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides2.children.length - 1
    if (newIndex >= slides2.children.length) newIndex = 0

    slides2.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
  })
})