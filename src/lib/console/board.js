class Board {
    /**
     *
     * @param {Number} rows
     * @param {Number} columns
     */
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.cells = [];
        for (let i = 0; i < rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < columns; j++) {
                this.cells[i][j] = false;
            }
        }
    }

    fulfillPosition(x, y) {
        this.cells[x][y] = true;
    }

    emptyPosition(x, y) {
        this.cells[x][y] = false;
    }

    isCurrentPositionFull(x, y) {
        return this.cells[x][y];
    }
}

export default Board;
