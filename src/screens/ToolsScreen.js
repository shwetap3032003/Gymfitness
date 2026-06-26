import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const ToolsScreen = () => {
  const navigation = useNavigation();
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(68);

  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  let bmiStatus = 'Normal weight — Great job!';
  let statusColor = '#10b981';
  let dotPosition = '42%';

  if (bmi < 18.5) {
    bmiStatus = 'Underweight — eat more!';
    statusColor = '#2f80ed';
    dotPosition = '12%';
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = 'Overweight — watch your diet';
    statusColor = '#f2c94c';
    dotPosition = '68%';
  } else if (bmi >= 30) {
    bmiStatus = 'Obese — consult a doctor';
    statusColor = '#ff6a45';
    dotPosition = '90%';
  }

  const toolsList = [
    {
      id: 1,
      title: 'BMI Calculator',
      desc: 'Body mass index & ideal weight',
      icon: '⚖️',
      bgColor: '#3b2a24',
    },
    {
      id: 2,
      title: 'Calorie Calculator',
      desc: 'TDEE — daily calorie target',
      icon: '🔥',
      bgColor: '#1c2d24',
    },
    {
      id: 3,
      title: 'Water Intake Tracker',
      desc: 'Daily hydration goal',
      icon: '💧',
      bgColor: '#1a2636',
    },
    {
      id: 4,
      title: 'Body Measurements',
      desc: 'Chest, waist, hips, arms',
      icon: '📏',
      bgColor: '#252136',
    },
    {
      id: 5,
      title: 'Recovery Tracker',
      desc: 'Sleep & recovery planner',
      icon: '💤',
      bgColor: '#33281e',
      isPro: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.position}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Fitness Tools</Text>
        </View>

        <View style={styles.bmiWidget}>
          <Text style={styles.widgetLabel}>Your BMI — quick check</Text>

          <Text style={styles.bmiNumber}>{bmi}</Text>

          <View style={styles.colorBar}>
            <View style={styles.blue} />
            <View style={styles.green} />
            <View style={styles.orange} />
            <View style={styles.red} />

            <View style={[styles.dot, {left: dotPosition}]} />
          </View>

          <View style={styles.labels}>
            <Text style={styles.scaleText}>Underweight</Text>
            <Text style={styles.scaleText}>Normal</Text>
            <Text style={styles.scaleText}>Overweight</Text>
            <Text style={styles.scaleText}>Obese</Text>
          </View>

          <Text style={[styles.status, {color: statusColor}]}>{bmiStatus}</Text>

          <View style={styles.sliderRow}>
            <View style={styles.sliderColumn}>
              <Text style={styles.sliderLabel}>Height (cm)</Text>

              <Slider
                minimumValue={100}
                maximumValue={220}
                step={1}
                value={height}
                onValueChange={setHeight}
                minimumTrackTintColor="#2f80ed"
                maximumTrackTintColor="#333"
                thumbTintColor="#2f80ed"
              />

              <Text style={styles.sliderValue}>{height} cm</Text>
            </View>

            <View style={styles.sliderColumn}>
              <Text style={styles.sliderLabel}>Weight (kg)</Text>

              <Slider
                minimumValue={30}
                maximumValue={150}
                step={1}
                value={weight}
                onValueChange={setWeight}
                minimumTrackTintColor="#2f80ed"
                maximumTrackTintColor="#333"
                thumbTintColor="#2f80ed"
              />

              <Text style={styles.sliderValue}>{weight} kg</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>All Tools</Text>

        {toolsList.map(item => (
          <TouchableOpacity key={item.id} style={styles.toolCard}>
            <View style={[styles.iconBox, {backgroundColor: item.bgColor}]}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <View style={styles.toolInfo}>
              <Text style={styles.toolTitle}>{item.title}</Text>

              <Text style={styles.toolDesc}>{item.desc}</Text>
            </View>

            {item.isPro ? (
              <View style={styles.proBadge}>
                <Text style={styles.proText}>PRO</Text>
              </View>
            ) : (
              <Text style={styles.arrow}>›</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },

  position: {
    flexDirection: 'row',
  },

  content: {
    padding: 16,
    paddingBottom: 30,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    marginLeft: 80,
  },

  bmiWidget: {
    backgroundColor: '#141414',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },

  widgetLabel: {
    color: '#888',
    fontSize: 13,
  },

  bmiNumber: {
    color: '#ff6a45',
    fontSize: 40,
    fontWeight: '700',
    marginVertical: 8,
  },

  colorBar: {
    flexDirection: 'row',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
    position: 'relative',
  },

  blue: {flex: 25, backgroundColor: '#2f80ed'},
  green: {flex: 35, backgroundColor: '#10b981'},
  orange: {flex: 20, backgroundColor: '#f2c94c'},
  red: {flex: 20, backgroundColor: '#ff6a45'},

  dot: {
    position: 'absolute',
    top: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ff6a45',
  },

  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  scaleText: {
    color: '#666',
    fontSize: 10,
  },

  status: {
    marginTop: 12,
    marginBottom: 20,
    fontWeight: '600',
  },

  sliderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sliderColumn: {
    width: '48%',
  },

  sliderLabel: {
    color: '#aaa',
    fontSize: 12,
  },

  sliderValue: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 15,
  },

  toolCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 22,
  },

  toolInfo: {
    flex: 1,
    marginLeft: 14,
  },

  toolTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  toolDesc: {
    color: '#777',
    fontSize: 12,
  },

  arrow: {
    color: '#666',
    fontSize: 22,
  },

  proBadge: {
    backgroundColor: '#2c1a16',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  proText: {
    color: '#ff6a45',
    fontSize: 11,
    fontWeight: '700',
  },
});
