import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Input from '../../comps/Input';
import Button from '../../comps/Button';
import SocialSignInButtons from '../../comps/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const SignUpWindow = () => {
  const {control, handleSubmit, formState: {errors}, watch} = useForm();

  const pwd = watch('password');

  const navigation = useNavigation();

  const onPressRegister = () => {
    console.warn("Register");
    navigation.navigate('ConfirmEmail');
  }

  const onTermsOfUsePress = () => {
    console.warn("Terms Of Use");
  }

  const onPrivacyPolicyPress = () => {
    console.warn("Privacy Policy");
  }

  const onPressSignInAccount = () => {
    console.warn("Sign In Account")

    navigation.navigate('SignIn');
  }

  return (
    <View style={style.root}>
      <Text style={style.headText}>Create an Account</Text>

      <Input name="username" placeholder="Username" control={control} 
      rules={{required: 'Username is required', 
      minLength: {value: 3, message:'Username should be minimum 3 characters long',},
      maxLength: {value: 25, message: 'Username should be maximum 25 characters long',},
      }} />
      <Input name="email" placeholder="Email" control={control} rules={{required: 'Email is required', pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}} secureTextEntry={false} />
      <Input name="password" placeholder="Password" control={control} 
      rules={{required: 'Password is required', 
        minLength: {value: 6, message:'Password should be minimum 6 characters long',},}}  secureTextEntry={true} />
      <Input name="repeat-password" placeholder="Repeat Password" control={control} rules={{validate: value => value === pwd || 'Password do not match' }} secureTextEntry={true} />

      <Text style={style.text}>By registering, you confirm that you accept our <Text style={style.link}onPress={onTermsOfUsePress}>Terms of Use</Text> and <Text style={style.link} onPress={onPrivacyPolicyPress}>Privacy Policy</Text></Text>
      <Button text="Register" onPress={handleSubmit(onPressRegister)} />
      
      <SocialSignInButtons />

      <Button text="Have an account? Sign In" onPress={onPressSignInAccount} type="SignInAccount" />
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
  },
  link: {
    color: 'yellow',
  }
});

export default SignUpWindow