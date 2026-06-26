import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const StoreScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  // 1. Added searchQuery state variable
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Protein',
    'Vitamins',
    'Pre-workout',
    'Gear',
    'Recovery',
  ];

  const productsData = [
    {
      id: '1',
      title: 'Whey Pro Isolate',
      brand: 'MuscleBlaze',
      weight: '1kg',
      price: '₹2,199',
      originalPrice: '₹2,799',
      discount: '21% off',
      icon: '🥤',
      bgColor: '#2E1E1C',
      category: 'Protein',
    },
    {
      id: '2',
      title: 'Multivitamin Daily',
      brand: 'HealthKart',
      weight: '60 tabs',
      price: '₹799',
      originalPrice: '₹999',
      discount: '20% off',
      icon: '💊',
      bgColor: '#1A2923',
      category: 'Vitamins',
    },
    {
      id: '3',
      title: 'Pre-Workout Pump',
      brand: 'ON',
      weight: '300g · Blue Razz',
      price: '₹1,499',
      originalPrice: '₹1,899',
      discount: '21% off',
      icon: '⚡',
      bgColor: '#1D242E',
      category: 'Pre-workout',
    },
    {
      id: '4',
      title: 'BCAA Amino Fuel',
      brand: 'AS-IT-IS',
      weight: '250g',
      price: '₹899',
      originalPrice: '₹1,199',
      discount: '25% off',
      icon: '🧴',
      bgColor: '#23202E',
      category: 'Pre-workout',
    },
    {
      id: '5',
      title: 'Resistance Bands',
      brand: 'FitPro Gear ',
      weight: 'Set of 5',
      price: '₹649',
      originalPrice: '₹899',
      discount: '28% off',
      icon: '🏋️',
      bgColor: '2E1E1C',
    },
    {
      id: '6',
      title: 'Creatine Mono',
      brand: 'Optimum',
      weight: '300g',
      price: '₹1,249',
      originalPrice: '₹1,599',
      discount: '22% off',
      icon: '🥗',
      bgColor: '#1A2923',
    },
  ];

  // 2. Filter data dynamically by BOTH selected pill category AND search phrase input
  const filteredProducts = productsData.filter(product => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderProductCard = ({item}) => (
    <View style={styles.card}>
      <View style={[styles.imageContainer, {backgroundColor: item.bgColor}]}>
        <Text style={styles.productIcon}>{item.icon}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.productSubtitle}>
          {item.brand} · {item.weight}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.currentPrice}>{item.price}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
        </View>

        <Text style={styles.discountText}>{item.discount}</Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Store</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={{fontSize: 20}}>🛒</Text>
            <View style={styles.badgeDot} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchCircleButton}>
            <Text style={{fontSize: 16}}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3. Updated Functional Search Bar */}
      <View style={styles.searchBarContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search supplements, gear..."
          placeholderTextColor="#555"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)} // Triggers refilter on keystroke
          editable={true}
          clearButtonMode="while-editing" // Adds built-in clear button for iOS
        />
      </View>

      {/* Categories Filter Horizontal list */}
      <View style={{maxHeight: 50, marginBottom: 15}}>
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

      {/* Grid Subheader Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {searchQuery ? 'Search Results' : 'Best sellers'}
        </Text>
        {!searchQuery && (
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Grid List Product Feed */}
      <FlatList
        data={filteredProducts} // Passing filtered runtime array here
        keyExtractor={item => item.id}
        renderItem={renderProductCard}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{color: '#666', fontSize: 14}}>
              No products match your search.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    marginRight: 16,
    position: 'relative',
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#ff6a45',
    position: 'absolute',
    top: -2,
    right: -2,
  },
  searchCircleButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2c2c2e',
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#1c1c1e',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 46,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2c2c2e',
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 14,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  categoryPill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2c2c2e',
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
    fontSize: 13,
  },
  activeCategoryText: {
    color: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 15,
    marginTop: 5,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  viewAllText: {
    color: '#ff6a45',
    fontSize: 13,
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 30,
  },
  gridRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#141414',
    borderRadius: 16,
    width: '48%',
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  imageContainer: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  productIcon: {
    fontSize: 38,
  },
  infoContainer: {
    padding: 12,
  },
  productTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'serif',
    marginBottom: 2,
  },
  productSubtitle: {
    color: '#666',
    fontSize: 11,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  currentPrice: {
    color: '#ff6a45',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 6,
  },
  originalPrice: {
    color: '#555',
    fontSize: 11,
    textDecorationLine: 'line-through',
  },
  discountText: {
    color: '#1e7a4d',
    fontSize: 11,
    fontWeight: '700',
  },
  addToCartButton: {
    backgroundColor: '#ff6a45',
    marginHorizontal: 12,
    marginBottom: 12,
    paddingVertical: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: '100%',
  },
});
