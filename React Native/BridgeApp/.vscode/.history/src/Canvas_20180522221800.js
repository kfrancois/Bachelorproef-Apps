import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Canvas extends Component {
  render() {
    return (
      <View style={styles.squircle}>
        <Image style={styles.image} source={require('./assets/react-logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  squircle: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 80
  },
  image: {
    height: 50,
    width: 50
  }
});
