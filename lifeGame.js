var ldopgj
class LifeGame {
    board = null;
    turn = 0;
    turnTime = 50
    clock = null;
    constructor(x, y, containerName) {
        this.board = new Board(x, y, containerName);
        this.board.displayBoard();
        this.play()
    }
    play = () => {
        this.pause();
        this.clock = setInterval(this.passTurn, this.turnTime)
    }
    pause = () => {
        if (this.clock !== null) {
            clearInterval(this.clock);
        }
    }
    setTurnTime = (turnTime) => {
        this.turnTime = turnTime;
        this.play();
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
        this.board.displaySave();
        this.board.refreshBoard();
    }

    import = (e) => {
        console.log(e)
        this.board.importFromInput('{"board":[[{"x":0,"y":0,"alive":false},{"x":1,"y":0,"alive":false},{"x":2,"y":0,"alive":false},{"x":3,"y":0,"alive":false},{"x":4,"y":0,"alive":false},{"x":5,"y":0,"alive":false},{"x":6,"y":0,"alive":false},{"x":7,"y":0,"alive":false},{"x":8,"y":0,"alive":false},{"x":9,"y":0,"alive":false},{"x":10,"y":0,"alive":false},{"x":11,"y":0,"alive":false},{"x":12,"y":0,"alive":false},{"x":13,"y":0,"alive":false},{"x":14,"y":0,"alive":false},{"x":15,"y":0,"alive":false},{"x":16,"y":0,"alive":false},{"x":17,"y":0,"alive":false},{"x":18,"y":0,"alive":false},{"x":19,"y":0,"alive":false},{"x":20,"y":0,"alive":false},{"x":21,"y":0,"alive":false},{"x":22,"y":0,"alive":false},{"x":23,"y":0,"alive":false},{"x":24,"y":0,"alive":true},{"x":25,"y":0,"alive":false},{"x":26,"y":0,"alive":false},{"x":27,"y":0,"alive":false},{"x":28,"y":0,"alive":false},{"x":29,"y":0,"alive":false},{"x":30,"y":0,"alive":false},{"x":31,"y":0,"alive":false},{"x":32,"y":0,"alive":false},{"x":33,"y":0,"alive":false},{"x":34,"y":0,"alive":false},{"x":35,"y":0,"alive":false}],[{"x":0,"y":1,"alive":false},{"x":1,"y":1,"alive":false},{"x":2,"y":1,"alive":false},{"x":3,"y":1,"alive":false},{"x":4,"y":1,"alive":false},{"x":5,"y":1,"alive":false},{"x":6,"y":1,"alive":false},{"x":7,"y":1,"alive":false},{"x":8,"y":1,"alive":false},{"x":9,"y":1,"alive":false},{"x":10,"y":1,"alive":false},{"x":11,"y":1,"alive":false},{"x":12,"y":1,"alive":false},{"x":13,"y":1,"alive":false},{"x":14,"y":1,"alive":false},{"x":15,"y":1,"alive":false},{"x":16,"y":1,"alive":false},{"x":17,"y":1,"alive":false},{"x":18,"y":1,"alive":false},{"x":19,"y":1,"alive":false},{"x":20,"y":1,"alive":false},{"x":21,"y":1,"alive":false},{"x":22,"y":1,"alive":true},{"x":23,"y":1,"alive":false},{"x":24,"y":1,"alive":true},{"x":25,"y":1,"alive":false},{"x":26,"y":1,"alive":false},{"x":27,"y":1,"alive":false},{"x":28,"y":1,"alive":false},{"x":29,"y":1,"alive":false},{"x":30,"y":1,"alive":false},{"x":31,"y":1,"alive":false},{"x":32,"y":1,"alive":false},{"x":33,"y":1,"alive":false},{"x":34,"y":1,"alive":false},{"x":35,"y":1,"alive":false}],[{"x":0,"y":2,"alive":false},{"x":1,"y":2,"alive":false},{"x":2,"y":2,"alive":false},{"x":3,"y":2,"alive":false},{"x":4,"y":2,"alive":false},{"x":5,"y":2,"alive":false},{"x":6,"y":2,"alive":false},{"x":7,"y":2,"alive":false},{"x":8,"y":2,"alive":false},{"x":9,"y":2,"alive":false},{"x":10,"y":2,"alive":false},{"x":11,"y":2,"alive":false},{"x":12,"y":2,"alive":true},{"x":13,"y":2,"alive":true},{"x":14,"y":2,"alive":false},{"x":15,"y":2,"alive":false},{"x":16,"y":2,"alive":false},{"x":17,"y":2,"alive":false},{"x":18,"y":2,"alive":false},{"x":19,"y":2,"alive":false},{"x":20,"y":2,"alive":true},{"x":21,"y":2,"alive":true},{"x":22,"y":2,"alive":false},{"x":23,"y":2,"alive":false},{"x":24,"y":2,"alive":false},{"x":25,"y":2,"alive":false},{"x":26,"y":2,"alive":false},{"x":27,"y":2,"alive":false},{"x":28,"y":2,"alive":false},{"x":29,"y":2,"alive":false},{"x":30,"y":2,"alive":false},{"x":31,"y":2,"alive":false},{"x":32,"y":2,"alive":false},{"x":33,"y":2,"alive":false},{"x":34,"y":2,"alive":true},{"x":35,"y":2,"alive":true}],[{"x":0,"y":3,"alive":false},{"x":1,"y":3,"alive":false},{"x":2,"y":3,"alive":false},{"x":3,"y":3,"alive":false},{"x":4,"y":3,"alive":false},{"x":5,"y":3,"alive":false},{"x":6,"y":3,"alive":false},{"x":7,"y":3,"alive":false},{"x":8,"y":3,"alive":false},{"x":9,"y":3,"alive":false},{"x":10,"y":3,"alive":false},{"x":11,"y":3,"alive":true},{"x":12,"y":3,"alive":false},{"x":13,"y":3,"alive":false},{"x":14,"y":3,"alive":false},{"x":15,"y":3,"alive":true},{"x":16,"y":3,"alive":false},{"x":17,"y":3,"alive":false},{"x":18,"y":3,"alive":false},{"x":19,"y":3,"alive":false},{"x":20,"y":3,"alive":true},{"x":21,"y":3,"alive":true},{"x":22,"y":3,"alive":false},{"x":23,"y":3,"alive":false},{"x":24,"y":3,"alive":false},{"x":25,"y":3,"alive":false},{"x":26,"y":3,"alive":false},{"x":27,"y":3,"alive":false},{"x":28,"y":3,"alive":false},{"x":29,"y":3,"alive":false},{"x":30,"y":3,"alive":false},{"x":31,"y":3,"alive":false},{"x":32,"y":3,"alive":false},{"x":33,"y":3,"alive":false},{"x":34,"y":3,"alive":true},{"x":35,"y":3,"alive":true}],[{"x":0,"y":4,"alive":true},{"x":1,"y":4,"alive":true},{"x":2,"y":4,"alive":false},{"x":3,"y":4,"alive":false},{"x":4,"y":4,"alive":false},{"x":5,"y":4,"alive":false},{"x":6,"y":4,"alive":false},{"x":7,"y":4,"alive":false},{"x":8,"y":4,"alive":false},{"x":9,"y":4,"alive":false},{"x":10,"y":4,"alive":true},{"x":11,"y":4,"alive":false},{"x":12,"y":4,"alive":false},{"x":13,"y":4,"alive":false},{"x":14,"y":4,"alive":false},{"x":15,"y":4,"alive":false},{"x":16,"y":4,"alive":true},{"x":17,"y":4,"alive":false},{"x":18,"y":4,"alive":false},{"x":19,"y":4,"alive":false},{"x":20,"y":4,"alive":true},{"x":21,"y":4,"alive":true},{"x":22,"y":4,"alive":false},{"x":23,"y":4,"alive":false},{"x":24,"y":4,"alive":false},{"x":25,"y":4,"alive":false},{"x":26,"y":4,"alive":false},{"x":27,"y":4,"alive":false},{"x":28,"y":4,"alive":false},{"x":29,"y":4,"alive":false},{"x":30,"y":4,"alive":false},{"x":31,"y":4,"alive":false},{"x":32,"y":4,"alive":false},{"x":33,"y":4,"alive":false},{"x":34,"y":4,"alive":false},{"x":35,"y":4,"alive":false}],[{"x":0,"y":5,"alive":true},{"x":1,"y":5,"alive":true},{"x":2,"y":5,"alive":false},{"x":3,"y":5,"alive":false},{"x":4,"y":5,"alive":false},{"x":5,"y":5,"alive":false},{"x":6,"y":5,"alive":false},{"x":7,"y":5,"alive":false},{"x":8,"y":5,"alive":false},{"x":9,"y":5,"alive":false},{"x":10,"y":5,"alive":true},{"x":11,"y":5,"alive":false},{"x":12,"y":5,"alive":false},{"x":13,"y":5,"alive":false},{"x":14,"y":5,"alive":true},{"x":15,"y":5,"alive":false},{"x":16,"y":5,"alive":true},{"x":17,"y":5,"alive":true},{"x":18,"y":5,"alive":false},{"x":19,"y":5,"alive":false},{"x":20,"y":5,"alive":false},{"x":21,"y":5,"alive":false},{"x":22,"y":5,"alive":true},{"x":23,"y":5,"alive":false},{"x":24,"y":5,"alive":true},{"x":25,"y":5,"alive":false},{"x":26,"y":5,"alive":false},{"x":27,"y":5,"alive":false},{"x":28,"y":5,"alive":false},{"x":29,"y":5,"alive":false},{"x":30,"y":5,"alive":false},{"x":31,"y":5,"alive":false},{"x":32,"y":5,"alive":false},{"x":33,"y":5,"alive":false},{"x":34,"y":5,"alive":false},{"x":35,"y":5,"alive":false}],[{"x":0,"y":6,"alive":false},{"x":1,"y":6,"alive":false},{"x":2,"y":6,"alive":false},{"x":3,"y":6,"alive":false},{"x":4,"y":6,"alive":false},{"x":5,"y":6,"alive":false},{"x":6,"y":6,"alive":false},{"x":7,"y":6,"alive":false},{"x":8,"y":6,"alive":false},{"x":9,"y":6,"alive":false},{"x":10,"y":6,"alive":true},{"x":11,"y":6,"alive":false},{"x":12,"y":6,"alive":false},{"x":13,"y":6,"alive":false},{"x":14,"y":6,"alive":false},{"x":15,"y":6,"alive":false},{"x":16,"y":6,"alive":true},{"x":17,"y":6,"alive":false},{"x":18,"y":6,"alive":false},{"x":19,"y":6,"alive":false},{"x":20,"y":6,"alive":false},{"x":21,"y":6,"alive":false},{"x":22,"y":6,"alive":false},{"x":23,"y":6,"alive":false},{"x":24,"y":6,"alive":true},{"x":25,"y":6,"alive":false},{"x":26,"y":6,"alive":false},{"x":27,"y":6,"alive":false},{"x":28,"y":6,"alive":false},{"x":29,"y":6,"alive":false},{"x":30,"y":6,"alive":false},{"x":31,"y":6,"alive":false},{"x":32,"y":6,"alive":false},{"x":33,"y":6,"alive":false},{"x":34,"y":6,"alive":false},{"x":35,"y":6,"alive":false}],[{"x":0,"y":7,"alive":false},{"x":1,"y":7,"alive":false},{"x":2,"y":7,"alive":false},{"x":3,"y":7,"alive":false},{"x":4,"y":7,"alive":false},{"x":5,"y":7,"alive":false},{"x":6,"y":7,"alive":false},{"x":7,"y":7,"alive":false},{"x":8,"y":7,"alive":false},{"x":9,"y":7,"alive":false},{"x":10,"y":7,"alive":false},{"x":11,"y":7,"alive":true},{"x":12,"y":7,"alive":false},{"x":13,"y":7,"alive":false},{"x":14,"y":7,"alive":false},{"x":15,"y":7,"alive":true},{"x":16,"y":7,"alive":false},{"x":17,"y":7,"alive":false},{"x":18,"y":7,"alive":false},{"x":19,"y":7,"alive":false},{"x":20,"y":7,"alive":false},{"x":21,"y":7,"alive":false},{"x":22,"y":7,"alive":false},{"x":23,"y":7,"alive":false},{"x":24,"y":7,"alive":false},{"x":25,"y":7,"alive":false},{"x":26,"y":7,"alive":false},{"x":27,"y":7,"alive":false},{"x":28,"y":7,"alive":false},{"x":29,"y":7,"alive":false},{"x":30,"y":7,"alive":false},{"x":31,"y":7,"alive":false},{"x":32,"y":7,"alive":false},{"x":33,"y":7,"alive":false},{"x":34,"y":7,"alive":false},{"x":35,"y":7,"alive":false}],[{"x":0,"y":8,"alive":false},{"x":1,"y":8,"alive":false},{"x":2,"y":8,"alive":false},{"x":3,"y":8,"alive":false},{"x":4,"y":8,"alive":false},{"x":5,"y":8,"alive":false},{"x":6,"y":8,"alive":false},{"x":7,"y":8,"alive":false},{"x":8,"y":8,"alive":false},{"x":9,"y":8,"alive":false},{"x":10,"y":8,"alive":false},{"x":11,"y":8,"alive":false},{"x":12,"y":8,"alive":true},{"x":13,"y":8,"alive":true},{"x":14,"y":8,"alive":false},{"x":15,"y":8,"alive":false},{"x":16,"y":8,"alive":false},{"x":17,"y":8,"alive":false},{"x":18,"y":8,"alive":false},{"x":19,"y":8,"alive":false},{"x":20,"y":8,"alive":false},{"x":21,"y":8,"alive":false},{"x":22,"y":8,"alive":false},{"x":23,"y":8,"alive":false},{"x":24,"y":8,"alive":false},{"x":25,"y":8,"alive":false},{"x":26,"y":8,"alive":false},{"x":27,"y":8,"alive":false},{"x":28,"y":8,"alive":false},{"x":29,"y":8,"alive":false},{"x":30,"y":8,"alive":false},{"x":31,"y":8,"alive":false},{"x":32,"y":8,"alive":false},{"x":33,"y":8,"alive":false},{"x":34,"y":8,"alive":false},{"x":35,"y":8,"alive":false}]],"ySize":9,"xSize":36}')
        // this.setSize(e);
    }
    setSize = (xSize, ySize) => {
        let boardExport = this.board.exportBoard();
        boardExport.xSize = xSize;
        boardExport.ySize = ySize;
        boardExport = this.board.getBoardExport(boardExport);
        this.board.importFromInput(boardExport);
    }

}

