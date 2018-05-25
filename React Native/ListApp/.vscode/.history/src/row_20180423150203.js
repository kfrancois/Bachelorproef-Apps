import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between'
  },
  rowHeading: {
    fontSize: 24,
    color: '#555'
  },
  rowText: {
    fontSize: 14,
    color: '#888'
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
