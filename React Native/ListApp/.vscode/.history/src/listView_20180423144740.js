import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import items from './items';
import row from './row';

export default class MyListView extends Component {
  render() {
    console.log(items);
    return (
      <FlatList
        style={styles.idk}
        contentContainerStyle={styles.container}
        data={items}
        renderItem={item => <Text style={styles.item}>{item.name}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  idk: {
    flex: 1,
    backgroundColor: 'green'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
