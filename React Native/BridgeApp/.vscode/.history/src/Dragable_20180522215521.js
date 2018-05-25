import React, { Component } from 'react';
import { PanResponder, View, Dimensions } from 'react-native';

const dragOffsetForTransparency = 0.8 * Dimensions.get('window').width;

export default class Dragable extends Component {
  state = {
    dx: 0,
    dy: 0
  };
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      this.updateStyleBasedOnDeltaCoordinates(
        gestureState.dx,
        gestureState.dy
      );
    },
    onPanResponderRelease: (evt, gestureState) => {
      this.updateStyleBasedOnDeltaCoordinates(0, 0);
    }
  });
}

  constructor(props) {
    super(props);
    
  updateStyleBasedOnDeltaCoordinates(dx, dy) {
    this.setState({
      dx: dx,
      dy: dy
    });
  }
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
