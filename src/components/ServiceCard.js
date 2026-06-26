import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ServiceCard = ({icon, title, active}) => {
  return (
    <TouchableOpacity style={[styles.card, active && styles.activeCard]}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeCard: {
    backgroundColor: '#ff6a45',
  },

  icon: {
    fontSize: 24,
  },

  title: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
});
