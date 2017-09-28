import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter  from './Counter';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Counter color={'lightblue'} size={16} />
       <Counter color={'skyblue'} size={32} />
       <Counter color={'steelblue'} size={80} />
       <Counter color={'darkblue'} size={140} />
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
