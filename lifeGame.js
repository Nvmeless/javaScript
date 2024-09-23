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
            
                row.push(new Cell(j,i,(Math.random() > .8), this))

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
        let cell = null;
        for(let i = 0; i < this.ySize ; i++){
        newDivRow = document.createElement("div")
        
        newDivRow.className =  "row";
            for(let j = 0; j < this.xSize; j++){
            cell = this.getCell(j,i)
            newDiv = document.createElement("div");
            newDiv.className = cell.isAlive() ? "dead" : "alive";
            cell.setElement(newDiv);
            newContent = document.createTextNode(cell.isAlive() ? 'X' : "O");
        // add the text node to the newly created div
            newDiv.appendChild(newContent);
            newDiv.addEventListener("click", this.getCell(j,i).click)
            
            
            // newDiv.className = "case";
            newDivRow.appendChild(newDiv);

            }
        currentDiv.appendChild(newDivRow);

        
    }

    }

refreshBoard = () => {
        let currentDiv = document.getElementById("board");;
        let cell = null;
        for(let i = 0; i < this.ySize ; i++){
            for(let j = 0; j < this.xSize; j++){
        
            cell = this.getCell(j,i)
            cell.getElement().className = cell.isAlive() ? "dead" : "alive";
            }


            }

        
    }

    }




class Cell {
    alive= false;
    elt = null;
    constructor(x,y, alive,board){
        this.x = x;
        this.y = y;
        this.alive = alive;
        this.board = board;
    }
    setElement = (elt) => {
        this.elt = elt
        
    }
     getElement = () => {
        return this.elt
        
    }
    isAlive = () => {
        return this.alive;
    }
    click = () => {
        this.alive = !this.alive
        this.board.refreshBoard()
    }
}

export default LifeGame;