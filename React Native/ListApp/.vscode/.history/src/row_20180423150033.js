import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'column'
  },
  rowText: {
    fontSize: 14,
    color: '#888'
  },
  rowHeading: {
    fontSize: 24,
    color: '#aaa'
  }
});

const Row = props => {
  const item = props.item;
  const { name, gender } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.rowHeading}>Name: {name}</Text>
      <Text style={styles.rowText}>Gender: {gender}</Text>
    </View>
  );
};

export default Row;
