/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Button, Container, Content } from 'native-base'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, YellowBox } from 'react-native';
import MainRouter from './components/routes/MainRouter';
import TransportOptions from './components/screens/farmerScreens/TransportOptions';
// import FormBase from './components/screens/wareownerScreens/FormBase';
import BookDetails from './components/screens/farmerScreens/BookDetails'
import MainStackNavigator from './components/routes/MainStackNavigator'
import PaymentDetails from './components/screens/farmerScreens/PaymentDetails';
import LanguageStackNavigator from './components/routes/LanguageStackNavigator'
const niceBlue = '#1E8AE9'
// YellowBox.ignoreWarnings(['Warning:...'])
export default class App extends Component {
  render() {
    return (
      <>
        {/* {console.log('vedant')} */}
        {/* <MainStackNavigator></MainStackNavigator> */}
        {/* <PaymentDetails></PaymentDetails> */}
        <LanguageStackNavigator></LanguageStackNavigator>
      </>
    )
  }
}
// console.disableYellowBox = true

const styles = StyleSheet.create({
  my: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center',
  }
});
