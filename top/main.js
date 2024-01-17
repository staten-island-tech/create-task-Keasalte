
const Dominic = {
  clear: document.querySelector(".clear"),
  med: document.querySelector(".median"),
  mean: document.querySelector(".mean"),
  mod:document.querySelector(".mode"),
}
const rolls = []

let gaming = false;
let key = 0;
let end = 0;

document.querySelector("#seven").addEventListener("input",checkbutton);
document.querySelector(".button").addEventListener("click",  function(){
  key = document.getElementById('seven').value;
  key = Math.floor(key);
  console.log(key);
  key = Math.max(4,key);
  key = Math.min(24,key);
  rolls.push(key);
  gaming = true;
  document.getElementById("rolling").innerText = `Current selected number: ${key}.`
  thething(key);
  document.querySelector(".button").disabled = true
});

Dominic.clear.addEventListener("click", function(){
  document.querySelector(".previous2").innerText = '';
})

async function thething(number){
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
      document.querySelector("dialog").addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
        }
    });
      document.getElementById("close").addEventListener("click", function () {
        this.parentElement.remove();
      document.querySelector(".results").replaceChildren();

      }); 
      gaming = false;
      removeitall();
      addhistory();
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

function removeitall(){
  document.querySelector(".previous2").innerHTML ='';
}

function addhistory(){
  for(let i; i < rolls.length; i++){
    document.querySelector(".previous2").insertAdjacentHTML("afterbegin", 
    `${rolls[i]}`);
  }
}
