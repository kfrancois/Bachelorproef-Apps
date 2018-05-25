import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Row extends Component {
  render() {
    const item = this.props.item;
    const { name, gender } = item;
    return (
      <View style={styles.container}>
        <Text style={styles.rowHeading}>Name: {name}</Text>
        <Text style={styles.rowText}>Gender: {gender}</Text>
      </View>
    );
  }
}

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
    fontSize: 20,
    color: '#555'
  },
  rowText: {
    fontSize: 16,
    color: '#888'
  }
});
