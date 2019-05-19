class PieceInGame {
    /**
     *
     * @param {Piece} piece
     * @param {number} posX
     * @param {number} posY
     * @param {number} interval
     */
    constructor(piece, posX, posY, interval) {
        this.piece = piece;
        this.currentPosition = {
            x: posX,
            y: posY
        };
        this.interval = interval;
    }

    moveRight() {
        this.currentPosition.x++;
    }

    moveLeft() {
        this.currentPosition.x--;
    }

    moveDown() {
        this.currentPosition.y++;
    }

    startGravity() {
        let self = this;
        this.interval = setInterval(function () {
            self.moveDown();
        }, this.interval)
    }
}

export default PieceInGame;
