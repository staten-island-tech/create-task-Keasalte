const images = [
  {
    name:"roll",
    imgurl:"diceroll.gif",
  },
  {
    name: "one",
    imgurl:"1.png",
  } ,
  {
    name: "two",
    imgurl:"2.png",
  } ,
  {
    name: "three",
    imgurl:"3.png",
  } ,
  {
    name: "four",
    imgurl:"4.png",
  } ,
  {
    name: "five",
    imgurl:"5.png",
  } ,
  {
    name: "six",
    imgurl:"6.png",
  } ,
]


let key = 0;
let end = 0;
document.querySelector("#seven").addEventListener("input",checkbutton);
document.querySelector(".button").addEventListener("click",  function(){
  key = document.getElementById('seven').value;
  key = Math.floor(key);
  console.log(key);
thething(key);
});

async function thething(number){
  while(end != number){
  let first = Math.floor(Math.random() * 6) + 1;
  let second = Math.floor(Math.random() * 6) + 1;
  let third = Math.floor(Math.random() * 6) + 1;
  let fourth = Math.floor(Math.random() * 6) + 1;
  end = first + second + third + fourth;
  if ((end === number)) {
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
        }); 
        await wait(1000);
  } else {
      console.log(end);
      document.querySelector("body").insertAdjacentHTML("beforeend", 
      `<h2> You rolled ${end} </h2>`);
      await wait(1000);
    }}
}

function wait(ms){
  return new Promise(resolve => {
    setTimeout(() => {resolve('')},ms);
  })
}

function replaceimg(){

}

function checkbutton() {
  document.getElementById('Roll').disabled = (document.getElementById("seven").value==="");
   }
  //Conditional statement. sets status of disabled depending on if statement is true or false.