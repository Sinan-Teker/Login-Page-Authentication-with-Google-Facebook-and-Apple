import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={input.root}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry} style={input.design}/>
    </View>
  )
}

const input = StyleSheet.create({
    root:{        
        backgroundColor: "#FBFBFB",
        width: '75%',

        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,

        marginVertical: 5
    },
    design: { 
    },
})

export default Input