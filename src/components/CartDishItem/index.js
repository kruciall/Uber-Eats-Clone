
import { StyleSheet, View, Text, FlatList } from 'react-native';

import React from 'react';


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

export default CartDishItem;


const styles = StyleSheet.create({
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