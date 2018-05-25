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
    result: 0,
    isCalculating: false
  };

  render() {
    const { result, isCalculating } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.calculate}>
          <Text>Button</Text>
        </TouchableOpacity>
        <Text style={styles.result}>
          {isCalculating
            ? 'Calculating result'
            : result
              ? `Result is: ${result}`
              : 'No result yet'}
        </Text>
      </View>
    );
  }

  calculate = () => {
    this.setState({ result: this.state.result + 1 });
  };
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
