// navigation enabled on button click
document
  .querySelector(".navigation__button")
  .addEventListener("click", function () {
    document.querySelectorAll(".navigation__item").forEach(item => {
      item.classList.toggle("navigation--active");
    });
  });

// footer date updating
document.querySelector("#date").innerHTML = new Date().getFullYear();

// smooth scrolling
document.querySelectorAll(".scroll").forEach(item => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    // gets class name from href and removes the #
    const className = item.getAttribute("href").split("#")[1];

    document.querySelector(`.${className}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceworker.js", { scope: "./" })
    .then(function (registration) {
      console.info("Registered Service Worker", registration);
    })
    .catch(function (err) {
      console.error("Service Worker Failed to Register", err);
    });
}
