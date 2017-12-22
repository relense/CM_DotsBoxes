import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import ViewContainer from './components/ViewContainer';
import GameStatusBar from './components/GameStatusBar';
import ViewBoardContainer from './components/ViewBoardContainer';
import WinnerView from './components/WinnerView';
import ViewChooseSize from './components/ViewChooseSize';
import styles from './Styles';

export default class Scene2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player1Score: 0,
            player2Score: 0,
            winner: null,
            row: null,
            column: null,
            turn: true
        };
    }

    static get defaultProps() {
        return {
            title: 'Scene2'
        };
    }

    restart() {
        this.props.navigator.replace({ screen: 'Scene2' });
    }

    chooseGame() {
        this.props.navigator.pop();
    }

    onScore(turn, amount) {
        if (turn == 1) {
            this.setState({
                player1Score: this.state.player1Score + amount
            });
        } else if (turn == 2) {
            this.setState({ player2Score: this.state.player2Score + amount });
        }
    }


    onMakeMove(newTurn, amountBoxes) {

        var total = this.state.player1Score + this.state.player2Score;

        if (total == amountBoxes) {
            if (this.state.player1Score > this.state.player2Score) {
                this.setState({ winner: "Player 1" })
            } else if (this.state.player2Score > this.state.player1Score) {
                this.setState({ winner: "Machine" })
            } else if (this.state.player1Score == this.state.player2Score) {
                this.setState({ winner: "It's a Tie" })
            }
        } else {
            this.setState({
                turn: newTurn
            });
        }
    }

    display() {
        if (this.state.row == null && this.state.column == null && this.state.winner == null) {
            return <ViewChooseSize onPress={this.onPress.bind(this)} />
        } else if (this.state.winner == null) {
            return <ViewBoardContainer
                onScore={this.onScore.bind(this)}
                row={this.state.row}
                column={this.state.column}
                turn={this.state.turn}
                onMakeMove={this.onMakeMove.bind(this)} />
        } else {
            return <WinnerView
                chooseGame={this.chooseGame.bind(this)}
                restart={this.restart.bind(this)}
                winner={this.state.winner} />
        }
    }

    displayGameStatus() {
        if (this.state.row == null && this.state.column == null && this.state.winner == null) {
            return (
                <View style={styles.ChooseGameStatusBar}>
                    <Text style={styles.ChooseGameTitle}>Choose Board</Text>
                </View >
            );
        } else {
            return <GameStatusBar
                player1Name={"Player 1"}
                player2Name={"Player 2"}
                player1Score={this.state.player1Score}
                player2Score={this.state.player2Score}
                turn={this.state.turn} />
        }
    }

    onPress(number) {
        this.setState({
            row: number,
            column: number
        });
    }

    render() {
        console.log("Rendered Scene2");
        let display = this.display();
        let displayGameStatus = this.displayGameStatus();

        return (
            <ViewContainer>
                {displayGameStatus}
                {display}
            </ViewContainer>
        )
    }
}
