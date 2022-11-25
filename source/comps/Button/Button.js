import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Button = ({ onPress, text, type="Primary", bgroundColor, fontColor }) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, styles[`root_${type}`]]}>
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

  text: {
    color: 'white',
    fontWeight: 'bold'
  },

  text_ForgotPass: {
    color: 'gray',
  }
})

export default Button