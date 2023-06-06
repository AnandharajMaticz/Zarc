import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({
    navigation
}) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button title='click' onPress={()=> navigation.navigate("Home")}></Button>
    </View>
  )
}

export default Login