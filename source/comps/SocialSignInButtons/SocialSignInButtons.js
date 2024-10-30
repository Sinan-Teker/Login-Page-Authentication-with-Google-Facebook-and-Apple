import { View, Text } from 'react-native'
import React from 'react'
import Button from '../Button'


const SocialSignInButtons = () => {

  const onPressFacebookLogin = () => {
    console.warn("SignIn Facebook");
  }

  const onPressGoogleLogin = () => {
    console.warn("SignIn Google");
  }

  return (
    <>
      <Button bgroundColor="#E7EAF4" fontColor="#4765A9" text="Sign In Facebook" onPress={onPressFacebookLogin}/>
      <Button bgroundColor="#FAE9EA" fontColor="#DD4D44" text="Sign In Google" onPress={onPressGoogleLogin}/>
    </>
  )
}

export default SocialSignInButtons