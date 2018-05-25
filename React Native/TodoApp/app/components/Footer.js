import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    alignItems: 'center'
  },
  remove: {
    color: '#CD5C5C'
  }
});

export default class Footer extends Component {
  static propTypes = {
    onToggleShowCompleted: PropTypes.func,
    showCompleted: PropTypes.bool
  };

  render() {
    const { onToggleShowCompleted, showCompleted } = this.props;
console.log(showCompleted);
    return (
      <TouchableOpacity style={styles.footer} onPress={onToggleShowCompleted}>
        <Text style={styles.remove}>
          {showCompleted ? 'Hide' : 'Show'} completed items
        </Text>
      </TouchableOpacity>
    );
  }
}
