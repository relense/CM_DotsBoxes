'use strict'
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';

/**
 * Scene1 and Scene2 render main view
 */
export default class ViewContainer extends Component {
    render() {
        console.log("Rendered: ViewContainer");
        return (
            <View style={styles.ViewContainer}>
                {this.props.children}
            </View>
        )
    }
}

