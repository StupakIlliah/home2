var link = document.querySelector(".login");
var poop = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = poop.querySelector("[name=login]");
var password = poop.querySelector("[name=password]");
var form = poop.querySelector("form");
var storage = localStorage.getItem("login");




link.addEventListener("click", function(event) {
event.preventDefault();
poop.classList.add("modal-content-show");
console.log("ffff");
if (storage) {
  login.value = storage;
  password.focus();
} else {
  login.focus();
}

});

close.addEventListener("click", function(event) {
event.preventDefault();
poop.classList.remove("modal-content-show");
poop.classList.remove("modal-error");
console.log("jjjj");
});

form.addEventListener("submit", function(event) {
if (!login.value || !password.value) {
event.preventDefault();
poop.classList.add("modal-error");
} else {
  localStorage.setItem("login", login.value);
}
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if  (poop.classList.contains("modal-content-show")) {
    poop.classList.remove("modal-content-show");
    console.log("+++");
}
}

});
/*если ошибка в localStorage */

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem(".login");
} catch (err) {
  isStorageSupport = false;

}
/*если ошибка в localStorage*/
