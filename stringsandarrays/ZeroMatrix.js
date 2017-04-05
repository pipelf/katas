'use strict';

class ZeroMatrix {

    zero(matrix) {
        let position = this.findzero(matrix);

        if (!position.found) return matrix;

        for (let i = 0; i < matrix[position.row].length; i++) {
            matrix[position.row][i] = 0;
        }

        for (let j = 0; j < matrix.length; j++) {
            matrix[j][position.column] = 0;
        }

        return matrix;

    }

    findzero(m) {
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                if (m[i][j] === 0) {
                    return {
                        found: true,
                        row: i,
                        column: j
                    }
                }
            }
        }

        return {
            found: false
        }
    }
}

module.exports = ZeroMatrix;
