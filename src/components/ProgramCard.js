import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ProgramCard = ({icon, title, weeks, level, price, tag, imageColor}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.image, {backgroundColor: imageColor}]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View style={styles.content}>
        <View
          style={[
            styles.tag,
            tag === 'New' && styles.newTag,
            tag === 'Free' && styles.freeTag,
          ]}>
          <Text
            style={[
              styles.tagText,
              tag === 'New' && styles.newTagText,
              tag === 'Free' && styles.freeTagText,
            ]}>
            {tag === 'Popular' && '🔥 '}
            {tag === 'New' && '✦ '}
            {tag}
          </Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.info}>
          {weeks} weeks · {level}
        </Text>

        <View style={styles.bottomRow}>
          <Text style={[styles.price, price === 'Free' && styles.freePrice]}>
            {price}
          </Text>

          <TouchableOpacity
            style={[styles.button, price === 'Free' && styles.freeButton]}>
            <Text style={styles.buttonText}>
              {price === 'Free' ? 'Start Now' : 'Get Plan'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    minHeight: 125,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 18,
    backgroundColor: '#4a2a24',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  icon: {
    fontSize: 32,
  },

  content: {
    flex: 1,
    marginRight: 10,
  },

  tag: {
    backgroundColor: '#3a2b22',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },

  tagText: {
    color: '#ff6a45',
    fontSize: 11,
    fontWeight: '600',
  },

  newTag: {
    backgroundColor: '#12382d',
  },

  newTagText: {
    color: '#28d17c',
  },

  freeTag: {
    backgroundColor: '#132c4d',
  },

  freeTagText: {
    color: '#4da3ff',
  },

  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 6,
  },

  info: {
    color: '#A0A0A0',
    fontSize: 13,
    marginTop: 4,
  },

  price: {
    color: '#ff6a45',
    fontSize: 20,
    fontWeight: '700',
  },

  button: {
    width: 100,
    height: 40,
    backgroundColor: '#ff6a45',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },

  freeButton: {
    backgroundColor: '#1dbf73',
  },

  freePrice: {
    color: '#1dbf73',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
