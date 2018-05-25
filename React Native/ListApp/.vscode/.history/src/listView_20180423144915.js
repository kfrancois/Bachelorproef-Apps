import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import items from './items';
import row from './row';

export default class MyListView extends Component {
  render() {
    return (
      <FlatList
        style={styles.idk}
        contentContainerStyle={styles.container}
        data={items}
        renderItem={item => {
          console.log(item.item);
          return <Text style={styles.item}>{item.item.name}</Text>;
        }}
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
    width: 500,
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'red'
  }
});
