import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ParisScreen from './screens/ParisScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import SkulpturerScreen from './screens/SkulpturerScreen';
import ArboretumScreen from './screens/ArboretumScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Hem') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Paris') {
            iconName = focused ? 'ios-color-palette' : 'ios-color-palette-outline';
          } else if (route.name === 'Skulpturer') {
            iconName = focused ? 'ios-aperture' : 'ios-aperture-outline';
          } else if (route.name === 'Arboretum') {
            iconName = focused ? 'ios-leaf' : 'ios-leaf-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Hem" component={HomeScreen} />
        <Tab.Screen name="Paris" component={ParisScreen} />
        <Tab.Screen name="Skulpturer" component={SkulpturerScreen} />
        <Tab.Screen name="Arboretum" component={ArboretumScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
