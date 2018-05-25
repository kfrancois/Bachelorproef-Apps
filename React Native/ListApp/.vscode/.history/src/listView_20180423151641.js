import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import items from './items';
import Row from './row';

export default class MyListView extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
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
  list: {
      backgroundColor: 'whitesmoke'
    },
    container: {
    flexGrow: 1,
    justifyContent: 'space-between'
  }
});
