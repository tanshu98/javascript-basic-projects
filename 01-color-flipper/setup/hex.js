const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Hex Color - It has 6 values and also we include # symbol..
const button = document.querySelector('#btn');
const color = document.querySelector('.color');

button.addEventListener('click', function() {
    let hexColor = `#`;
    for(let i = 0; i< 6; i++) {
        hexColor += hex[getRandomNumber()]; // Now we want to generate this index value randomly
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
