'use stric'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../Styles';

export default class ViewChooseSize extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Rendered: ViewChooseSize");
        return (
            <View style={styles.ViewChooseSize} >
                <TouchableOpacity style={styles.ViewChooseSizeTouchableOpacity} onPress={() => this.props.onPress(3)}>
                    <Text style={styles.ViewChooseSizeButton} >3x3 Board</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ViewChooseSizeTouchableOpacity} onPress={() => this.props.onPress(4)}>
                    <Text style={styles.ViewChooseSizeButton} >4x4 Board</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ViewChooseSizeTouchableOpacity} onPress={() => this.props.onPress(5)}>
                    <Text style={styles.ViewChooseSizeButton}>5x5 Board</Text>
                </TouchableOpacity>
            </View >
        )
    }
}