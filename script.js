// navigation enabled on button click
document
  .querySelector(".navigation__button")
  .addEventListener("click", function() {
    document.querySelectorAll(".navigation__item").forEach(item => {
      item.classList.toggle("navigation--active");
    });
  });

// footer date updating
document.querySelector("#date").innerHTML = new Date().getFullYear();

// smooth scrolling
document.querySelectorAll(".scroll").forEach(item => {
  item.addEventListener("click", function() {
    // gets class name from href and removes the #
    const className = item.getAttribute("href").split("#")[1];
    event.preventDefault();
    document.querySelector(`.${className}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  });
});
