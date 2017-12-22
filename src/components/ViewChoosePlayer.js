'use stric'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../Styles';

export default class ViewChoosePlayer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Rendered: ViewChoosePlayer");
        return (
            <View style={styles.ViewChoosePlayer} >
                <TouchableOpacity style={styles.ViewChoosePlayerTouchableOpacity} onPress={() => this.props.onPress(true)}>
                    <Text style={styles.ViewChoosePlayerButton} >Player 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ViewChoosePlayerTouchableOpacity} onPress={() => this.props.onPress(false)}>
                    <Text style={styles.ViewChoosePlayerButton} >Machine</Text>
                </TouchableOpacity>
            </View >
        )
    }
}