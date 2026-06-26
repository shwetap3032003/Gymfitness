import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomDrawerContent(props) {
  const {navigation} = props;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#0d0d0d',
        paddingTop: 30,
      }}>
      <DrawerItem
        label="Home"
        labelStyle={{color: '#fff'}}
        icon={() => <Icon name="home-outline" size={24} color="#fff" />}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'Home',
          })
        }
      />

      <DrawerItem
        label="Programs"
        labelStyle={{color: '#fff'}}
        icon={() => <Icon name="barbell-outline" size={24} color="#fff" />}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'Programs',
          })
        }
      />

      <DrawerItem
        label="Store"
        labelStyle={{color: '#fff'}}
        icon={() => <Icon name="cart-outline" size={24} color="#fff" />}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'Store',
          })
        }
      />

      <DrawerItem
        label="Tools"
        labelStyle={{color: '#fff'}}
        icon={() => <Icon name="construct-outline" size={24} color="#fff" />}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'Tools',
          })
        }
      />

      <DrawerItem
        label="Profile"
        labelStyle={{color: '#fff'}}
        icon={() => <Icon name="person-outline" size={24} color="#fff" />}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'Profile',
          })
        }
      />

      <DrawerItem
        label="Membership Plan"
        labelStyle={{color: '#fff'}}
        icon={() => <Icon name="card-outline" size={24} color="#fff" />}
        onPress={() => navigation.navigate('Membership')}
      />

      <DrawerItem
        label="Recipes"
        labelStyle={{color: '#fff'}}
        icon={({color, size}) => (
          <Icon name="restaurant-outline" color="#fff" size={24} />
        )}
        onPress={() => navigation.navigate('Recipes')}
      />

      <DrawerItem
        label="About"
        labelStyle={{color: '#fff'}}
        icon={() => (
          <Icon name="information-circle-outline" size={24} color="#fff" />
        )}
        onPress={() => navigation.navigate('About')}
      />

      <DrawerItem
        label="Contact Us"
        labelStyle={{color: '#fff'}}
        icon={() => <Icon name="call-outline" size={24} color="#fff" />}
        onPress={() => navigation.navigate('Contact Us')}
      />
    </DrawerContentScrollView>
  );
}
