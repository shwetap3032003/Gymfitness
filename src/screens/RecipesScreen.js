import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const RecipesScreen = () => {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await fetch(
        'https://gym-fitness-backend-lnmr.onrender.com/api/recipes',
      );

      const json = await response.json();

      if (json.success) {
        setRecipes(json.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderRecipe = ({item}) => {
    return (
      <View style={styles.card}>
        <Image
          source={{uri: item.imageUrl}}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View
            style={[
              styles.badge,
              {
                backgroundColor:
                  item.categoryColor === 'green' ? '#22c55e' : '#ef4444',
              },
            ]}>
            <Text style={styles.badgeText}>{item.category}</Text>
          </View>

          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.info}>🔥 {item.calories} kcal</Text>

            <Text style={styles.info}>💪 {item.protein} g</Text>

            <Text style={styles.info}>⏱ {item.time} min</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('RecipeDetails', {
                recipeId: item._id,
              })
            }>
            <Text style={styles.buttonText}>View Recipe</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#ff6a45" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', margin: 15, gap: 10}}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={{color: 'blue', fontSize: 22, fontWeight: 'bold'}}>
          Recipes
        </Text>
      </View>
      <FlatList
        data={recipes}
        keyExtractor={item => item._id}
        renderItem={renderRecipe}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default RecipesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
  },

  card: {
    backgroundColor: '#181818',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  image: {
    width: '100%',
    height: 220,
  },

  content: {
    padding: 16,
  },

  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
  },

  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },

  description: {
    color: '#bbb',
    lineHeight: 20,
    marginBottom: 15,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  info: {
    color: '#fff',
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#ff6a45',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
