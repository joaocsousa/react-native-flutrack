/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {greet: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ greet: !this.state.greet });
    }, 1000);
  }
  render() {
    let greeting = this.state.greet ? 'Hello' : 'Bye';
    return (
      <Text>{greeting} {this.props.name}!</Text>
    );
  }
}

export default class FluTrack extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu.
        </Text>
        <Text style={styles.instructions}>
          More Text
        </Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name="EL JEFE" />
        <Greeting name="COMANDANTE" />
        <View style={{flex:1, backgroundColor: '#00FFFF'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    /*,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',*/
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FluTrack', () => FluTrack);
