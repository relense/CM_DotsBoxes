import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Navigator } from 'react-native';

import styles from './Styles';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }
  
  render() {
      console.log("Rendered: MyScene");

    return (
      <View style={styles.containerMenu}>
        <Text style={styles.welcome}>Welcome To</Text>
        <Image source={require('./img/Logo.png')} />
        <Text style={styles.subTitle} onPress={() => {
          this.props.navigator.push({ screen: 'ChooseGameScene' });
        } }>PLAY</Text>
      </View>
    )
  }
}