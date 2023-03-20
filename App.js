import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'

const fonts = () => Font.loadAsync({
  'mt-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
})

export default function App() {
  const [font, setFont] = useState(false)
  if (font) {
    return <HomeScreen /> 
  } else {
    return <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={(e) => console.log(e)} /> 
  }
}