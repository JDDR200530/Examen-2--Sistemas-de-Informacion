import { View, Text } from 'react-native'
import React from 'react'
import '../global.css'
import { useFonts } from 'expo-font'
import { globalStyles } from '@/style/global-styles'
import { Slot } from 'expo-router'
import { StatusBar} from 'expo-status-bar'
const _layout = () => {
  const [] = useFonts ({
    Space: require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  return(
    <View style={globalStyles.background}>
      <Slot/>
      <StatusBar style='light'/>
    </View>
  )
}
export default _layout