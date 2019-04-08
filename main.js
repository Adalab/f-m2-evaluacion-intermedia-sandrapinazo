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
    if (input.value.parseInt > randomNumber){
        hintText.innerHTML=`demasiado alto`;
    } else if (input.balue < randomNumber){
        hintText.innerHTML=`demasiado bajo`;
    } else {
        hintText.innerHTML="¡HAS GANADO, CAMPEONA!";
    }
}

function addRound () {
    roundValue = roundValue + 1;
}

function playGame () {
    checkInput();
    updateText();
    addRound();
}
btnPrueba.addEventListener("click", playGame);