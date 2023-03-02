import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const MenuListItem = ({ dish }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Dish", {id: dish.id})} style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name} >{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />)}
    </Pressable>
  );
};

export default MenuListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  description: {
    color: 'grey',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 100,
    aspectRatio: 1,
  }

});