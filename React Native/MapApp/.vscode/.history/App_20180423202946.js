/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const App = () => <MapView style={styles.container} />;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
