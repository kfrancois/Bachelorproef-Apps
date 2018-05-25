import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column'
  },
  rowText: {
    fontSize: 14,
    color: '#fff'
  },
  rowHeading: {
    fontSize: 24,
    color: '#D20A4B'
  }
});

const Row = props => {
  const item = props.item;
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.rowHeading}>{item.name}</Text>
      <Text style={styles.rowText}>{item.gender}</Text>
    </View>
  );
};

export default Row;
