// document.addEventListener("DOMContentLoaded", function () {
//   console.log("The DOM has loaded");
//   const element = (document.getElementById("text").innerHTML =
//     "This is really cool!");
//   console.log(element);
// });
// console.log("testing");

document.addEventListener("DOMContentLoaded", function () {
  let newText = document.getElementById("text");
  newText.textContent = "This is really cool!";
});
