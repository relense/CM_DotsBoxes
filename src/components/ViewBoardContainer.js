'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, Button, Dimensions } from 'react-native';

import styles, { defineSize } from '../Styles';
import utils from '../Utils';
import Square from './Square';
import LinhaHorizontal from './LinhaHorizontal';
import LinhaVertical from './LinhaVertical';
import Circulo from './Circulo';
import Overlay from './Loading';

export default class ViewBoardContainer extends Component {
    constructor(props) {
        super(props);

        let boardSize = { col: this.props.column, row: this.props.row };
        let screenSize = Math.min(Dimensions.get("window").width, Dimensions.get("window").height);
        let lines = Math.max(boardSize.row, boardSize.col);

        screenSize -= (0.1 * screenSize);

        const horizontalLines = lines;
        const lineWidth = Math.trunc((screenSize * 3 / 4) / horizontalLines);
        const lineHeight = Math.trunc((1 / 4 * ((screenSize * 3 / 4) / horizontalLines)));

        console.log("screen_width_less_10%: " + screenSize
            + ", line_width: " + lineWidth
            + ", line_height: " + lineHeight);

        this.state = {
            turn: this.props.turn,
            caixasFechadas: 0,
            board: utils.createBoard(boardSize.col + 1, boardSize.row + 1),
            squares: utils.createArray(boardSize.col, boardSize.row),
            arcos: utils.createArray(2, boardSize.col+1, boardSize.row),
            lineWidth: lineWidth,
            lineHeight: lineHeight,
            boxesAmount: boardSize.col * boardSize.row
        };
    }

    draw() {
        let keys = 0;
        let tabuleiro = [];
        let size = (this.state.board[0].length + this.state.board[1].length) - 1;
        let position = 0;
        let arrayPositionHorizontal = 0;
        let arrayPositionVertical = 0;

        //console.log("Board 0 : " + this.state.board[0].length);
        //console.log("Board 1 : " + this.state.board[1].length);

        //console.log("Board 0.0 : " + this.state.board[0][0].length);
        //console.log("Board 1.0 : " + this.state.board[1][0].length);

        for (let i = 0; i < size; i++) {
            if (i % 2 == 0) {
                let aux = [];
                for (let j2 = 0; j2 < this.state.board[position][arrayPositionHorizontal].length; j2++) {
                    aux.push(this.renderCircle(keys++));
                    aux.push(this.renderLinhaHorizontal(keys++, j2, arrayPositionHorizontal, position));

                }

                aux.push(this.renderCircle(keys++));
                tabuleiro.push(<View key={keys++} style={styles.Row}>{aux}</View>);

                arrayPositionHorizontal++;
                position++;

            } else if (i % 2 == 1) {
                let aux2 = [];
                let o;

                for (o = 0; o < this.state.board[position][arrayPositionVertical].length; o++) {
                    aux2.push(this.renderLinhaVerticais(keys++, arrayPositionVertical, o, position));
                    aux2.push(this.renderSquare(keys++, arrayPositionVertical, o));

                }
                aux2.push(this.renderLinhaVerticais(keys++, arrayPositionVertical, o, position));
                tabuleiro.push(<View key={keys++} style={styles.Row}>{aux2}</View>);

                arrayPositionVertical++;
                position--;
            }
        }

        return tabuleiro;
    };

    renderLinhaHorizontal(keys, x, y, z) {
        return <LinhaHorizontal key={keys} z={z} x={x} y={y} width={this.state.lineWidth} height={this.state.lineHeight} onPress={this.onPress.bind(this)} onMount={this.onMountLine.bind(this)} />;
    }

    renderLinhaVerticais(keys, x, y, z) {
        return <LinhaVertical key={keys} z={z} x={x} y={y} width={this.state.lineHeight} height={this.state.lineWidth} onPress={this.onPress.bind(this)} onMount={this.onMountLine.bind(this)} />;
    }

    renderSquare(keys, x, y) {
        return <Square key={keys++} x={x} y={y} side={this.state.lineWidth} onMount={this.onMountSquare.bind(this)} />;
    }

