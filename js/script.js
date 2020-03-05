let button = document.querySelector(".search");
let popup = document.querySelector(".find-hotel__form");

button.addEventListener("click", function (evt) {
  console.log('click')
  popup.classList.toggle("form-show");
});

