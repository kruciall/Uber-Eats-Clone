import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import MenuListItem from '../../components/MenuListItem';
import Header from "./Header";
import styles from './styles';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList 
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({item}) => <MenuListItem dish={item} />}
      />
        <Ionicons
          name="arrow-back-circle"
          size={45} 
          color="white"
          style={styles.iconContainer}
        />
    </View>
  );
};

export default RestaurantDetailsPage;

