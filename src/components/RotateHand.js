import React from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";

export default class RotateHand extends React.Component {
  componentWillMount = () => {
    this.animatedValue = new Animated.Value(0);
  };

  componentDidMount = () => {
    this._startAnimation();
  };

  _startAnimation = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this._startAnimation());
  };

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const animatedStyle = {
      transform: [
        {
          translateY: 110
        },
        { rotate: interpolateRotation }
      ]
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.radar, animatedStyle]}>
          <View>
            <View style={styles.handTop} />
            <View style={styles.handBottom} />
          </View>
        </Animated.View>
        <View style={styles.dot} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: "steelblue",
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 10
  },
  handTop: {
    width: 3,
    height: 100,
    backgroundColor: "steelblue",
    borderRadius: 50
  },
  handBottom: {
    width: 3,
    height: 100,
    backgroundColor: "transparent",
    borderRadius: 50
  }
});
