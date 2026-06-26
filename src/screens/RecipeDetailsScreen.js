import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const RecipeDetailsScreen = ({route}) => {
  const {recipeId} = route.params;

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    try {
      const response = await fetch(
        `https://gym-fitness-backend-lnmr.onrender.com/api/recipes/${recipeId}`,
      );

      const json = await response.json();

      console.log(json);

      if (json.success) {
        setRecipe(json.data);
      }
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

  if (!recipe) {
    return (
      <View style={styles.loader}>
        <Text style={{color: '#fff'}}>Recipe Not Found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 40}}>
      <Image
        source={{uri: recipe.imageUrl}}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{recipe.category}</Text>
        </View>

        <Text style={styles.title}>{recipe.title}</Text>

        <Text style={styles.description}>
          {recipe.description}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>🔥 {recipe.calories} kcal</Text>

          <Text style={styles.info}>💪 {recipe.protein} g</Text>

          <Text style={styles.info}>⏱ {recipe.time} min</Text>
        </View>

        <Text style={styles.sectionTitle}>Ingredients</Text>

        {recipe.ingredients.map((item, index) => (
          <View key={index} style={styles.listRow}>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Instructions</Text>

        {recipe.instructions.map((item, index) => (
          <View key={index} style={styles.instructionRow}>
            <View style={styles.numberCircle}>
              <Text style={styles.number}>{index + 1}</Text>
            </View>

            <Text style={styles.instructionText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },

  loader: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 260,
  },

  content: {
    padding: 18,
  },

  badge: {
    backgroundColor: '#22c55e',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 15,
  },

  badgeText: {
    color: '#fff',
    fontWeight: '700',
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  description: {
    color: '#bbb',
    marginTop: 12,
    lineHeight: 22,
    fontSize: 15,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 25,
  },

  info: {
    color: '#ff6a45',
    fontWeight: '700',
    fontSize: 15,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    marginTop: 10,
  },

  listRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  dot: {
    color: '#ff6a45',
    fontSize: 20,
    marginRight: 10,
  },

  listText: {
    color: '#ddd',
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },

  instructionRow: {
    flexDirection: 'row',
    marginBottom: 18,
  },

  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff6a45',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  number: {
    color: '#fff',
    fontWeight: '700',
  },

  instructionText: {
    color: '#ddd',
    flex: 1,
    lineHeight: 22,
    fontSize: 15,
  },
});