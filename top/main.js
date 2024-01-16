const rolls = [
]

let gaming = false;
let key = 0;
let end = 0;
document.querySelector("#seven").addEventListener("input",checkbutton);
document.querySelector(".button").addEventListener("click",  function(){
  key = document.getElementById('seven').value;
  key = Math.floor(key);
  console.log(key);
  gaming = true;
  thething(key);
  document.querySelector(".button").disabled = true
});

async function thething(number){
  number = Math.max(4,number);
  number = Math.min(24,number);
  console.log(number);
  while(end != number){
  let first = Math.floor(Math.random() * 6) + 1;
  let second = Math.floor(Math.random() * 6) + 1;
  let third = Math.floor(Math.random() * 6) + 1;
  let fourth = Math.floor(Math.random() * 6) + 1;
  replaceimg(first,second,third,fourth)
  end = first + second + third + fourth;
  if ((end === number)) {
    console.log(end);
    document.querySelector(".results").insertAdjacentHTML("afterbegin", 
    `<h2> You rolled ${end} </h2>`);
      document.querySelector("body").insertAdjacentHTML(
          "beforeend",
          `<dialog class="card">
            <h2 class = "text">you win!</h2>
            <button alt = "click escape to return" id="close" class="button-1" autofocus> click to return </button>
          </dialog>`
        );
      document.querySelector("dialog").showModal();
      document.getElementById("close").addEventListener("click", function () {
        this.parentElement.remove();
      document.querySelector(".results").replaceChildren();

      }); 
      gaming = false;
  } else {
      console.log(end);
      document.querySelector(".results").insertAdjacentHTML("afterbegin", 
      `<h2> You rolled ${end} </h2>`);
      await wait(1);
    }}
}

function wait(ms){
  return new Promise(resolve => {
    setTimeout(() => {resolve('')},ms);
  })
}

function checkbutton() {
  console.log(gaming);
  document.getElementById('Roll').disabled = (document.getElementById("seven").value==="" || gaming);
   }
  //Conditional statement. sets status of disabled depending on if statement is true or false.

function replaceimg(a,b,c,d){
  console.log(a,b,c,d)
  document.getElementById("1").src = `${a}.png`;
  document.getElementById("2").src = `${b}.png`;
  document.getElementById("3").src = `${c}.png`;
  document.getElementById("4").src = `${d}.png`;
}