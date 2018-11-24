import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

// App Navigator
//import AppDrawerNavigator from './src/navigation/navigation';

// Dynamic app navigator
import AppDrawerNavigator from './src/config/map/_navigation';



export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
