import Piece from './piece'

class Square extends Piece {
    shape = [
        [true, true],
        [true, true]
    ];

    centerPoint = {
        x: 1,
        y: 1
    };
}

export default Square;
