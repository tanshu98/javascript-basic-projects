const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // This has 3 items

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // Get random no between 0 - 3
    let randomNumber = getRandomNumber() ;
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber]
})

// Function for getting randomNumber

function getRandomNumber() {
    return Math.floor(Math.random()* colors.length )
}