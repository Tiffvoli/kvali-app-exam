import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import DiscoverScreen from './DiscoverScreen';
import EventsScreen from './EventsScreen';
import EventRoomScreen from './EventRoomScreen';
import CreateEventScreen from './CreateEventScreen';
import EditEventScreen from './EditEventScreen';

const Stack = createNativeStackNavigator();
const DiscoverStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerTintColor: '#5050A5',
            headerTitleStyle: {
               fontFamily: 'Teko-Medium',
               fontSize: 26,
            },
         }}>
         <Stack.Screen
            name="DiscoverScreen"
            component={DiscoverScreen}
            options={{
               headerTitle: 'DISCOVER',
            }}
         />
         <Stack.Screen
            name="EventsScreen"
            component={EventsScreen}
            options={{
               headerTitle: 'EVENTS',
               headerBackTitle: '',
            }}
         />
         <Stack.Screen
            name="CreateEventScreen"
            component={CreateEventScreen}
            options={{
               headerTitle: 'NEW EVENT',
               headerBackTitle: '',
            }}
         />
         <Stack.Screen
            name="EventRoomScreen"
            component={EventRoomScreen}
            options={({ route }) => ({
               headerTitle: route.params?.eventTitle,
               headerBackTitle: '',
            })}
         />
         <Stack.Screen
            name="EditEventScreen"
            component={EditEventScreen}
            options={({ route }) => ({
               headerTitle: route.params?.eventTitle,
               headerBackTitle: '',
            })}
         />
      </Stack.Navigator>
   );
};

export default DiscoverStack;
