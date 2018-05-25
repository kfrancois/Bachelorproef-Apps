import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import items from './items';
import row from './row';

export default class MyListView extends Component {
  render() {
    console.log(items);
    return (
      <FlatList
        style={styles.container}
        data={items}
        renderItem={item => (
          <Text style={styles.item}>{item.name}</Text>
          // <View>
          //   <Row data={item} />
          // </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
