import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsPage from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Cart from '../screens/Cart';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetailsScreen';

import { Foundation, MaterialIcons , FontAwesome5  } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white'}}>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ tabBarIcon: ({ color }) => (<Foundation name="home" size={24} color={color} />) }} />
      <Tab.Screen name="Orders" component={OrdersStackNavigator} options={{ tabBarIcon: ({ color }) => (<MaterialIcons name="list-alt" size={24} color={color} />) }} />
      <Tab.Screen name="Profile" component={OrderScreen} options={{ tabBarIcon: ({ color }) => (<FontAwesome5 name="user-alt" size={24} color={color} />) }} />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen}/>
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsPage}/>
      <HomeStack.Screen name="Dish" component={DishDetailsScreen}/>
      <HomeStack.Screen name="Cart" component={Cart}/>
    </HomeStack.Navigator>
  )
}


const OrdersStack = createNativeStackNavigator();
const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrderScreen}/>
      <OrdersStack.Screen name="Order" component={OrderDetails}/>

    </OrdersStack.Navigator>
  )
}

export default RootNavigator;