/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import App from './App/App.js'
import App2 from './App/App2.js'

export default class reactNavigationDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App2/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('reactNavigationDemo', () => reactNavigationDemo);
