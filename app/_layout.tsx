import { View, Text } from 'react-native'
import React from 'react'
import '../global.css'

const _layout = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 10, color: 'red' }}>layout</Text>
    </View>
  )
}

export default _layout