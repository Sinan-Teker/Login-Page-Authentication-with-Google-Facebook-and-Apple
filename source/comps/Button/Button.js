import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Button = ({ onPress, text, type="Primary", bgroundColor, fontColor }) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, styles[`root_${type}`], bgroundColor ? {backgroundColor: bgroundColor} : {}, fontColor ? {color: fontColor} : {}]}>
      <Text style={[styles.text, styles[`text_${type}`], bgroundColor ? {backgroundColor: bgroundColor} : {}, fontColor ? {color: fontColor} : {}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '50%',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
  },

  root_Primary: {
    backgroundColor: '#38b6ff',
    borderRadius: 5
  },

  root_ForgotPass: {

  },

  root_EmailConfirm: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  text: {
    color: 'white',
    fontWeight: 'bold'
  },

  text_ForgotPass: {
    color: 'gray',
  },

  text_CreateAccount: {
    width: '120%',
    color: 'gray',
  },
  text_SignInAccount: {
    width: '100%',
    color: 'gray', 
  },

  text_EmailConfirm: {
    color: '#3B71F3',
  }
})

export default Button