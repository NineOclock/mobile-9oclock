import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>대박!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
