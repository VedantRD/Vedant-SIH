import React, { Component } from 'react';
import { Button, Container, Content } from 'native-base'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, YellowBox } from 'react-native';
import LanguageStackNavigator from './components/routes/LanguageStackNavigator'
YellowBox.ignoreWarnings(['Warning:...'])
export default class App extends Component {
  render() {
    return (
      <>
        <LanguageStackNavigator></LanguageStackNavigator>
      </>
    )
  }
}
console.disableYellowBox = true
