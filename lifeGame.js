
class LifeGame {
    board = null;
    turn = 0;
    constructor(x, y, containerName) {
        this.board = new Board(x, y, containerName);
        this.board.displayBoard();
    }

    passTurn = () => {
        this.turn++

        this.board.setNeibourghs();

        this.board.applyRule((cell) => {
            let neibourghs = cell.getAliveNeibourgh()
            if (neibourghs.length < 2) {
                cell.die();
            }
            if (neibourghs.length === 3) {
                cell.born()
            }
            if (neibourghs.length > 3) {
                cell.die()
            }
        });
        // this.board.displaySave();
        this.board.refreshBoard();
    }

}

class Board {
    xSize = 0;
    ySize = 0;
    saveContainerName = "save";
    clickDown = false;
    containerName = 'board'
    board = null


    constructor(x, y, containerName = "board") {
        this.containerName = containerName;
        this.xSize = x;
        this.ySize = y;

        this.createBoard();

    }

    createBoard = () => {
        this.board = [];
        let row = [];
        for (let i = 0; i < this.ySize; i++) {
            row = [];
            for (let j = 0; j < this.xSize; j++) {

                row.push(new Cell(j, i, (Math.random() > .8), this))

            }
            this.board.push(row);
        }
    }

    exportBoard = () => {
        return {
            board: this.board,
            ySize: this.ySize,
            xSize: this.xSize
        }
    }
    getBoardExport = () => {

        console.log(this.exportBoard());
        // return JSON.stringify(this.exportBoard());
    }


    importBoard = (boardExport) => {
        this.board = boardExport.board;
    }



    getCell = (x, y) => {
        if (x >= 0 && y >= 0 && y < this.ySize && x < this.xSize) {
            return this.board[y][x];
        }
        return null
    }
    displaySave = () => {
        document.getElementById(this.saveContainerName).innerHTML(this.getBoardExport());
    }
    displayBoard = () => {
        let currentDiv = document.getElementById(this.containerName);
        currentDiv.innerHTML = "";
        let newDiv = null;
        let newContent = null;
        let newDivRow = null;
        let cell = null;
        for (let i = 0; i < this.ySize; i++) {
            newDivRow = document.createElement("div")

            newDivRow.className = "row";
            for (let j = 0; j < this.xSize; j++) {
                cell = this.getCell(j, i)
                newDiv = document.createElement("div");
                newDiv.className = cell.isAlive() ? "alive" : "dead";
                cell.setElement(newDiv);

                newDiv.addEventListener("click", this.getCell(j, i).click)

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
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i !== 0 || j !== 0) {
                    currentCell = this.getCell(x + i, y + j);
                    if (currentCell && currentCell !== null) {
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

    setNeibourghs = () => {
        this.applyRule((cell) => {
            cell.setAliveNeibourgh(this.getAliveNeibourgh(cell));
            cell.setNeibourghs(this.getNeibourgh(cell));
        })
    }


    applyRule = (callback) => {
        this.board.map((x) => {
            x.map((cell) => {
                callback(cell)
            })
        })

    }
    refreshBoard = () => {
        let cell = null;
        for (let i = 0; i < this.ySize; i++) {
            for (let j = 0; j < this.xSize; j++) {
                cell = this.getCell(j, i)

                cell.getElement().className = cell.isAlive() ? "alive" : "dead";
            }


        }
    }
}



class Cell {
    alive = false;
    elt = null;
    neibourghs = [];
    aliveNeibourgh = [];
    constructor(x, y, alive, board) {
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
    mousedown = () => {
        this.click()
    }
    click = () => {
        this.alive = !this.alive
        this.board.refreshBoard()
    }

    die = () => {
        this.alive = false;
    }

    born = () => {
        this.alive = true;
    }

    setNeibourghs = (neibourghs) => {
        this.neibourghs = neibourghs;
    }
    setAliveNeibourgh = (aliveNeibourgh) => {
        this.aliveNeibourgh = aliveNeibourgh;
    }

    getAliveNeibourgh = () => {
        return this.aliveNeibourgh;
        // return this.neibourghs.filter(neibourgh => neibourgh.isAlive())
    }

    getNeibourgh = () => {
        return this.neibourghs;
    }
}

export default LifeGame;