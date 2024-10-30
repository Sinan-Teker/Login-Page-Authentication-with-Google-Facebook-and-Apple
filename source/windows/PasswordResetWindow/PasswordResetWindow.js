import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Input from '../../comps/Input';
import Button from '../../comps/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'; 


const PasswordResetWindow = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onPressSubmit = data => {
    console.warn(data);

    navigation.navigate('HomeScreen');
  }
  
  const onPressBackSignIn = () => {
    console.warn("Back to Sign In")

    navigation.navigate('SignIn');
  }

  return (
    <View style={style.root}>
      <Text style={style.headText}>Reset your password</Text>

      <Input name="code" control={control} placeholder="Confirmation code" rules={{required: 'Confirmation code is required'}} secureTextEntry={false} />
      <Input name="new_password" control={control} placeholder="New password" rules={{required: 'Confirmation code is required', minLength: {value: 6, message: 'Password should be minimum 6 characters long'} }} secureTextEntry={false} />

      <Button text="Submit" onPress={handleSubmit(onPressSubmit)} />

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

export default PasswordResetWindow