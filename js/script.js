let button = document.querySelector(".search");
let popup = document.querySelector(".find-hotel__form");
let form = document.querySelector(".find-hotel");
let checkIn = form.querySelector("[name=check-in]");
let checkOut = form.querySelector("[name=check-out]");
let adults = form.querySelector("[name=adults]");
let children = form.querySelector("[name=children]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adults");
  storage = localStorage.getItem("children");
  } catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  if (popup.classList.contains("form-show")) {
    popup.classList.toggle("bounceOutUp");
  } else {
    popup.classList.remove("bounceOutUp");
    popup.classList.toggle("form-show");
  }

  if (storage) {
    adults.value = storage;
    children.value = storage;
    }
});



form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("form-show")) {
    evt.preventDefault();
    popup.classList.remove("form-show");
    }
  }
});


