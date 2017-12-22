import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import ViewContainer from './components/ViewContainer';
import GameStatusBar from './components/GameStatusBar';
import ViewBoardContainer from './components/ViewBoardContainer';
import WinnerView from './components/WinnerView';
import ViewChoosePlayer from './components/ViewChoosePlayer';
import styles from './Styles';

export default class Scene1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player1Score: 0,
            player2Score: 0,
            winner: null,
            turn: null
        };
    }

    static get defaultProps() {
        return {
            title: 'Scene1'
        };
    }

    restart() {
        this.props.navigator.replace({ screen: 'Scene1' });
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
            this.setState({
                player2Score: this.state.player2Score + amount
            });
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
        if (this.state.winner == null && this.state.turn == null) {
            return <ViewChoosePlayer onPress={this.onPress.bind(this)} />
        } else if (this.state.winner == null) {
            return <ViewBoardContainer lispServer="http://192.168.1.79:8000/save-data"
                onScore={this.onScore.bind(this)}
                turn={this.state.turn}
                onMakeMove={this.onMakeMove.bind(this)}
                column={7}
                row={7}/>

        } else {
            return <WinnerView
                chooseGame={this.chooseGame.bind(this)}
                restart={this.restart.bind(this)}
                winner={this.state.winner} />
        }
    }

    displayStatusBar() {
        if (this.state.winner == null && this.state.turn == null) {
            return (
                <View style={styles.ChooseGameStatusBar}>
                    <Text style={styles.ChooseGameTitle}>First To Play</Text>
                </View >)
        } else {
            return <GameStatusBar
                player1Name={"Player 1"}
                player2Name={"Machine"}
                player1Score={this.state.player1Score}
                player2Score={this.state.player2Score}
                turn={this.state.turn} />
        }
    }

    onPress(state) {
        this.setState({
            turn: state
        });
    }

    render() {
        console.log("Rendered: Scene1");
        let display = this.display();
        let displayStatusBar = this.displayStatusBar();
        return (
            <ViewContainer>
                {displayStatusBar}
                {display}
            </ViewContainer>
        )
    }
}
