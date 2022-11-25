import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import SignInWindow from './source/windows/SignInWindow';

const AuthorizeApp = () => {
  return (
    <SafeAreaView style={style.root} >
      <SignInWindow/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create ({
  root: {
    backgroundColor: 'white',
    flex: 1,
  }
});
export default AuthorizeApp;