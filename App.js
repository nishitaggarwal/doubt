import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import ExchangeScreen from './screens/ExchangeScreen';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen'

export default class App extends React.Component {
  render(){
    return (

        <AppContainer/>

    );
  }
}



const TabNavigator = createBottomTabNavigator({
  Exchange: {screen: ExchangeScreen},
  Home: {screen: HomeScreen},
}
)


const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen: WelcomeScreen},
Drawer:{screen: AppDrawerNavigator},
TabNavigator:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

