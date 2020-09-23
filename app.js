const nameTag = document.getElementById('name');
const userInput = document.getElementById('text-input');
const userButton = document.getElementById('name-change');
const pinkButton = document.getElementById('pink');
const blueButton = document.getElementById('blue');
const purpleButton = document.getElementById('purple');



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
purpleButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="purple";

} )

