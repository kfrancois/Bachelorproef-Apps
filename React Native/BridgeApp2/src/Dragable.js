import React, { Component } from 'react';
import { PanResponder, View, Dimensions, Animated } from 'react-native';

const initialState = { dx: new Animated.Value(0), dy: new Animated.Value(0) };

export default class Dragable extends Component {
  state = initialState;

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: this.state.dx,
        dy: this.state.dy
      }
    ]),
    onPanResponderRelease: () => {
      Animated.parallel([
        Animated.spring(this.state.dx, { toValue: 0 }).start(),
        Animated.spring(this.state.dy, { toValue: 0 }).start()
      ]);
    }
  });

  resetState = () => this.setState(initialState);

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={{
          transform: [
            { translateX: this.state.dx },
            { translateY: this.state.dy }
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
