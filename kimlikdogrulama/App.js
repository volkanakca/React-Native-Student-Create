/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  from 'react';
import Main from './src/Main';
import firebase from 'firebase';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';




const App: () => React$Node = () => {

  return (
  <View>
  <Main />
  </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
