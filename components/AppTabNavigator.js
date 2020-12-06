import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';



export const AppTabNavigator = createBottomTabNavigator({
  RequestItems: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarLabel : "Book Request",
    }
  },
  DonateItems : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarLabel : "Donate Books",
    }
  }
});
