/**
 * @format
 * @flow
 */
import React from 'react';
import { Button, Container, Content } from 'native-base'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView>
        <View>
          <Login></Login>
        </View>
      </SafeAreaView> */}
      <Container>
        {/* <Login></Login> */}
        <Register></Register>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  my: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
