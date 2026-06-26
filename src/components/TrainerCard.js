import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TrainerCard = ({initials, name, specialty, rating, bgColor}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.avatar, {backgroundColor: bgColor}]}>
        <Text style={styles.initials}>{initials}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.specialty}>{specialty}</Text>

      <Text style={styles.rating}>⭐⭐⭐⭐⭐ {rating}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrainerCard;

const styles = StyleSheet.create({
  card: {
    width: 155,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#2c2c2c',
    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  initials: {
    color: '#ff8a50',
    fontSize: 22,
    fontWeight: '700',
  },

  name: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 14,
  },

  specialty: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },

  rating: {
    color: '#FFC107',
    marginTop: 10,
    fontWeight: '600',
  },

  button: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#ff6a45',
    borderRadius: 12,
    width: '100%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ff6a45',
    fontWeight: '600',
  },
});
