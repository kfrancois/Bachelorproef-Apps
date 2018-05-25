import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dragable from './src/Dragable';
import Image from './src/Image';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Dragable>
          <Image />
        </Dragable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
