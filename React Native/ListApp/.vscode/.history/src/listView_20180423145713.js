import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import items from './items';
import Row from './row';

export default class MyListView extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          style={styles.idk}
          contentContainerStyle={styles.container}
          data={items}
          renderItem={data => {
            return <Row item={data.item} />;
          }}
        />
      </SafeAreaView>
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
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
