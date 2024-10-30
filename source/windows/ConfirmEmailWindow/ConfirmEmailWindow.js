import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Input from '../../comps/Input';
import Button from '../../comps/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ConfirmEmailWindow = () => {
  const {control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onPressConfirm = data => {
    console.warn(data)
    navigation.navigate('Home')
  }

  const onPressResendCode = () => {
    console.warn("Resend code")
  }
  
  const onPressBackSignIn = () => {
    console.warn("Back to Sign In")
    navigation.navigate('SignIn');
  }

  return (
    <View style={style.root}>
      <Text style={style.headText}>Confirm your email</Text>

      <Input name="code" control={control} placeholder="Enter your confirmation code" rıles={{required: 'Confirmation code is required', minLength: {value: 6, message:'Username should be minimum 6 characters long',}}} secureTextEntry={false} />

      <Button text="Confirm" onPress={handleSubmit(onPressConfirm)} />

      <Button text="Resend code" onPress={onPressResendCode} type="EmailConfirm" />
      <Button text="Back to sign in" onPress={onPressBackSignIn} type="ForgotPass" />      
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001100',
    margin: 10,
  },
  text: {
    color: 'gray',
    fontSize: 14,
    marginVertical: 8,
  }
});

export default ConfirmEmailWindow