import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';

const ProgramsScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [programsData, setProgramsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    'All',
    'Beginner',
    'Intermediate',
    'Advanced',
    'Weight Loss',
    'Muscle Gain',
  ];

  useEffect(() => {
    getPrograms();
  }, []);

  const getPrograms = async () => {
    try {
      const response = await fetch(
        'https://gym-fitness-backend-lnmr.onrender.com/api/programs',
      );

      const json = await response.json();

      console.log('Programs:', json);

      setProgramsData(json.data || []);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter dynamic list items based on active top tab selection
  const filteredPrograms =
    selectedCategory === 'All'
      ? programsData
      : programsData.filter(item => item.categories.includes(selectedCategory));

  const renderProgramCard = ({item}) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <View style={styles.leftSection}>
          <View
            style={[
              styles.difficultyBadge,
              {
                backgroundColor:
                  item.difficulty === 'Beginner'
                    ? '#22c55e20'
                    : item.difficulty === 'Intermediate'
                    ? '#f59e0b20'
                    : '#ef444420',
              },
            ]}>
            <Text
              style={[
                styles.difficultyText,
                {
                  color:
                    item.difficulty === 'Beginner'
                      ? '#22c55e'
                      : item.difficulty === 'Intermediate'
                      ? '#f59e0b'
                      : '#ef4444',
                },
              ]}>
              {item.difficulty}
            </Text>
          </View>

          <Image
            source={{uri: item.image}}
            style={styles.programImage}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.mainContentContainer}>
        <View style={styles.topRow}>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>

        <Text style={styles.cardSubtitle}>📅 {item.durationWeeks} Weeks</Text>

        <Text style={styles.cardSubtitle}>
          💪 {item.totalExercises} Exercises
        </Text>

        <Text style={styles.cardSubtitle}>
          🔥 {item.frequencyPerWeek} Days/Week
        </Text>

        <Text numberOfLines={2} style={styles.description}>
          {item.shortDescription}
        </Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            navigation.navigate('ProgramDetails', {
              programId: item._id,
            })
          }>
          <Text style={styles.actionButtonText}>View Program</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0d0d0d',
        }}>
        <Text style={{color: '#fff'}}>Loading Programs...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header View */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Programs</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{fontSize: 18}}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Pills Category Filter Navigation */}
      <View style={{maxHeight: 50, marginBottom: 10}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}>
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={[styles.categoryPill, isSelected && styles.activePill]}>
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.activeCategoryText,
                  ]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Cards List container feed */}
      <FlatList
        data={filteredPrograms}
        keyExtractor={item => item._id}
        renderItem={renderProgramCard}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProgramsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  categoryPill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 10,
    backgroundColor: '#111',
  },
  activePill: {
    backgroundColor: '#ff6a45',
    borderColor: '#ff6a45',
  },

  categoryText: {
    color: '#aaa',
    fontWeight: '600',
    fontSize: 14,
  },
  activeCategoryText: {
    color: '#fff',
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 10,
  },

  difficultyText: {
    fontSize: 11,
    fontWeight: '700',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },

  mainContentContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
    flexShrink: 1,
  },

  cardSubtitle: {
    color: '#bbb',
    fontSize: 12,
    marginBottom: 4,
  },

  description: {
    color: '#888',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },

  actionButton: {
    backgroundColor: '#ff6a45',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 8,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  actionButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  leftSection: {
    width: 120,
    alignItems: 'center',
  },

  programImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginTop: 8,
  },
});
