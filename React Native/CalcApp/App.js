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
          <Text style={styles.title}>RN Calculator</Text>
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
              : time
                ? `Result calculated in:`
                : 'No result yet'}
          </Text>
          {!!time &&
            !isCalculating && <Text style={styles.result}>{time} ms</Text>}
        </View>
      </SafeAreaView>
    );
  }

  handleOnPress = async () => {
    this.setState({ isCalculating: true });

    const result = await this.time(this.calculate);

    this.setState({ result, isCalculating: false });
  };

  calculate = async () => {
    let result;
    for (let i = 0; i < 30000; i++) {
      result = await Math.pow(549413, 3440);
    }
    return result;
  };

  time = async cb => {
    const start = new Date().getTime();
    await cb();
    const time = new Date().getTime() - start;
    console.log(time);
    this.setState({ time });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
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
