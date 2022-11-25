import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Logo from '/Users/Sinan Teker/Desktop/Authentication/assets/images/SinanTeker.png';
import Input from '../../comps/Input';
import Button from '../../comps/Button';

const SignInWindow = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const onPressSignIn = () => {
    console.warn("Sign In");
  }

  const onPressForgotPass = () => {
    console.warn("Forgot Password");
  }

  const onPressFacebookLogin = () => {
    console.warn("Login Facebook");
  }

  const onPressGoogleLogin = () => {
    console.warn("Login Google");
  }

  const onPressAppleLogin = () => {
    console.warn("Login Apple");
  }

  return (
    <View style={style.root}>
      <Image source={Logo} style={[style.logo, { height: height * 0.3 }]} resizeMode="contain" />

      <Input placeholder="Username" value={Username} setValue={setUsername} secureTextEntry={false} />
      <Input placeholder="Password" value={Password} setValue={setPassword} secureTextEntry={true} />

      <Button text="Sign In" onPress={onPressSignIn} />
      <Button text="Forgot Password" onPress={onPressForgotPass} type="ForgotPass"/>
      <Button bgroundColor="#E7EAF4" fontColor="#4765A9" text="Sign In Facebook" onPress={onPressFacebookLogin}/>
      <Button bgroundColor="#FAE9EA" fontColor="#DD4D44" text="Sign In Google" onPress={onPressGoogleLogin}/>
      <Button bgroundColor="#E3E3E3" fontColor="#363636" text="Sign In Apple" onPress={onPressAppleLogin}/>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    height: 200
  }
});

export default SignInWindow
