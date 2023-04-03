import React,{} from 'react'
import {createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Location from '../screen/mainscreens/Location';
import Setting from '../screen/mainscreens/Setting';


const Tab = createBottomTabNavigator();

export default function Tabs() {

  return (
   
      <Tab.Navigator initialRouteName="Location"
      tabBarOptions={{
         keyboardHidesTabBar: true,
    activeTintColor:'#9400D3',
    inactiveTintColor: '#cdcdcd',
    labelStyle: {  paddingTop: 2,paddingBottom:2},
      }}>
        <Tab.Screen name="Location" component={Location}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({  focused }) => (
            <Ionicons name={focused ? "location-sharp" : "location-outline"} color={'#9400D3'} size={26} />
          ),
        }} />
        <Tab.Screen name="History" component={Setting}
         options={{
          tabBarLabel: 'History',
          tabBarIcon: ({  focused }) => (
            <Ionicons name={focused ? "arrow-back-circle" : "arrow-back-circle-outline"} color={'#9400D3'} size={26} />
          ),
        }}
         />
        
      </Tab.Navigator>
   
  );
}