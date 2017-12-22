'use strict';

import styles from './Styles';

function getColor(player) {
    if (player == null) {
        return {backgroundColor: 'transparent'};
    } else if (player == 1) {
        return styles.player1;
    } else if (player == 2) {
        return styles.player2;
    }
}

function createBoard(colunas, elementos) {
    let board = [];
    let horizontal = [];
    let vertical = [];

    for (let i = 0; i < colunas; i++) {
        let aux1 = [];
        for (let j = 0; j < elementos - 1; j++) {
            aux1.push(null);
        }
        horizontal.push(aux1);
    }

    for (let k = 0; k < colunas; k++) {
        let aux2 = [];
        for (let l = 0; l < elementos - 1; l++) {
            aux2.push(null);
        }
        vertical.push(aux2);
    }

    board.push(horizontal);
    board.push(vertical);

    return board;
}

function createArray(length) {
    let arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        let args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = this.createArray.apply(this, args);
    } else {
        while(i--) arr[length-1 - i] = null;
    }
    return arr;
}

export default {
    getColor: getColor,
    createBoard: createBoard,
    createArray: createArray
}

