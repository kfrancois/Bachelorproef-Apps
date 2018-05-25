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
    isCalculating: false
  };

  render() {
    const { result, isCalculating } = this.state;

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
            onPress={this.calculate}
            title="Calculate"
          />
          <Text style={styles.resultText}>
            {isCalculating
              ? 'Calculating result'
              : result
                ? `Result is:`
                : 'No result yet'}
          </Text>
          {result &&
            !isCalculating && <Text style={styles.result}>{result}</Text>}
        </View>
      </SafeAreaView>
    );
  }

  calculate = () => {
    this.setState({ isCalculating: true });
    let result = Math.pow(54, 40);

    result = Math.pow(54, 139);
    result = Math.pow(5431, 409);
    result = Math.pow(549413, 3440);
    result = Math.pow(54, 403);

    this.setState({ result, isCalculating: false });
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
