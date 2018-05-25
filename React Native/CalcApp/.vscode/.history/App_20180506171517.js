import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default class App extends Component {
  state = {
    result: 0,
    isCalculating: false
  };

  render() {
    const { result, isCalculating } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Calculator</Text>
          <Text style={styles.subtitle}>
            Press the button to make a calculation
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <TouchableOpacity style={styles.button} onPress={this.calculate}>
            <Text>Calculate</Text>
          </TouchableOpacity>
          <Text style={styles.result}>
            {isCalculating
              ? 'Calculating result'
              : result
                ? `Result is: ${result}`
                : 'No result yet'}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  calculate = () => {
    this.setState({ isCalculating: true });
    setTimeout(() => {
      this.setState({ result: this.state.result + 1, isCalculating: false });
    }, 5000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  titleContainer: {
    textAlign: 'center',
  }
  button: {
    padding: 10,
    backgroundColor: '#dddddd'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10
  }
});
