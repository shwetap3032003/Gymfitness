import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AppNavigation from './src/Navigation';
import DrawerNavigation from './src/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
