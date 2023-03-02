import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Cart from './src/screens/Cart';
import OrderScreen from './src/screens/OrdersScreen';
import OrderDetails from './src/screens/OrderDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailsScreen /> */}
      {/* <Cart /> */}
      {/* <OrderScreen /> */}
      <OrderDetails />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingVertical: 30, //temp
  },

});
