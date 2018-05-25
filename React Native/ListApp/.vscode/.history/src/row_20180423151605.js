import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignSelf: 'stretch',
    backgroundColor: '#ccc',
    borderRadius: 5
  },
  rowHeading: {
    fontSize: 22,
    color: '#555'
  },
  rowText: {
    fontSize: 18,
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
