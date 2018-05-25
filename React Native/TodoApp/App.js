import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import AppContainer from './app/containers/app.container';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'skyblue' }}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </SafeAreaView>
    );
  }
}
