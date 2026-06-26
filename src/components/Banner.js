import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={styles.greeting}>Good morning, Shweta 👋</Text>
          {/* <Text style={styles.name}>Shweta 👋</Text> */}
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={{color: 'white', fontSize: 20}}>🔍</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Text style={{color: 'white', fontSize: 18}}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    color: '#999',
    fontSize: 15,
    marginRight: 20,
  },

  // name: {
  //   color: '#fff',
  //   fontSize: 15,
  //   fontWeight: '700',
  // },

  rightSection: {
    flexDirection: 'row',
  },

  iconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff6a45',
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
