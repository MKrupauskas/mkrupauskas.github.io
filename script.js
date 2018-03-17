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
document.querySelectorAll(".navigation__item").forEach(item => {
  item.addEventListener("click", function() {
    const className = item.childNodes[1].innerHTML.toLowerCase();
    if (className === "blog") return;
    event.preventDefault();
    document.querySelector(`.${className}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  });
});
