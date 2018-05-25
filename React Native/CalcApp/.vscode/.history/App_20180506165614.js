import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  render() {
    const { result } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity />
        <Text style={styles.result}>{result ? result : 'test'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
