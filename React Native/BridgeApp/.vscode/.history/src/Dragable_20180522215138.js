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
        this.updateStyleBasedOnDeltaX(gestureState.dx);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.updateStyleBasedOnDeltaX(0);
      }
    });
  }
  updateStyleBasedOnDeltaX(dx) {
    let opacity = 1 - Math.abs(dx) / dragOffsetForTransparency;
    if (opacity < 0) opacity = 0;
    this.setState({
      containerOpacity: opacity,
      containerTranslateX: dx
    });
  }
  render() {
    return (
      <View
        {...this.panResponder.panHandlers}
        style={{
          transform: [{ translateX: this.state.containerTranslateX }]
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
