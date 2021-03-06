import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ImportAccount from "./src/components/ImportAccount";
const AppNavigator = createStackNavigator({
  ImportAccount: {
    screen: ImportAccount
  },
  initialRouteName: "Home"
});
const AppContainer = createAppContainer(AppNavigator);
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
