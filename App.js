import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ArticlesScreen from './src/screens/ArticlesScreen';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Articles: ArticlesScreen
})

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
