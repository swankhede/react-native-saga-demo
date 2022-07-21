import React, { Component } from 'react'
import SignUp from './src/component/SignUp'
import store from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/component/HomeScreen'
import Counter from './src/component/Counter';
import DetailsScreen from './src/component/DetailsScreen';

import { NativeModules, Button, SafeAreaView } from 'react-native';

const NewModuleButton = () => {
  const { CalendarModule } = NativeModules;
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};




const App = () => {
  const Stack=createNativeStackNavigator()

  return (
  
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Signup' component={SignUp}/>
    <Stack.Screen name='Home'component={HomeScreen} />
    <Stack.Screen name='Details'component={DetailsScreen} />
  
    </Stack.Navigator>
  
  </NavigationContainer> 

  
  )
}

export default App