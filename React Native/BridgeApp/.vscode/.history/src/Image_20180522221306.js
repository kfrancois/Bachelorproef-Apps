import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Image extends Component {
  render() {
    return (
      <View style={styles.squircle}>
        <Image source={require('./assets/react-logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  squircle: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 20
  }
});
