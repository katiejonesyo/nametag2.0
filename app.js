const nameTag = document.getElementById('name');
const userInput = document.getElementById('text-input');
const userButton = document.getElementById('name-change');
const pinkButton = document.getElementById('pink');
const blueButton = document.getElementById('blue');
const blackButton = document.getElementById('black');



userButton.addEventListener('click', () => {
    const myInput = userInput.value;
    console.log(myInput);
    nameTag.textContent = myInput;

} )

pinkButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="pink";

} )
blueButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="blue";

} )
blackButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="black";

} )

