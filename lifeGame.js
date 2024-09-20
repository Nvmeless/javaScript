class LifeGame {

    toto = 5;
    board = null;
    constructor(tata){
        console.log(this.toto)
        this.toto = tata;
        console.log(this.toto)

    }
    
    //Une methode qui creer un tableau de x / y
       createBoard = (x, y) => {
        this.board = [];
        let row = [];
        for(let i = 0; i < y ; i++){
            row = [];
            for(let j = 0; j < x; j++){


                row.push(new Cell(j,i,false))

            }
            this.board.push(row);
        }
        console.log(this.board);
       } 


    //une methode qui recupere l'index dans un tableau par rapport a des coordonnées x et y

       getCell = (x, y) => {
        return this.board[y][x];
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