const nameTag = document.getElementById('name');
const userInput = document.getElementById('text-input');
const userButton = document.getElementById('name-change');


userButton.addEventListener('click', () => {
    const myInput = userInput.value;
    console.log(myInput);
    nameTag.textContent = myInput;

} )