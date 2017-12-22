'use stric'

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';

export default class GameStatusBar extends Component {
    constructor(props) {
        super(props);
    }

    color() {
        if (this.props.turn == true) {
            return <View style={styles.GameStatusBarTurn1} />;
        } else if (this.props.turn == false) {
            return <View style={styles.GameStatusBarTurn2} />;
        }
    }
    render() {
        console.log("Rendered: GameStatusBar");
        let color = this.color();

        return (
            <View style={styles.GameStatusBarContainer} >
                <View style={styles.GameStatusBarPlayerContainer}>
                    <Text style={styles.GameStatusBarPlayerName}>{this.props.player1Name}</Text>
                    <Text style={styles.GameStatusBarPlayerName}>{this.props.player1Score}</Text>
                </View>
                {color}
                <View style={styles.GameStatusBarPlayerContainer}>
                    <Text style={styles.GameStatusBarPlayerName}>{this.props.player2Name}</Text>
                    <Text style={styles.GameStatusBarPlayerName}>{this.props.player2Score}</Text>
                </View>
            </View>
        )
    }
}