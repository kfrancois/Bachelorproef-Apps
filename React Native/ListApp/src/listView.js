import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import faker from 'faker';
import Row from './row';

export default class MyListView extends Component {
  render() {
    const items = createItems(2000);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
        <FlatList
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

const createItems = amount => {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({
      key: i.toString(),
      name: faker.name.findName(),
      gender: faker.random.boolean() ? '♀' : '♂'
    });
  }
  return arr;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flexGrow: 1,
    justifyContent: 'space-between'
  }
});
