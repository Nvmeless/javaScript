class LifeGame {

    toto = 5;
    board = null;
    constructor(x,y ){
        this.board = new Board(x,y);


        this.board.displayBoard();
    }
    

}

class Board {
    xSize = 0;
    ySize = 0;
    
    board = null
    constructor(x,y){

        this.xSize = x;
        this.ySize = y;

        this.createBoard();
    }

    createBoard = () => {
        this.board = [];
        let row = [];
        for(let i = 0; i < this.ySize ; i++){
            row = [];
            for(let j = 0; j < this.xSize; j++){


                row.push(new Cell(j,i,false))

            }
            this.board.push(row);
        }
    } 
       
    getCell = (x, y) => {
        return this.board[y][x];
    }



    displayBoard = () => {
        let currentDiv = document.getElementById("board");;
        let newDiv = null;
        let newContent = null;
        let newDivRow = null;
        
        for(let i = 0; i < this.ySize ; i++){
        newDivRow = document.createElement("div")
        
        newDivRow.className =  "row";
            for(let j = 0; j < this.xSize; j++){

            newDiv = document.createElement("div");

            newContent = document.createTextNode("X");

        // add the text node to the newly created div
            newDiv.appendChild(newContent);
            newDivRow.appendChild(newDiv);

            }
        currentDiv.appendChild(newDivRow);

        
    }

    }



}


class Cell {
    alive= false;
    constructor(x,y, alive){
        this.x = x;
        this.y = y;
    }

}

export default LifeGame;