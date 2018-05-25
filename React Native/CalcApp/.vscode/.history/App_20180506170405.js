import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  state = {
    result: 0
  };

  render() {
    const { result } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onClick={this.calculate()}>
          <Text>Button</Text>
        </TouchableOpacity>
        <Text style={styles.result}>
          {result ? `Result is: ${result}` : 'No result yet'}
        </Text>
      </View>
    );
  }

  calculate() {
    console.log('result ', this.state.result);
    this.state.result = 5;
    // this.setState({ result: 5 });
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
