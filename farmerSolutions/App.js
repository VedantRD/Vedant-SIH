/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Button, Container, Content } from 'native-base'
import FarmerLogin from './components/auth/FarmerLogin'
import BuyerRegister from './components/auth/BuyerRegister'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import FarmerNavigator from './components/routes/FarmerStackNavigator'
import FarmerTabNavigator from './components/routes/FarmerTabNavigator'
import MainRouter from './components/routes/MainRouter';
import BuyerNavigator from './components/routes/BuyerStackNavigator'
import GoodStatsCard from './components/screens/farmerScreens/GoodStatsCard'
import AllGoods from './components/screens/farmerScreens/AllGoods';
const niceBlue = '#1E8AE9'
export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          {/* <FarmerNavigator></FarmerNavigator> */}
          {/* <FarmerLogin></FarmerLogin> */}
          {/* <MainRouter></MainRouter> */}
          <BuyerNavigator></BuyerNavigator>
          {/* <GoodStatsCard></GoodStatsCard> */}
          {/* <AllGoods></AllGoods> */}
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
