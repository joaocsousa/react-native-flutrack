import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import {Provider} from 'react-redux';

import {configureStore} from './store/configure-store';

const initialState = {};

const store = configureStore(initialState);

export default class FluTrack extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{marginTop: 15}}>
          <Text>Hello World!</Text>
        </View>
      </Provider>
    );
  }
}
