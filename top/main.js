
const Dominic = {
  clear: document.querySelector(".clear"),
  med: document.querySelector(".median"),
  mean: document.querySelector(".mean"),
  mod:document.querySelector(".mode"),
}
let rolls = []

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
  rolls = [];
})

Dominic.med.addEventListener("click", function(){
  if (rolls.length === 0) {
  errorstuff();
}
else{
const median = sortMed(rolls);
rolls.push(median);
gaming = true;
document.getElementById("rolling").innerText = `Current selected number: ${median}.`
thething(median);
document.querySelector(".button").disabled = true
}
})

Dominic.mean.addEventListener("click", function(){
  if (rolls.length === 0) {
  errorstuff();
}
else{
const mean = sortMean(rolls);
rolls.push(mean);
gaming = true;
document.getElementById("rolling").innerText = `Current selected number: ${mean}.`
thething(mean);
document.querySelector(".button").disabled = true
}
})

Dominic.mod.addEventListener("click", function(){
  if (rolls.length === 0) {
  errorstuff();
}
else{
const mode = sortMod(rolls);
rolls.push(mode);
gaming = true;
document.getElementById("rolling").innerText = `Current selected number: ${mode}.`
thething(mode);
document.querySelector(".button").disabled = true
}
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
            <button alt = "click to return" id="close" class="button-1" autofocus> click to return </button>
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
      addhistory();
  } else {
      console.log(end);
      document.querySelector(".results").insertAdjacentHTML("afterbegin", 
      `<h2> You rolled ${end} </h2>`);
      gaming = false;
      await wait(100);
    }}
    end = 0;
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

function addhistory(){
  console.log(rolls)
  document.querySelector(".previous2").innerHTML ='';
  for(let i = 0; i < rolls.length; i++){
    document.querySelector(".previous2").insertAdjacentHTML("afterbegin", 
    `<h2>${rolls[i]}</h2>`);
  }
}

function sortMed(numbers) {
  const sorted = Array.from(numbers).sort((a, b) => a - b); //sort ascending
  const middle = Math.floor(sorted.length / 2); 

  if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

function sortMean(numbers){
const total = numbers.reduce((a, b) => a + b, 0)
return Math.floor(total / numbers.length)
}

function sortMod(numbers){
  const a = numbers.slice().sort((x, y) => x - y);

  let bestStreak = 1;
  let Highest = a[0];
  let currentStreak = 1;
  let Current = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i-1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        Highest = Current;
      }
      currentStreak = 0;
      Current = a[i];
    }
    currentStreak++;
  }
  return currentStreak > bestStreak ? Current : Highest;
};

function wait(ms){
  return new Promise(resolve => {
    setTimeout(() => {resolve('')},ms);
  })
} 

function errorstuff(){
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `<dialog class="card">
      <h2 class = "text">There is no history!</h2>
      <button alt = "click to return" id="close" class="button-1" autofocus> click to return </button>
    </dialog>`
  );
  document.getElementById("close").addEventListener("click", function () {
    this.parentElement.remove();})
  document.querySelector("dialog").showModal();
  document.querySelector("dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
    }
}
)
}