/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import MyScene from './MyScene';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import ChooseGameScene from './ChooseGameScene';

export default class AwesomeProjet2 extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ screen: 'MyScene' }}
                renderScene={(route, nav) => { return this.renderScene(route, nav) } }
                />
        );
    }
    renderScene(route, nav) {
        console.log("Rendered: Navigator");

        switch (route.screen) {
            case "MyScene":
                return <MyScene navigator={nav} />
            case "Scene1":
                return <Scene1 navigator={nav} />
            case "Scene2":
                return <Scene2 navigator={nav} data={route.data} />
            case "ChooseGameScene":
                return <ChooseGameScene navigator={nav} />
        }
    }
}

AppRegistry.registerComponent('AwesomeProjet2', () => AwesomeProjet2);
