import { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const restaurant = restaurants[0];


const CartDishItem = ({ cartDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.itemName}>{cartDish.name}</Text>
      <Text style={styles.quantityPrice}>${cartDish.price}</Text>
    </View>
  );
};

const Cart = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.yourItem}>Your Items</Text>

      <FlatList data={restaurant.dishes} renderItem={({ item }) => <CartDishItem cartDish={item} />} />

      <View style={styles.separator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Next &#8226; </Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 50,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 10,
  },
  description: {
    color: '#696969'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: 12,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: '18'
  },
  quantityPrice: {
    marginLeft: 'auto',

  },
  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 10,
  },
  itemName: {
    fontWeight: 600,
  },
  yourItem: {
    fontSize: 19,
    fontWeight: '600',
    paddingTop: 20,
  }

});