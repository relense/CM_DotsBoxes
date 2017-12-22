'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../Styles';
import utils from '../Utils';

export default class LinhaHorizontal extends Component {
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
        borderRadius: (this.props.height/2)
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
        console.log("Rendered: LinhaHorizontal - (" + this.props.z + ", " + this.props.y + ", " + this.props.x + ")");

        return (
            <View style={[styles.LinhaHorizontalContainer, this.dim]}>
                <TouchableOpacity hitSlop={{ top: 7, bottom: 7, left: 0, right: 0 }}
                                  style={[this.dim ,utils.getColor(this.state.color)]}
                                  onPress={() => this.props.onPress(this)}>
                </TouchableOpacity>
            </View>
        )
    }
}

LinhaHorizontal.propTypes = {
    z: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired
};