// var mapClicker = document.querySelector(".map");
// var body = document.querySelector("body"); // NEW

// mapClicker.addEventListener("click", show);

// function show(e) {
//   body.classList.toggle("showme"); // NEW
//   e.preventDefault();
// }

// document.addEventListener("click", show);

// function show(e) {
//   console.log(e.target);
//   // 'event.target' is the clicked element
//   e.preventDefault();
// }

// document.addEventListener("click", handleClicks);

// function handleClicks(e) {
//   console.log(e.target);
//   if (e.target.matches(".map")) {
//     document.querySelector("body").classList.toggle("showme");
//     e.preventDefault();
//   }
// }

// document.addEventListener("click", handleClicks);
// var body = document.querySelector("body");

// function handleClicks(e) {
//   if (e.target.matches(".map")) {
//     body.classList.add("showme");
//     e.preventDefault();
//   } else {
//     body.classList.remove("showme");
//   }
// }

document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    document.querySelector("body").classList.toggle("showme");
    e.preventDefault();
  } else {
    document.querySelector("body").classList.remove("showme");
  }
}
