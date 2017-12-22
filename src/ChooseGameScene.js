import React, { Component } from 'react';
import { View, Text, Navigator, TouchableOpacity } from 'react-native';

import styles from './Styles';

export default class MyScene extends Component {
    static get defaultProps() {
        return {
            title: 'ChooseGameScene'
        };
    }
    render() {
        console.log("Rendered: ChooseGameScene");

        return (
            <View style={styles.ChooseGamecontainer}>
                <View style={styles.ChooseGameStatusBar}>
                    <Text style={styles.ChooseGameTitle}>Number of Players</Text>
                </View >
                <View style={styles.ChooseGameSecondView}>
                    <TouchableOpacity style={styles.chooseGameSceneTouchableOpacity1} onPress={() => {
                        this.props.navigator.push({ screen: 'Scene1' });
                    } }>
                        <Text style={styles.ChooseGamePlayer}>Single Player</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.chooseGameSceneTouchableOpacity2} onPress={() => {
                        this.props.navigator.push({ screen: 'Scene2' });
                    } }>
                        <Text style={styles.ChooseGamePlayer} >Multiplayer</Text></TouchableOpacity>
                </View>
            </View >
        )
    }
}