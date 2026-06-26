import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProgramDetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const {programId} = route.params;

  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProgramDetails();
  }, []);

  const getProgramDetails = async () => {
    try {
      const response = await fetch(
        `https://gym-fitness-backend-lnmr.onrender.com/api/programs/${programId}`,
      );

      const json = await response.json();
      console.log('Program Details:', json);

      setProgram(json); // 👈 your API returns direct object
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#ff6a45" />
      </View>
    );
  }

  if (!program) {
    return (
      <View style={styles.loader}>
        <Text style={{color: '#fff'}}>Program not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}>
      {/* IMAGE */}
      <Image source={{uri: program.image}} style={styles.image} />

      {/* TITLE */}
      <Text style={styles.title}>{program.title}</Text>

      {/* BADGES ROW */}
      <View style={styles.row}>
        <Text style={styles.badge}>{program.difficulty}</Text>
        <Text style={styles.badge}>{program.durationWeeks} Weeks</Text>
        <Text style={styles.badge}>{program.frequencyPerWeek}x / Week</Text>
      </View>

      {/* DESCRIPTION */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{program.fullDescription}</Text>

      {/* BENEFITS */}
      <Text style={styles.sectionTitle}>Benefits</Text>
      {program.benefits.map((item, index) => (
        <Text key={index} style={styles.listItem}>
          • {item}
        </Text>
      ))}

      {/* EXERCISES */}
      <Text style={styles.sectionTitle}>Exercises</Text>
      {program.exercisesList.map(ex => (
        <View key={ex._id} style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>{ex.name}</Text>
          <Text style={styles.exerciseInfo}>
            {ex.sets} sets • {ex.reps} reps
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProgramDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 16,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  loader: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    marginBottom: 15,
    resizeMode: 'cover',
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },

  badge: {
    backgroundColor: '#ff6a4520',
    color: '#ff6a45',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 12,
    fontWeight: '600',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15,
  },

  description: {
    color: '#bbb',
    fontSize: 14,
    lineHeight: 20,
  },

  listItem: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 4,
  },

  exerciseCard: {
    backgroundColor: '#141414',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#222',
  },

  exerciseName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },

  exerciseInfo: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },

  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: '#00000080',
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
