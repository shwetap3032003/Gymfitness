import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TrialBanner = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Start your free trial</Text>

        <Text style={styles.subtitle}>7 days free · Cancel anytime</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Try Free →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrialBanner;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#ff6a45',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  subtitle: {
    color: '#aaa',
    marginTop: 5,
  },

  button: {
    backgroundColor: '#ff6a45',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 14,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
