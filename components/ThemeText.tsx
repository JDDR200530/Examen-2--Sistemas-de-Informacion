import { View, Text, TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/style/global-styles';


interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

const ThemeText = ({children, variant = 'h2', ...rest} : Props) => {
  return (
    <View>
      <Text style={[
        {
            color: 'white',
            fontFamily: 'SpaceMono-Regular'
        },
        variant === 'h1' && globalStyles.Conteiner,
        variant === 'h2' && globalStyles.Conteiner,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
      >{children}</Text>
    </View>
  )
}

export default ThemeText