import React, { Component } from 'react';
import { PanResponder, View, Dimensions } from 'react-native';

const dragOffsetForTransparency = 0.8 * Dimensions.get('window').width;

export default class Dragable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerTranslateX: 0,
      containerTranslateY: 0
    };
    this.panResponder = PanResponder.create({
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
  updateStyleBasedOnDeltaX(dx, dy) {
    this.setState({
      containerTranslateX: dx,
      containerTranslateY: dy
    });
  }
  render() {
    return (
      <View
        {...this.panResponder.panHandlers}
        style={{
          transform: [
            {
              translateX: this.state.containerTranslateX
            },
            {
              translateY: this.state.containerTranslateY
            }
          ]
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
