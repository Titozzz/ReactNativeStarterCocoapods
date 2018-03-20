import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class ReactNativeStarterCocoapods extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    color: "#FF3245",
  }
});

// Module name
AppRegistry.registerComponent('ReactNativeStarterCocoapods', () => ReactNativeStarterCocoapods);
