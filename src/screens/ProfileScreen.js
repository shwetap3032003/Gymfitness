import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const accountItems = [
    {
      id: '1',
      title: 'Personal info',
      desc: 'Name, email, phone',
      icon: '👤',
      bgColor: '#1c2030',
    },
    {
      id: '2',
      title: 'My goals',
      desc: 'Weight loss · 5 days/week',
      icon: '🎯',
      bgColor: '#162e24',
    },
    {
      id: '3',
      title: 'Notifications',
      desc: 'Workout reminders on',
      icon: '🔔',
      bgColor: '#2e251b',
    },
    {
      id: '4',
      title: 'Billing & payments',
      desc: 'HDFC ···· 4521',
      icon: '💳',
      bgColor: '#1c2030',
    },
    {
      id: '5',
      title: 'Log out',
      desc: '',
      icon: '🚪',
      bgColor: '#251b18',
      isDestructive: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsCircleButton}>
            <Text style={{fontSize: 18}}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userCard}>
          <View style={styles.userInfoRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>SP</Text>
            </View>
            <View style={styles.userMeta}>
              <Text style={styles.userNameText}>Shweta Patel</Text>
              <Text style={styles.userStatusSubtitle}>
                Pro Member · Joined Jan 2024
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.editTextButton}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.proPlanCard}>
            <View style={styles.proCardHeader}>
              <Text style={styles.proTitleText}>Pro Plan · ₹999/mo</Text>
              <View style={styles.activeLabelBadge}>
                <Text style={styles.activeBadgeText}>Active</Text>
              </View>
            </View>
            <Text style={styles.proRenewalText}>
              Renews 15 May 2026 · Auto-renew on
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>My progress</Text>
          <TouchableOpacity>
            <Text style={styles.viewDetailsLink}>View details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsMetricsGridRow}>
          <View style={styles.statMetricCard}>
            <Text style={[styles.metricNumber, {color: '#ff6a45'}]}>24</Text>
            <Text style={styles.metricLabelText}>Workouts</Text>
          </View>
          <View style={styles.statMetricCard}>
            <Text style={[styles.metricNumber, {color: '#10b981'}]}>-4.2</Text>
            <Text style={styles.metricLabelText}>kg lost</Text>
          </View>
          <View style={styles.statMetricCard}>
            <Text style={[styles.metricNumber, {color: '#f2c94c'}]}>18</Text>
            <Text style={styles.metricLabelText}>Day streak</Text>
          </View>
        </View>

        <View style={styles.weeklyGoalProgressCard}>
          <View style={styles.goalProgressInfoTextRow}>
            <Text style={styles.goalProgressTitleText}>
              Weekly goal progress
            </Text>
            <Text style={styles.goalPercentValueLabel}>80%</Text>
          </View>
          <Text style={styles.goalStatusSubText}>
            4 of 5 workouts done this week
          </Text>

          <View style={styles.linearTrackLineBase}>
            <View style={styles.linearFillProgressLine} />
          </View>
        </View>

        <Text style={styles.sectionTitleMargin}>Account</Text>

        <View style={styles.accountSettingsGroupBlock}>
          {accountItems.map((item, index) => (
            <View key={item.id}>
              <TouchableOpacity style={styles.accountMenuRowItem}>
                <View
                  style={[
                    styles.menuIconContainer,
                    {backgroundColor: item.bgColor},
                  ]}>
                  <Text style={{fontSize: 16}}>{item.icon}</Text>
                </View>
                <View style={styles.menuMetaDetails}>
                  <Text
                    style={[
                      styles.menuItemTitleText,
                      item.isDestructive && {color: '#ff6a45'},
                    ]}>
                    {item.title}
                  </Text>
                  {item.desc !== '' && (
                    <Text style={styles.menuItemDescSubtitleText}>
                      {item.desc}
                    </Text>
                  )}
                </View>
                {!item.isDestructive && (
                  <Text style={styles.menuChevronArrow}>›</Text>
                )}
              </TouchableOpacity>
              {index < accountItems.length - 1 && (
                <View style={styles.innerListDivider} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  settingsCircleButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2c2c2e',
  },
  userCard: {
    backgroundColor: '#141414',
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    marginBottom: 25,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2e1b18',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ff6a45',
    fontSize: 22,
    fontWeight: '700',
  },
  userMeta: {
    flex: 1,
    marginLeft: 14,
  },
  userNameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  userStatusSubtitle: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
  editTextButton: {
    color: '#ff6a45',
    fontSize: 14,
    fontWeight: '600',
  },
  proPlanCard: {
    backgroundColor: '#211613',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#38201a',
  },
  proCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  proTitleText: {
    color: '#ff6a45',
    fontSize: 16,
    fontWeight: '700',
  },
  activeLabelBadge: {
    backgroundColor: '#ff6a45',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  activeBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  proRenewalText: {
    color: '#777',
    fontSize: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  sectionTitleMargin: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'serif',
    marginTop: 25,
    marginBottom: 14,
  },
  viewDetailsLink: {
    color: '#ff6a45',
    fontSize: 13,
    fontWeight: '600',
  },
  statsMetricsGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  statMetricCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    width: '31%',
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  metricNumber: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 2,
  },
  metricLabelText: {
    color: '#666',
    fontSize: 11,
  },
  weeklyGoalProgressCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  goalProgressInfoTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  goalProgressTitleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  goalPercentValueLabel: {
    color: '#ff6a45',
    fontSize: 14,
    fontWeight: '700',
  },
  goalStatusSubText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 12,
  },
  linearTrackLineBase: {
    height: 6,
    backgroundColor: '#222',
    borderRadius: 3,
    width: '100%',
    overflow: 'hidden',
  },
  linearFillProgressLine: {
    width: '80%',
    height: '100%',
    backgroundColor: '#ff6a45',
    borderRadius: 3,
  },
  accountSettingsGroupBlock: {
    backgroundColor: '#141414',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    overflow: 'hidden',
  },
  accountMenuRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  menuIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuMetaDetails: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  menuItemTitleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  menuItemDescSubtitleText: {
    color: '#555',
    fontSize: 13,
    marginTop: 1,
  },
  menuChevronArrow: {
    color: '#444',
    fontSize: 20,
    marginLeft: 4,
  },
  innerListDivider: {
    height: 1,
    backgroundColor: '#1f1f1f',
    marginLeft: 66,
  },
});
