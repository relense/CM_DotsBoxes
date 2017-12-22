import React, { Component } from 'react';
import { View, Text, Navigator, TextInput } from 'react-native';

import styles from './Styles';

export default class ChooseDimensionsScene extends Component {
    static get defaultProps() {
        return {
            title: 'ChooseDimensionsScene',
            rows: 0,
            columns: 0,
        };
    }
    render() {
        console.log("Rendered: ChooseDimensionScene");

        return (
            <View style={styles.ChooseDimensionsSceneContainer}>
                <View style={styles.ChooseDimensionsSceneStatusBar}>
                    <Text style={styles.ChooseDimensionSceneTitle}>Choose Board Dimensions</Text>
                </View >
                <View style={styles.ChooseDimensionsSceneStart}>
                    <View>
                        <Text>Number of Rows</Text>
                        <TextInput
                            style={{ height: 40 }}
                            onChangeText={(rows) => this.setState({ rows })}
                            />
                    </View>
                    <View>
                        <Text>Number of Columns</Text>
                        <TextInput
                            style={{ height: 40 }}
                            onChangeText={(columns) => this.setState({ columns })}
                            />
                    </View>

                    <Text style={styles.ChooseGamePlayer1} onPress={() => {
                        this.props.navigator.push({ screen: 'Scene1', data: Object });
                    } }>Start</Text>
                </View>
            </View >
        )
    }
}