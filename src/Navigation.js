import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import your actual HomeScreen
import HomeScreen from './screens/HomeScreen';
import ProgramsScreen from './screens/ProgramsScreen';
import StoreScreen from './screens/StoreScreen';
import ToolsScreen from './screens/ToolsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProgramDetailsScreen from './screens/ProgramDetailsScreen';

// Stand-in layouts for other navigation tray buttons
<ProgramsScreen />;
<StoreScreen />;
<ToolsScreen />;
<ProfileScreen />;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProgramStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProgramsList"
        component={ProgramsScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProgramDetails"
        component={ProgramDetailsScreen}
        options={{
          title: 'Program Details',
          headerStyle: {
            backgroundColor: '#0d0d0d',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0d0d0d',
          //   borderTopWidth: 1,
          borderTopColor: '#1a1a1a',
          height: 75,
          paddingBottom: 12,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#ff6a45',
        tabBarInactiveTintColor: '#888888',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Text style={{fontSize: 22}}>🏠</Text>
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Programs"
        component={ProgramStack}
        options={{
          tabBarLabel: 'Programs',
          headerShown: false,
          tabBarIcon: () => <Text style={{fontSize: 22}}>💪</Text>,
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: () => <Text style={{fontSize: 22}}>🛒</Text>,
        }}
      />
      <Tab.Screen
        name="Tools"
        component={ToolsScreen}
        options={{
          tabBarLabel: 'Tools',
          tabBarIcon: () => <Text style={{fontSize: 22}}>🧮</Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Text style={{fontSize: 22}}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ff6a45',
    position: 'absolute',
  },
});
