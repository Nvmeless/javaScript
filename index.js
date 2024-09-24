import LifeGame from './lifeGame.js'
import PokeGenerator from "./pokeGenerator.js"

// let lifeGame = new LifeGame(36, 9, 'board', 0)
// // let otherBoard = new LifeGame(5, 5, 'boardTest')
// // let passButton = document.getElementById("pass").addEventListener("click", lifeGame.passTurn);;
// let importButton = document.getElementById("import").addEventListener("click", lifeGame.import);;
// let turnSlider = document.getElementById("turnTime").addEventListener("change", (e, v) => {
//     lifeGame.setTurnTime(e.target.value)
// });;
// let sizeHandler = document.getElementById("setSize").addEventListener('click', () => {
//     let ySize = document.getElementById("ySize").value
//     let xSize = document.getElementById("xSize").value
//     lifeGame.setSize(xSize, ySize)
// })

let pg = new PokeGenerator();

// let interval = setInterval(() => {

//     alert("Youupi")
// }, 5000)

let obj = { toto: "tata", titi: "titi" }


let test = ({ titi, toto }) => {
    console.log(titi)
    console.log(toto)
}

test(obj, obj)
// setTimeout(() => {
//     alert("Message")
//     clearInterval(interval);
// }, 10000)
