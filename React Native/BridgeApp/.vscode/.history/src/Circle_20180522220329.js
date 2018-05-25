import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Circle extends Component {
  render() {
    return (
      <View style={styles.circle}>
        <View style={styles.squircle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'green',
    borderRadius: 150,
    padding: 80
  },
  squircle: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 50
  }
});
