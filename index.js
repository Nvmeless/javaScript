import LifeGame from './lifeGame.js'


let lifeGame = new LifeGame(5, 5, 'board')
// let otherBoard = new LifeGame(5, 5, 'boardTest')
let passButton = document.getElementById("pass").addEventListener("click", lifeGame.passTurn);;
