import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Input from '../components/Input';
import List from '../components/List';
import Title from '../components/Title';
import todoActions from './../actions/todoActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke'
  }
});

const mapStateToProps = state => ({
  items: state.items,
  showCompleted: state.showCompleted
});

const mapDispatchToProps = { ...todoActions };

class App extends Component {
  
  addItem = item => this.props.addItem(item);
  removeItem = index => this.props.removeItem(index);
  toggleItemCompleted = index => this.props.toggleItemCompleted(index);
  toggleShowCompleted = () => this.props.toggleShowCompleted();

  static propTypes = {
    items: PropTypes.array.isRequired,
    showCompleted: PropTypes.bool.isRequired
  };

  render() {
    const { items, showCompleted } = this.props;

    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <Input placeholder={'Enter an item!'} onSubmit={this.addItem} />
        <View style={styles.divider} />
        <List
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
          showCompleted={showCompleted}
        />
        <View style={styles.divider} />
        <Footer
          onToggleShowCompleted={this.toggleShowCompleted}
          showCompleted={showCompleted}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
