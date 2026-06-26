import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatsCard = ({number, label}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{number}</Text>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  number: {
    color: '#ff6a45',
    fontSize: 26,
    fontWeight: '700',
  },

  label: {
    color: '#bbb',
    marginTop: 5,
  },
});
