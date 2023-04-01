import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Tabs from './Tabs'
import Splashscreen from '../screen/Splashscreen';

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={Splashscreen}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Stacknavigation;