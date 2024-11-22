/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// App.js
import React from 'react';
import NavigationContainer from '@react-navigation/native';
import  createStackNavigator from '@react-navigation/stack';
import { MenuProvider } from './context/MenuContext';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import StartersCourseScreen from './screens/StartersCourseScreen';
import MainCourseScreen from './screens/MainCourseScreen';
import DessertCourseScreen from './screens/DessertCourseScreen';
import ReservationScreen from './screens/ReservationScreen';
import ContactScreen from './screens/ContactScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';
import MenuItemsAddScreen from './screens/MenuItemsAddScreen';

const Stack = createStackNavigator();

const App = () => {
  return(
    <MenuProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="StartersCourse" component={StartersCourseScreen} />
      <Stack.Screen name="MainCourse" component={MainCourseScreen} />
      <Stack.Screen name="DessertCourse" component={DessertCourseScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
      <Stack.Screen name="FilterMenu" component={FilterMenuScreen}/>
      <Stack.Screen name="MenuItemsAddScreen" component={MenuItemsAddScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  </MenuProvider>

  );
}

export default App;
  