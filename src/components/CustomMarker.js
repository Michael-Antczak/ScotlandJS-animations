import React from "react";
import { Animated, View, Platform } from "react-native";

import { COLORS } from "./constants";

export default class CustomMarker extends React.Component {
  state = {
    animatedValue: new Animated.Value(0)
  };

  componentDidMount = () => {
    this._startAnimation();
  };

  _startAnimation = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 2500
    }).start(() => {
      this._resetAnimatedValue();
      this._startAnimation();
    });
  };

  _resetAnimatedValue = () => {
    this.setState({
      animatedValue: new Animated.Value(0)
    });
  };

  render() {
    const backgroundColor = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        COLORS.customMarker_ios_bgColor_full,
        COLORS.customMarker_ios_bgColor_transparent
      ]
    });

    const boxSize = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 100]
    });

    return (
      <View
        style={{
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Animated.View
          style={{
            backgroundColor: backgroundColor,
            borderRadius: 100,
            width: boxSize,
            height: boxSize,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.customMarker_ios_bgColor_full,
              borderWidth: 3,
              borderColor: COLORS.white,
              borderRadius: 50,
              width: 20,
              height: 20
            }}
          />
        </Animated.View>
      </View>
    );
  }
}
