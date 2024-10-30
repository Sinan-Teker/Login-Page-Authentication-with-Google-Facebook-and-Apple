import { View, TextInput, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const Input = ({control, name, rules ={} , placeholder, secureTextEntry}) => {  
  return (    
      <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View 
          style={[
            input.root, 
            {borderColor: error ? 'red' : '#E8E8E8'},
            ]}>
            <TextInput 
            value={value} 
            onChangeText={onChange} 
            onBlur={onBlur} 
            placeholder={placeholder} 
            style={input.design} 
            secureTextEntry={secureTextEntry} /> 
          </View>
          {error && (<Text style={{color: 'red', width: '75%'}}>{error.message || 'Error'}</Text>)}       
        </> )}
      />
  )
}

const input = StyleSheet.create({
    root:{        
        backgroundColor: "#FBFBFB",
        width: '75%',

        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,

        marginVertical: 5
    },
    design: { 
    },
})

export default Input