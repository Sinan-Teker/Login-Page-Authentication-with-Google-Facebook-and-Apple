import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './source/navigation';

const App = () => {
  return (
    <SafeAreaView style={style.root} >
      <Navigation/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create ({
  root: {
    backgroundColor: 'white',
    flex: 1,
  }
});
export default App