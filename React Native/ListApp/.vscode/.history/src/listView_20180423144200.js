import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import items from './items';
import row from './row';

export default class MyListView extends Component {
  render() {
    return (
        
      <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
        <FlatList
          dataSource={items}
          renderRow={item => (
            <Text>{item.name}</Text>
            // <View>
            //   <Row data={item} />
            // </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  }
});