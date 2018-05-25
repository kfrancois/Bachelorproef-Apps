import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Canvas extends Component {
  render() {
    return (
      <View style={styles.squircle}>
        <Text>Drag me!</Text>
        <Image
          style={styles.image}
          source={require('./assets/react-logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  squircle: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 30,
    paddingTop: 20
  },
  image: {
    height: 100,
    width: 110
  }
});
