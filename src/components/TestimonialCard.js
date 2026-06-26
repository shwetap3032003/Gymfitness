// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const TestimonialCard = () => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.quote}>
//         "Lost 8kg in 10 weeks with the HIIT program. The trainer sessions made
//         all the difference."
//       </Text>

//       <View style={styles.footer}>
//         <View style={styles.userRow}>
//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>VK</Text>
//           </View>

//           <View>
//             <Text style={styles.name}>Vikram K.</Text>

//             <Text style={styles.result}>Lost 8kg · HIIT Program</Text>
//           </View>
//         </View>

//         <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
//       </View>
//     </View>
//   );
// };

// export default TestimonialCard;

// const styles = StyleSheet.create({
//   card: {
//     marginHorizontal: 20,
//     backgroundColor: '#1a1a1a',
//     borderRadius: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: '#2b2b2b',
//   },

//   quote: {
//     color: '#bdbdbd',
//     fontSize: 15,
//     lineHeight: 28,
//     fontStyle: 'italic',
//   },

//   footer: {
//     marginTop: 18,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   userRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   avatar: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//     backgroundColor: '#4a2a24',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },

//   avatarText: {
//     color: '#ff6a45',
//     fontWeight: '700',
//   },

//   name: {
//     color: '#fff',
//     fontWeight: '700',
//   },

//   result: {
//     color: '#1dbf73',
//     marginTop: 2,
//   },

//   stars: {
//     color: '#FFC107',
//   },
// });

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TestimonialCard = ({data}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.quote}>"{data.quote}"</Text>

      <View style={styles.footer}>
        <View style={styles.userRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{data.initials}</Text>
          </View>

          <View>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.result}>{data.result}</Text>
          </View>
        </View>

        <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
      </View>
    </View>
  );
};

export default TestimonialCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2b2b2b',
  },

  quote: {
    color: '#bdbdbd',
    fontSize: 15,
    lineHeight: 28,
    fontStyle: 'italic',
  },

  footer: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#4a2a24',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: '#ff6a45',
    fontWeight: '700',
  },

  name: {
    color: '#fff',
    fontWeight: '700',
  },

  result: {
    color: '#1dbf73',
    marginTop: 2,
  },

  stars: {
    fontSize: 14,
  },
});
