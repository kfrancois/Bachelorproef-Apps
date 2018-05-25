import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Checkbox from './Checkbox';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke'
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26
  },
  completed: {
    backgroundColor: 'whitesmoke'
  }
});

export default class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onToggleItemCompleted: PropTypes.func.isRequired,
    showCompleted: PropTypes.bool.isRequired
  };

  renderItem = (item, i) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props;
    const itemStyle = item.completed
      ? [styles.item, styles.completed]
      : styles.item;

    return (
      <View key={i} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={item.completed}
            onToggle={() => onToggleItemCompleted(i)}
          />
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const { items, showCompleted } = this.props;

    return (
      <ScrollView style={styles.container}>
        {showCompleted
          ? items.map(this.renderItem)
          : items.filter(item => !item.completed).map(this.renderItem)}
      </ScrollView>
    );
  }
}
