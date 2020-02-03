/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Button, Container, Content } from 'native-base'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import MainRouter from './components/routes/MainRouter';
import TransportOptions from './components/screens/farmerScreens/TransportOptions';
// import FormBase from './components/screens/wareownerScreens/FormBase';
import BookDetails from './components/screens/farmerScreens/BookDetails'
import MainStackNavigator from './components/routes/MainStackNavigator'
const niceBlue = '#1E8AE9'
export default class App extends Component {
  render() {
    return (
      <>
        {console.log('vedant')}
        <MainStackNavigator></MainStackNavigator>
      </>
    )
  }
}

const styles = StyleSheet.create({
  my: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center',
  }
});
