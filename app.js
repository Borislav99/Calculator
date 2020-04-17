let form = document.querySelector('.form');
let input = document.querySelector("#input");
form.addEventListener('submit', event=>{
 event.preventDefault();
 let value = input.value;
 console.log(typeof value);
 
})