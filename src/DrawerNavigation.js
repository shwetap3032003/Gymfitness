import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Navigation from './Navigation';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import MembershipScreen from './screens/MembershipScreen';

import RecipesScreen from './screens/RecipesScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function RecipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecipesList"
        component={RecipesScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
        options={{
          title: 'Recipe Details',
          headerStyle: {
            backgroundColor: '#0d0d0d',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#0d0d0d',
          width: 280,
        },
      }}>
      <Drawer.Screen
        name="Main"
        component={Navigation}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />

      <Drawer.Screen name="Membership" component={MembershipScreen} />

      <Drawer.Screen name="Recipes" component={RecipeStack} />

      <Drawer.Screen name="About" component={AboutScreen} />

      <Drawer.Screen name="Contact Us" component={ContactScreen} />
    </Drawer.Navigator>
  );
}
