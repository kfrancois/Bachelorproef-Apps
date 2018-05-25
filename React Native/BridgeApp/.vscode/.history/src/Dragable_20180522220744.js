import React, { Component } from 'react';
import { PanResponder, View, Dimensions } from 'react-native';

const initialState = { dx: 0, dy: 0 };

export default class Dragable extends Component {
  state = initialState;

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dx, dy } = gestureState;
      this.setState({
        dx,
        dy
      });
    },
    onPanResponderRelease: (evt, gestureState) => this.resetState()
  });

  resetState = () => {
    while (this.dx !== 0) {
      this.setState(prevState => ({
        dx: prevState.dx * 0.9,
        dy: prevState.dy * 0.9
      }));
    }
  };

  render() {
    return (
      <View
        {...this.panResponder.panHandlers}
        style={{
          transform: [
            { translateX: this.state.dx },
            { translateY: this.state.dy }
          ]
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