class Board {
    xSize = 0;
    ySize = 0;
    saveContainerName = "save";
    clickDown = false;
    containerName = 'board'
    board = null
    randomFactor = 20;

    constructor(x, y, containerName = "board", randomFactor = 0) {
        this.randomFactor = randomFactor;
        this.containerName = containerName;
        this.xSize = x;
        this.ySize = y;

        this.createBoard();

    }

    createBoard = (save = null) => {
        this.board = [];
        let row = [];
        for (let i = 0; i < this.ySize; i++) {
            row = [];
            for (let j = 0; j < this.xSize; j++) {
                row.push(new Cell(save && save[i] && save[i][j] ? save[i][j] : null, j, i, (Math.random() > (1 - this.randomFactor / 100)), this))
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
    getBoardExport = (boardExport = null) => {
        return JSON.stringify(boardExport !== null ? boardExport : this.exportBoard(), (x, y, z) => {
            if (y !== undefined && y.hasOwnProperty('board')) {
                let resultBoard = y?.board.map((row) => {
                    return row.map((cell) => {
                        return cell.export()
                    })
                });
                let result = {
                    board: resultBoard,
                    ySize: y.ySize,
                    xSize: y.xSize
                }
                return result
            }
            else {
                return y
            }

        });
    }
    importFromInput = (stringJson) => {
        let datas = JSON.parse(stringJson);
        console.log(datas)
        this.xSize = datas.xSize;
        this.ySize = datas.ySize;
        this.createBoard(datas.board)
        this.displayBoard();
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
        document.getElementById(this.saveContainerName).innerHTML = this.getBoardExport();
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
                cell = this.getCell(j, i);
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
    constructor(save, x, y, alive, board) {
        if (save === null) {
            this.x = x;
            this.y = y;
            this.alive = alive;
        } else {
            this.x = save.x;
            this.y = save.y;
            this.alive = save.alive;
        }
        this.board = board;

    }
    export = () => {
        return {
            x: this.x,
            y: this.y,
            alive: this.alive
        }
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
        this.board.displaySave();

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