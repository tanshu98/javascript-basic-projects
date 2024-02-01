// set Intial Value
let count = 0;
// Select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns); // here we get a node list..
// For looping we can use for each loop

// So basic idea is..we are selecting every button..and then applying for each loop..for getting the data of each button

btns.forEach((btn) => {
  // console.log(btn);
  // Now we can add a event listner to each individual button..
  btn.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if (e.target.classList[1] === "decrease") {
      count--;
    } else if (e.target.classList[1] === "increase") {
      count++;
    } else {
      count = 0;
    }
    // if(count > 0) {
    //     value.style.color = 'green';
    // }
    count > 0
      ? (value.style.color = "green")
      : count < 0
      ? (value.style.color = "red")
      : (value.style.color = "black");
    value.innerHTML = count;
  });
});
