import React from "react";
import { StyleSheet, View } from "react-native";
import CustomMarker from "./src/components/CustomMarker";
import RotateHand from "./src/components/RotateHand";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomMarker />
        <RotateHand />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
