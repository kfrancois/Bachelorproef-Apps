import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Image extends Component {
  render() {
    return (
      <View style={styles.squircle}>
        
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
