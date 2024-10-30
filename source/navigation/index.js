import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWindow from '../windows/SignInWindow';
import SignUpWindow from '../windows/SignUpWindow';
import ConfirmEmailWindow from '../windows/ConfirmEmailWindow';
import ForgotPasswordWindow from '../windows/ForgotPasswordWindow';
import PasswordResetWindow from '../windows/PasswordResetWindow';
import HomeScreen from '../windows/HomeWindow';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInWindow} />
        <Stack.Screen name="SignUp" component={SignUpWindow} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailWindow} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordWindow} />
        <Stack.Screen name="NewPassword" component={PasswordResetWindow} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation