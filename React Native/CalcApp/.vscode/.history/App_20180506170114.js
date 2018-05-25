import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  constructor(props){
super(props)

  }
  render() {
    const { result } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onClick={this.calculate()}>
          <Text>Button</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{result ? result : 'test'}</Text>
      </View>
    );
  }

  calculate() {
    this.state.result = 5;
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