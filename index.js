import LifeGame from './lifeGame.js'


let lifeGame = new LifeGame(36, 9, 'board', 0)
// let otherBoard = new LifeGame(5, 5, 'boardTest')
// let passButton = document.getElementById("pass").addEventListener("click", lifeGame.passTurn);;
let importButton = document.getElementById("import").addEventListener("click", lifeGame.import);;
let turnSlider = document.getElementById("turnTime").addEventListener("change", (e, v) => {
    lifeGame.setTurnTime(e.target.value)
});;
let sizeHandler = document.getElementById("setSize").addEventListener('click', () => {
    let ySize = document.getElementById("ySize").value
    let xSize = document.getElementById("xSize").value
    lifeGame.setSize(xSize, ySize)
})
