import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput } from 'react-native';
//import React, { useState } from 'react';
import Logo from '/Users/steker/source/repos/ReactNativeProject/AwesomeProject/assets/images/SinanTeker.png';
import Input from '../../comps/Input';
import Button from '../../comps/Button';
import SocialSignInButtons from '../../comps/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const SignInWindow = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {control, handleSubmit, formState: {errors}} = useForm();

  console.log(errors);

  const onPressSignIn = data => {
    console.log(data);
    console.warn("Sign In");

    navigation.navigate('HomeScreen') ;
  }

  const onPressForgotPass = () => {
    console.warn("Forgot Password");

    navigation.navigate('ForgotPassword');
  }

  const onPressCreateAccount = () => {
    console.warn("Create Account")

    navigation.navigate('SignUp');
  }

  return (
    <View style={style.root}>
      <Image source={Logo} style={[style.logo, { height: height * 0.3 }]} resizeMode="contain" />

      <Input name="Username" placeholder="Username" control={control} rules={{required: 'Username is required'}} secureTextEntry={false} />
      <Input name="Password" placeholder="Password" control={control} rules={{required: 'Password is required', minLength: {value: 6, message: 'Password should be minimum 6 characters long'}}} secureTextEntry={true} />

      <Button text="Sign In" onPress={handleSubmit(onPressSignIn)} />
      <Button text="Forgot Password" onPress={onPressForgotPass} type="ForgotPass"/>
      <SocialSignInButtons />
      <Button text="Don't have an account? Create one" onPress={onPressCreateAccount} type="CreateAccount" />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    height: 200
  }
});

export default SignInWindow