'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../Styles';
import utils from '../Utils';


export default class LinhaVertical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leakedThis: false,
            color: null
        };
    }

    dim = {
        width: this.props.width,
        height: this.props.height,
        borderRadius: (this.props.width/2)
    };

    componentDidMount() {
        if (!this.state.leakedThis) {
            this.setState({leakedThis: true});
            this.props.onMount(this);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.color != nextState.color) {
            return true;
        }
        return false;
    }

    render() {
        console.log("Rendered: LinhaVertical - (" + this.props.z + ", " + this.props.y + ", " + this.props.x + ")");

        return (
            <View style={[styles.LinhaVerticalContainer, this.dim]}>
                <TouchableOpacity hitSlop={{ top: 0, bottom: 0, left: 7, right: 7 }}
                                  style={[this.dim, utils.getColor(this.state.color)]}
                                  onPress={() => this.props.onPress(this)}>
                </TouchableOpacity>
            </View>
        )
    }
}

LinhaVertical.propTypes = {
    z: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired
};
