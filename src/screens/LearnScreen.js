import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const LearnScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Example Card 1 - Image */}
      <View style={styles.card}>
      <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with a valid image URL
          style={styles.image}
          onError={(error) => console.error('Image load error:', error)}
        />
        <Text style={styles.cardText}>This is an image card</Text>
      </View>


      {/* Additional Cards */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
        <Text style={styles.cardText}>Another image card</Text>
      </View>

      {/* Add more cards as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default LearnScreen;
