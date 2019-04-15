'use strict';

const input = document.querySelector("#number");
const btnPrueba = document.querySelector(".button-prueba");
const hintText = document.querySelector(".hint-text");
const round = document.querySelector(".intento");

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

let roundValue = 0;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function checkInput () {
    console.log(input.value);
}

function printText (text) {
    hintText.innerHTML = text;
}

function updateText () {
    if (parseInt(input.value) > randomNumber){
        if (parseInt(input.value) > 100){
            printText ('¡Debe ser menor que 100!');
        }
        printText ('Demasiado alto');
    } else if (parseInt(input.value) === randomNumber){
        printText ('¡HAS GANADO, CAMPEONA!');
    } else {
        printText ('Demasiado bajo');
    }
}

function addRound () {
    if (input.value) {
    roundValue = roundValue + 1;
    round.innerHTML = roundValue;
    }
}

function playGame () {
    checkInput();
    updateText();
    addRound();
}

btnPrueba.addEventListener("click", playGame);

function handlerEnter (event) {
    if (event.key === 'Enter') {
        playGame();
    }
}

input.addEventListener('keyup', handlerEnter);