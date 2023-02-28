import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
const restaurant = restaurants[0];


const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} resizeMode="cover" />
        <Ionicons
          name="arrow-back-circle"
          size={45} 
          color="white"
          style={styles.iconContainer}
        />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {

    position: 'absolute',
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,

  },
  subtitle: {
    color: '#525252',
    fontSize: 15,
  },
  container: {
    margin: 10,
  }
});