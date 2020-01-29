import { enableScreens } from 'react-native-screens';

/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Button, Container, Content } from 'native-base'
import FarmerLogin from './components/auth/FarmerLogin'
import BuyerRegister from './components/auth/BuyerRegister'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
// import { NavigationNativeContainer } from '@react-navigation/native';
import FarmerNavigator from './components/routes/FarmerStackNavigator'

export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <FarmerNavigator></FarmerNavigator>
          {/* <FarmerLogin></FarmerLogin> */}
        </Container>
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
