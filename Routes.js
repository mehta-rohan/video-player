import React, { Component } from "react";
import Videos from "./src/screens/Videos";
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';


const AppNavigator = createStackNavigator({
  Video: { screen: Videos }
});

export default createAppContainer(AppNavigator);