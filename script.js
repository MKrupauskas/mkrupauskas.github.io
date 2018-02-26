document
  .querySelector(".navigation--button")
  .addEventListener("click", function() {
    document.querySelectorAll(".navigation--item").forEach(item => {
      item.classList.toggle("navigation__active");
    });
  });
