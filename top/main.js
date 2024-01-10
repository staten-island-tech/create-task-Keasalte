let end = 0;
document.querySelector(".button").addEventListener("click",  async() => {
    setTimeout(() => {
            console.log("Delayed for 1 second.");
            let first = Math.floor(Math.random() * 6) + 1;
            console.log(first);
            let second = Math.floor(Math.random() * 6) + 1;
            console.log(second);
            let third = Math.floor(Math.random() * 6) + 1;
            console.log(third);
            let fourth = Math.floor(Math.random() * 6) + 1;
            console.log(fourth);
            end = first + second + third + fourth;
            if ((end === 24)) {
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
            } else {
                console.log("pain")
                console.log(end);
                document.querySelector("body").insertAdjacentHTML("beforeend", 
                `<h2> You rolled ${end} </h2>`);
            }
        }, 1000);
});
