class TicTacToe {
    constructor() {
        this.table = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.plr_sym = 'x'
    }

    getCurrentPlayerSymbol() {
        return this.plr_sym
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.table[rowIndex][columnIndex] === null) {
            this.table[rowIndex][columnIndex] =  this.plr_sym
            this.plr_sym = this.plr_sym === 'x' ? 'o' : 'x'
        }
    }

    isFinished() {
        return (this.getWinner() !== null) || this.isDraw() ? true : false
    }

    getWinner() {
        let winner = null

        for(let i=0; i<this.table.length; i++) {
            if(this.table[0][i] == this.table[1][i] && this.table[0][i] == this.table[2][i]) {
                winner = this.table[0][i]
                break;
            }

            if(this.table[i][0] == this.table[i][1] && this.table[i][0] == this.table[i][2]) {
                winner = this.table[i][0]
                break;
            }
        }

        if((this.table[1][1] == this.table[0][0] && this.table[1][1] == this.table[2][2]) ||
            (this.table[1][1] == this.table[0][2] && this.table[1][1] == this.table[2][0])) {
                winner = this.table[1][1]
        }

        return winner
    }

    noMoreTurns() {
        let index = 0
        this.table.forEach(function(el) {
            index += el.indexOf(null)
        });

        return index == -3 ? true : false
    }

    isDraw() {
        return (this.getWinner() === null) && this.noMoreTurns() ? true : false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.table[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
