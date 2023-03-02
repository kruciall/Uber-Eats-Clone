
import { StyleSheet, View, Text, FlatList } from 'react-native';

import React from 'react';


const CartDishItem = ({ cartDish }) => {
  return (
    <View>
      <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.itemName}>{cartDish.name}</Text>
      <Text style={styles.quantityPrice}>${cartDish.price}</Text>
    </View>
    <View style={styles.separator} />
      </View>
  );
};

export default CartDishItem;


const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 50,
    padding: 10,
  },
  description: {
    color: '#696969'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 5,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 12,
    margin: 20,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
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
