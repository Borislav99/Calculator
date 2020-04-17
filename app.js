(function () {
 //varijable
  let btns = document.querySelectorAll(".btn");
  let deleteC = document.querySelector(".C");
  let equal = document.querySelector(".equal");
  let input = document.querySelector("#input");
  //eventi
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      let number = event.target.dataset.number;
      input.value += number;
    });
  });
  equal.addEventListener("click", (event) => {
    let total = eval(input.value);
    if (input.value === "") {
      alert("Please enter valid values");
    } else {
      input.value = total;
    }
  });
  deleteC.addEventListener("click", () => {
    input.value = "";
  });
})();
