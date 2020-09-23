const nameTag = document.getElementById('name');
const userInput = document.getElementById('text-input');
const userButton = document.getElementById('name-change');
const pinkButton = document.getElementById('pink');
const blueButton = document.getElementById('blue');
const grayButton = document.getElementById('gray');



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
grayButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="gray";
} )

