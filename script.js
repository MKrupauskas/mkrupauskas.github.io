document
  .querySelector(".navigation__button")
  .addEventListener("click", function() {
    document.querySelectorAll(".navigation__item").forEach(item => {
      item.classList.toggle("navigation--active");
    });
  });
