"use strict";
const input = document.querySelector("#number");
const btnPrueba = document.querySelector(".button-prueba");
const randomNumber = getRandomNumber(100);
const hintText = document.querySelector(".hint-text");
const round = document.querySelector(".intento");
let roundValue = 0;
console.log(input);
console.log(btnPrueba);
console.log(randomNumber);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function checkInput () {
    console.log(input.value);
    console.log("click");
}

function updateText () {
    if (parseInt(input.value) > randomNumber){
        hintText.innerHTML=`demasiado alto`;
    } else if (parseInt(input.value) === randomNumber){
        hintText.innerHTML="¡HAS GANADO, CAMPEONA!";
    } else {
        hintText.innerHTML=`demasiado bajo`;
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