import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView
} from 'react-native';

export default class App extends Component {
  state = {
    result: 0,
    time: 0,
    isCalculating: false
  };

  render() {
    const { result, isCalculating, time } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Calculator</Text>
          <Text style={styles.subtitle}>
            Press the button to make a calculation
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Button
            style={styles.button}
            disabled={isCalculating}
            onPress={this.handleOnPress}
            title="Calculate"
          />
          <Text style={styles.resultText}>
            {isCalculating
              ? 'Calculating result'
              : result
                ? `Result calculated in:`
                : 'No result yet'}
          </Text>
          {result &&
            !isCalculating && <Text style={styles.result}>{time}</Text>}
        </View>
      </SafeAreaView>
    );
  }
  handleOnPress = async () => {
    this.setState({ isCalculating: true });

    const result = await this.calculate();
    this.setState({ result, isCalculating: false });
  };

  calculate = () => {
    let result;
    for (let i = 0; i < 10000000; i++) {
      result = Math.pow(549413, 3440);
    }
    result = Math.pow(549413, 3);
    return result;
  };

  time = cb => {
    const start = new Date().getTime();
    cb();
    const result = new Date().getTime() - start;
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
    flex: 1,
    alignItems: 'center',
    padding: 50
  },
  title: {
    fontSize: 40
  },
  contentContainer: {
    flex: 2,
    alignItems: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: '#dddddd'
  },
  resultText: {
    color: '#333333',
    marginTop: 10
  },
  result: {
    color: '#333333',
    fontSize: 30
  }
});
