import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Banner';
import HeroBanner from '../components/HeroBanner';
import StatsCard from '../components/StatsCard';
import ServiceCard from '../components/ServiceCard';
import ProgramCard from '../components/ProgramCard';
import TrainerCard from '../components/TrainerCard';
import TestimonialCard from '../components/TestimonialCard';
import TrialBanner from '../components/TrialBanner';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const services = [
    {id: 1, icon: '🏋️', title: 'Gym', active: true},
    {id: 2, icon: '🔥', title: 'HIIT'},
    {id: 3, icon: '🧘', title: 'Yoga'},
    {id: 4, icon: '🥗', title: 'Nutrition'},
    {id: 5, icon: '💊', title: 'Supplements'},
    {id: 6, icon: '🏃', title: 'Cardio'},
  ];

  const programs = [
    {
      id: 1,
      icon: '🏋️',
      title: 'HIIT Fat Burner',
      weeks: 8,
      level: 'Intermediate',
      price: '₹1,999',
      tag: 'Popular',
      imageColor: '#4A2A24',
    },
    {
      id: 2,
      icon: '💪',
      title: 'Muscle Builder Pro',
      weeks: 12,
      level: 'Advanced',
      price: '₹2,499',
      tag: 'New',
      imageColor: '#163C2F',
    },
    {
      id: 3,
      icon: '🧘',
      title: '30-Day Starter',
      weeks: 4,
      level: 'Beginner',
      price: 'Free',
      tag: 'Free',
      imageColor: '#2E2B4D',
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        'Lost 8kg in 10 weeks with the HIIT program. The trainer sessions made all the difference.',
      initials: 'VK',
      name: 'Vikram K.',
      result: 'Lost 8kg · HIIT Program',
    },
    {
      id: 2,
      quote:
        'Dropped 6kg in 8 weeks and built consistency. Amazing coaching support!',
      initials: 'RS',
      name: 'Rohan S.',
      result: 'Lost 6kg · Fat Loss',
    },
    {
      id: 3,
      quote:
        'Best transformation program I’ve joined. Energy levels improved a lot.',
      initials: 'AM',
      name: 'Aman M.',
      result: 'Fitness Gain · Strength',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>

        <Header />

        <HeroBanner />

        {/* Stats */}
        <View style={styles.statsContainer}>
          <StatsCard number="5K+" label="Members" />

          <StatsCard number="12" label="Branches" />

          <StatsCard number="8yr" label="Experience" />
        </View>

        {/* Services */}
        <Text style={styles.sectionTitle}>Services</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.servicesContainer}>
          {services.map(item => (
            <View key={item.id} style={{marginRight: 12}}>
              <ServiceCard
                icon={item.icon}
                title={item.title}
                active={item.active}
              />
            </View>
          ))}
        </ScrollView>

        {/* Featured Programs */}
        <View style={styles.programHeader}>
          <Text style={styles.sectionTitle}>Featured Programs</Text>

          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        {programs.map(item => (
          <ProgramCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            weeks={item.weeks}
            level={item.level}
            price={item.price}
            tag={item.tag}
            imageColor={item.imageColor}
          />
        ))}

        <Text style={styles.sectionTitle}>Top Trainers</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}>
          <TrainerCard
            initials="RK"
            name="Rahul Khatri"
            specialty="Strength & HIIT"
            rating="4.9"
            bgColor="#5b4422"
          />

          <TrainerCard
            initials="PS"
            name="Priya Shah"
            specialty="Yoga & Wellness"
            rating="4.8"
            bgColor="#184538"
          />

          <TrainerCard
            initials="AM"
            name="Amit Mehta"
            specialty="Fat Loss Coach"
            rating="4.9"
            bgColor="#3d315d"
          />
        </ScrollView>

        <Text style={styles.sectionTitle}>Member Results</Text>

        <View style={{height: 190}}>
          <FlatList
            data={testimonials}
            horizontal
            pagingEnabled
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={{width}}>
                <View style={{paddingHorizontal: 15}}>
                  <TestimonialCard data={item} />
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        <TrialBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },

  content: {
    paddingBottom: 30,
  },

  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 10,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
  },

  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  programHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  viewAll: {
    color: '#ff6a45',
    marginRight: 20,
    marginTop: 20,
    fontWeight: '600',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 10,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 18,
    backgroundColor: '#ff6a45',
  },
});
