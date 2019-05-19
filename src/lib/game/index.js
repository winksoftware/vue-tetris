import Square from '../pieces/square'
import PieceInGame from '../game/piece-in-game'

class Game {

    constructor(board) {
        this.board = board;
        this.pieces = [];
    }

    start() {
        let piece = new Square();
        let pieceInGame = new PieceInGame(piece, 0, 0, 500);
        pieceInGame.startGravity();
        this.pieces.push(pieceInGame);

    }

    /**
     * UNCOMPLETED METHOD. This method should draw a PieceInGame instance in the Game's board.
     * The current position of the piece are given by pieceInGame.currentPosition.
     * To print in the board the method Board::fulfillPosition should be used.
     * To leave a space blank the method Board::emptyPosition should be used.
     * @param {PieceInGame} pieceInGame
     */
    printPieceInBoard(pieceInGame) {
        let self = this;

        self.board.cells.forEach(function (kValue, kIndex) {
            kValue.forEach(function (lValue, lIndex) {
                if (pieceInGame.currentPosition.x === kIndex && pieceInGame.currentPosition.y === lIndex) {
                    pieceInGame.piece.shape.forEach(function (iValue) {
                        iValue.forEach(function (jValue, shapeCellIsFull) {
                            self.board.fulfillPosition(kIndex, lIndex);
                        });
                    });
                }
                // if (shapeCellIsFull) {
                //     self.board.fulfillPosition(kIndex, lIndex);
                // } else {
                //     self.board.emptyPosition(kIndex, lIndex);
                // }
            });
        });

    }

    end() {

    }
}


export default Game;
