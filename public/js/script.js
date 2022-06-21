console.log("running successfully ... ");

// fetch("http://puzzle.mead.io/puzzle").then(res => {
//   res.json().then(data => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("#address");
const errMeg = document.querySelector("#p1");
const Meg = document.querySelector("#p2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  let searchValue = search.value;
  fetch("http://localhost:3000/weather?search=" + searchValue).then(res => {
    res.json().then(data => {
      if (data.error) {
        errMeg.textContent = data.error;
        console.log(data.error);
      } else {
        Meg.textContent = JSON.stringify(data);
        console.log(data.location);
      }
    });
  });
});
