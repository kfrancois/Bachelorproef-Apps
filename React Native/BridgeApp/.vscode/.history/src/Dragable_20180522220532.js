import React, { Component } from 'react';
import { PanResponder, View, Dimensions } from 'react-native';

const dragOffsetForTransparency = 0.8 * Dimensions.get('window').width;

export default class Dragable extends Component {
  state = {
    dx: 0,
    dy: 0
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dx, dy } = gestureState;
      this.setState({
        dx,
        dy
      });
    },
    onPanResponderRelease: (evt, gestureState) =>
      this.setState({ dx: 0, dy: 0 })
  });

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
