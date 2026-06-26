import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MembershipScreen = () => {
  const navigation = useNavigation();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = async () => {
    try {
      const response = await fetch(
        'https://gym-fitness-backend-lnmr.onrender.com/api/plan',
      );

      const json = await response.json();

      console.log(json);

      if (json.success) {
        setPlans(json.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderPlan = ({item}) => {
    return (
      <>
        <View style={[styles.card, item.isPopular && styles.popularCard]}>
          {item.isPopular && (
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>MOST POPULAR</Text>
            </View>
          )}

          <Text style={styles.planName}>{item.name}</Text>

          <Text style={styles.price}>{item.priceLabel}</Text>

          <Text style={styles.description}>{item.description}</Text>

          {item.savingsLabel !== '' && (
            <Text style={styles.saving}>{item.savingsLabel}</Text>
          )}

          <View style={{marginTop: 20}}>
            {item.features.map(feature => (
              <View key={feature._id} style={styles.featureRow}>
                <Text
                  style={[
                    styles.featureIcon,
                    {
                      color: feature.included ? '#22c55e' : '#ef4444',
                    },
                  ]}>
                  {feature.included ? '✔' : '✖'}
                </Text>

                <Text
                  style={[
                    styles.featureText,
                    !feature.included && {
                      color: '#666',
                      textDecorationLine: 'line-through',
                    },
                  ]}>
                  {feature.name}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </>
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
      <View style={{flexDirection: 'row', margin: 15, gap: 10,marginTop: 10}}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ff6a45'}}>
          MemberShip Plan
        </Text>
      </View>
      <FlatList
        data={plans}
        keyExtractor={item => item._id}
        renderItem={renderPlan}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MembershipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },

  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    color: '#ff6a45',
    fontWeight: 'bold',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
  },

  card: {
    backgroundColor: '#181818',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#aaa',
  },

  popularCard: {
    borderColor: '#6d45ff',
    borderWidth: 2,
  },

  popularBadge: {
    alignSelf: 'flex-end',
    backgroundColor: '#6d45ff',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 15,
  },

  popularText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 11,
  },

  planName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  price: {
    color: '#6d45ff',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },

  description: {
    color: '#aaa',
    marginTop: 10,
    lineHeight: 20,
    fontSize: 14,
  },

  saving: {
    color: '#22c55e',
    marginTop: 8,
    fontWeight: '700',
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  featureIcon: {
    fontSize: 16,
    width: 25,
  },

  featureText: {
    color: '#fff',
    fontSize: 15,
    flex: 1,
  },

  button: {
    marginTop: 20,
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
