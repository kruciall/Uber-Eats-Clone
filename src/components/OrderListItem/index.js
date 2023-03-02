import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <View >
      <Pressable onPress={() => navigation.navigate("Order", { id: order.id })} style={styles.container}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View>
          <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
          <Text style={styles.orderItems}>3 items &#8226; $25.12</Text>
          <Text>2 days ago &#8226; {order.status}</Text>
        </View>
      </Pressable>
      <View style={styles.separator} />
    </View>

  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginRight: 6,
  },
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  restaurantName: {
    fontWeight: '600',
    fontSize: 18,
  },
  orderItems: {
    marginVertical: 5,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 4,
  },
});
