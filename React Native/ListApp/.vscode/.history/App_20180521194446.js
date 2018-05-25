import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import ListView from './src/listView';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{flex: 1}}>
          <ListView />
        </View>
      </SafeAreaView>
    );
  }
}
