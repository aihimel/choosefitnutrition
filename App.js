import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './Components/Home';
import Allergy from './Components/Allergy';
import Meal from './Components/Meal';
import Payment from './Components/Payment';
import Account from './Components/Account';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Meal"
          component={Meal}
          options={{'title': 'Meal'}}
        />

        <Stack.Screen 
          name="Allergy"
          component={Allergy}
          options={{'title': 'Allergy'}}
        />
        
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{'title': 'Home'}}
        />
        <Stack.Screen 
          name="Payment"
          component={Payment}
          options={{'title': 'Payment'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
