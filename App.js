import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DictionaryScreen from './screens/DictionaryScreen';
import CurrencyConversionScreen from './screens/CurrencyConversionScreen';
import BarCodeScannerScreen from './screens/BarCodeScannerScreen'
import { AppTabNavigator } from './Tradings/TradingComponents/AppTabNavigator';
import WelcomeScreen from './Tradings/TradingScreens/WelcomeScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  DictionaryScreen: {screen: DictionaryScreen},
  CurrencyConversionScreen: {screen: CurrencyConversionScreen},
  BarCodeScannerScreen: {screen: BarCodeScannerScreen},
  BookTrade: {screen: WelcomeScreen},
});

const AppContainer = createAppContainer(switchNavigator);

