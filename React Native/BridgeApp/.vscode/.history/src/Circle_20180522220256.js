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
    borderRadius: 50,
    padding: 50
  }
});
