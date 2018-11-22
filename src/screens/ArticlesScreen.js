import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class ArticlesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is my Articles screen</Text>
      </View>
    );
  }
}

export default ArticlesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

