import { React, Component } from 'react';
import { View, ListView, StyleSheet } from 'react-native';
import items from './items';
import row from './row';

export default class MyListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={items}
          renderRow={item => (
            <View>
              <Row data={item} />
            </View>
          )}
        />
      </View>
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
