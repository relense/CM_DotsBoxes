'use strict'
import React, { Component, PropTypes } from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../Styles';

export default class Circulo extends Component {

    dim = {
        width: this.props.radius,
        height: this.props.radius,
        borderRadius: (this.props.radius/2)
    };

    render() {
        console.log("Rendered: Circulo");
        return (
            <View style={[styles.Circulo, this.dim]}>
            </View>

        )
    }
}

Circulo.propTypes = {
    radius: PropTypes.number.isRequired
};