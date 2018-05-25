import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Circle extends Component {
  render() {
    return (
      <View style={styles.squircle}>
        <Image />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'green',
    borderRadius: 100,
    padding: 50
  },
  squircle: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 20
  }
});
