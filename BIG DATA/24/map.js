var mapOpen = document.querySelector(".js-open-map");
var mapPoops = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-content-close");


mapOpen.addEventListener("click", function(event) {
event.preventDefault();
mapPoops.classList.add("modal-content-show");
console.log("sas");
});

mapClose.addEventListener("click", function(event) {
event.preventDefault();
mapPoops.classList.remove("modal-content-show");
console.log("100");
});



window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if  (mapPoops.classList.contains("modal-content-show")) {
    mapPoops.classList.remove("modal-content-show");
    console.log("500");
}
}
});
