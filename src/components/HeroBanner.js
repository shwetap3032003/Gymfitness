import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const HeroBanner = () => {
  return (
    <LinearGradient
      colors={['#ff6a45', '#41221f']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      
      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          Summer Shred 2025
        </Text>
      </View>

      <Text style={styles.title}>
        Transform your{'\n'}body in 12 weeks
      </Text>

      <Text style={styles.subtitle}>
        Expert-led · Gym + Home · All levels
      </Text>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Join Now →
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.offer}>
            Offer ends in
          </Text>

          <Text style={styles.timer}>
            02:00:19
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HeroBanner;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 30,
    padding: 22,
  },

  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 15,
  },

  subtitle: {
    color: '#f5f5f5',
    marginTop: 10,
  },

  bottom: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 15,
  },

  buttonText: {
    color: '#ff6a45',
    fontWeight: '700',
  },

  offer: {
    color: '#ddd',
    fontSize: 12,
  },

  timer: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
});