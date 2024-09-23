class LifeGame {

    toto = 5;
    board = null;
    turn = 0;
    constructor(x,y ){
        this.board = new Board(x,y);


        this.board.displayBoard();
        //  this.board.applyRule((cell, neibourghs) => {

        //             console.log(cell, neibourghs)
        // });
    }




    
    passTurn = () => {
        this.turn++
        this.board.applyRule((cell, neibourghs) => {

                    console.log(cell, neibourghs)
        });
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
            
                row.push(new Cell(j,i,(Math.random() > 1), this))

            }
            this.board.push(row);
        }
    } 
       
    getCell = (x, y) => {
        if(x >= 0 && y >= 0 && y < this.ySize && x < this.xSize ){
            return this.board[y][x];
        }
        return null
    }



    displayBoard = () => {
        let currentDiv = document.getElementById("board");
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
            // newContent = document.createTextNode(cell.isAlive() ? 'X' : "O");
        // add the text node to the newly created div
            // newDiv.appendChild(newContent);
            newDiv.addEventListener("click", this.getCell(j,i).click)
            
            
            // newDiv.className = "case";
            newDivRow.appendChild(newDiv);

            }
        currentDiv.appendChild(newDivRow);

        
    }



    }
    //Function Get AllVoisin (Recupere les cases voisine d'une case x,y)
    getNeibourgh = (cell) => {
        // cell.x, cell.y
        let x = cell.x;
        let y = cell.y;
        let cells = []; 
        let currentCell;
        for(let i = -1; i <=1 ; i++){
        for(let j = -1; j <=1 ; j++){
            if(i !== 0 || j !==0){
                currentCell = this.getCell(x + i,y + j);
                if(currentCell && currentCell !== null){
                    cells.push(currentCell);
                }
            }
        }
       
        }
        return cells
    }
    //Function qui verifie si la case doit etre vivante en fonction de ses 8 voisins

    getAliveNeibourgh = (cell) => {
        // console.log(this.getNeibourgh(cell));
        let neibourghs = this.getNeibourgh(cell);
        return neibourghs.filter((neibourgh) => {
            return neibourgh.isAlive();
        });
    }
    
    applyRule = (callback) => {
        this.board.map((x) =>{
            x.map((cell) =>{
                callback(cell,this.getAliveNeibourgh(cell))
            })
        })
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