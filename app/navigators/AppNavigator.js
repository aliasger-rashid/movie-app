import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from '@services/NavigationService';

// import SplashScreen from '@scenes/SplashScreen/';
// import ExampleScreen from '@scenes/ExampleScreen';
import HomeScreen from '@scenes/HomeScreen';
const Stack = createStackNavigator();

export default function App() {
  useEffect(
    () => () => {
      isReadyRef.current = false;
    },
    []
  );
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
