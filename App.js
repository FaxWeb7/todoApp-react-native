import HomeScreen from './screens/HomeScreen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'mt-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
          'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
          'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
        })
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}><HomeScreen /></View>
  )
}