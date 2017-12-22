'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Image } from 'react-native';

import styles from '../Styles';

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leakedThis: false,
            show: false
        }
    }

    componentDidMount() {
        if (!this.state.leakedThis) {
            this.setState({leakedThis: true});
            this.props.onMount(this);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.show != nextState.show) {
            return true;
        }
        return false;
    }

    render() {
        console.log("Rendered: Loading ");

        /*
         let img = this.state.show ? <Image resizeMode="contain" style={styles.overlayImg} source={require('../img/loading_1.gif')} /> : <View></View>;
         let overlay = this.state.show ? <View style={styles.overlay}></View> : <View></View>;
         let overlayContainerStyle = this.state.show ? styles.overlayContainer : {};
         */

        return (
            <View style={[styles.overlayContainer, this.state.show ? {} : styles.hidden]}>
                <Image resizeMode="contain" style={[styles.overlayImg, this.state.show ? {} : styles.hidden]} source={require('../img/loading_2.gif')} />
                <View style={[styles.overlay, this.state.show ? {} : styles.hidden]}></View>
            </View>
        );
    }
}



