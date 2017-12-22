'use strict'
import React, { Component } from 'react';
import { View, Text, Button, Navigator } from 'react-native';

import styles from '../Styles';

export default class WinnerView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Rendered: WinnerView")
        let winner = this.props.winner == "It's a Tie" ? " " : "Winner"
        return (
            <View style={styles.WinnerViewContainer}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.WinnerViewTitle}>{winner}</Text>
                    <Text style={styles.WinnerViewTitle}> {this.props.winner}</Text>
                </View>
                <View style={{ flexDirection: 'column', margin: 10 }}>

                    <View style={styles.Button} >
                        <Button onPress={() => {
                            this.props.restart()
                        } } title={"Play Again"}></Button>
                    </View>
                    <View style={styles.Button} >
                        <Button style={styles.Button} onPress={() => {
                            this.props.chooseGame()
                        } } title={"Choose Game Type"}></Button>
                    </View>
                </View>
            </View>
        )
    }
}