    onMountSquare(square) {
        this.state.squares[square.props.x][square.props.y] = square;
    }

    onMountLine(line) {
        this.state.arcos[line.props.z][line.props.y][line.props.x] = line;
    }

    onMountOverlay(overlay) {
        this.state.overlay = overlay;
    }

    renderCircle(keys) {
        return <Circulo key={keys++} radius={this.state.lineHeight} />;
    }

    onPress(filho) {
        if (filho.color == null) {
            this.makeMove(filho.props.z, filho.props.x, filho.props.y);
        }
    }

    makeMove(z, x, y, isBot, lispCallback) {

        let board = this.state.board;

        if (board[z][y][x] == null) {

            let currentTurn = this.state.turn ? 1 : 2;
            let nextTurn = this.state.turn;
            let closedABox = false;

            board[z][y][x] = currentTurn;
            this.state.arcos[z][y][x].setState({ color: currentTurn });

            let closedBoxes = this.getNumCaixasFechadas(board);

            //If the move closed box(es)
            if (closedBoxes > this.state.caixasFechadas) {
                this.props.onScore(this.state.board[z][y][x], closedBoxes - this.state.caixasFechadas);
                closedABox = true;
            } else if (!isBot){
                nextTurn = !this.state.turn;
            }

            this.setState({
                board: board,
                turn: nextTurn,
                caixasFechadas: closedBoxes

            }, () => {

                this.props.onMakeMove(this.state.turn, this.state.boxesAmount);

                if (this.props.lispServer && (!closedABox || isBot)) {

                    if (isBot) {
                        lispCallback();

                    } else {

                        this.state.overlay.setState({show: true});

                        let jsonObj = {
                            tabuleiro: {
                                arcos: this.state.board,
                                peca: 2,
                                caixasJ1: 2,
                                caixasJ2: 2
                            }
                        };

                        fetch(this.props.lispServer, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jsonObj)
                        }).then((response) => {
                            console.log(response);
                            return response.json();
                        }).then((responseJson) => {
                            this.applyBoardChanges(responseJson.tabuleiro);
                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                }

            });
        }
    }


    applyBoardChanges(newBoard, _z, _x, _y) {

        let z, x, y;
        for (z =_z || 0; z < newBoard.length; z++) {
            for (y = _y || 0; y < newBoard[z].length; y++) {
                for (x = _x || 0; x < newBoard[z][y].length; x++) {

                    if (newBoard[z][y][x] != this.state.board[z][y][x] && this.state.board[z][y][x] == null) {

                        this.makeMove(z, x ,y , true, ()=> {
                            this.applyBoardChanges(newBoard, z, x, y);
                        });

                        return;
                    }
                }
            }
        }
        this.setState({turn: !this.state.turn}, ()=>{
            this.props.onMakeMove(this.state.turn, this.state.boxesAmount);
        });
        //this.state.overlay.setState({show: false});
        setTimeout(()=>{this.state.overlay.setState({show: false})}, 2000);
    }

    getNumCaixasFechadas(board) {
        let x, y;
        let numCaixasFechadas = 0;
        for (x = 0; x < board[0].length - 1; x++) {
            for (y = 0; y < board[0][x].length; y++) {

                if (board[0][x][y] != null &&
                    board[0][x + 1][y] != null &&
                    board[1][y][x] != null &&
                    board[1][y + 1][x] != null) {

                    numCaixasFechadas += 1;

                    let sqrs = this.state.squares;
                    if (sqrs[x][y].state.color == null) {
                        sqrs[x][y].setState({ color: this.state.turn ? 1 : 2 });
                    }
                }
            }
        }
        return numCaixasFechadas;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log("Rendered: ViewBordContainer (this is a nono)");
        let display = this.draw();
        return (

            <View style={styles.BoardContainer} >
                <View style={styles.Board} >
                    {display}
                </View>
                <Overlay onMount={this.onMountOverlay.bind(this)}/>
            </View>
        )
    }
}
