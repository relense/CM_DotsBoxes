'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';
import utils from '../Utils';


export default class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leakedThis: false,
            color: null
        }
    }

    dim = {
        width: this.props.side,
        height: this.props.side
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
        console.log("Rendered: Square - player " + this.state.color);
        return (
            <View style={styles.SquareContainer}>
                <View style={[styles.Square, this.dim, utils.getColor(this.state.color)]}/>
            </View>
        )
    }
}

Square.propTypes = {
    side: PropTypes.number.isRequired
};


