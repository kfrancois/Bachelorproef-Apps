import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import ListView from './src/listView';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <ListView />
      </SafeAreaView>
    );
  }
}
