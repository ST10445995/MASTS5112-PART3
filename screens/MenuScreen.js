// screens/MenuScreen.js

import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {MenuContext} from './context/MenuContext';

const MenuScreen = ({ navigation }) => {
  const { menuItems } = useContext(MenuContext);
  const calculateAveragePrice = (course) => {
    const courseItems = menuItems.filter((item) => item.course === course);
    if (courseItems.length === 0) return 0;
    const total = courseItems.reduce((sum, item) => sum + item.price, 0);
    return (total / courseItems.length).toFixed(2);
  };

  return(
    <View style={styles.container}>
       <Text style={styles.title}>Average Prices</Text>
      <Text>Starters: ${calculateAveragePrice('Starters')}</Text>
      <Text>Main Course: ${calculateAveragePrice('Main Course')}</Text>
      <Text>Desserts: ${calculateAveragePrice('Desserts')}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMenuItem')}>
        <Text style={styles.buttonText}>Add/Remove Menu Items</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FilterMenu')}>
        <Text style={styles.buttonText}>Filter Menu by Course</Text>
      </TouchableOpacity>

      <Image source={require('../assets/LogoChef.png')} style={styles.logo}/>
      <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('StarterCourse')}>
                          <Text style={styles.buttonText}>STARTERS COURSE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                                          onPress={() => navigation.navigate('MainCourse')}>
                                            <Text style={styles.buttonText}>MAIN COURSE</Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity style={styles.button}
                                                            onPress={() => navigation.navigate('DessertCourse')}>
                                                              <Text style={styles.buttonText}>DESSERT COURSE</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity style={styles.button}
                                                                              onPress={() => navigation.navigate('Reservation')}>
                                                                                <Text style={styles.buttonText}>Make Reservation</Text>
                                                                             </TouchableOpacity>
                                                                             <TouchableOpacity style={styles.button}
                                                                                               onPress={() => navigation.navigate('Contact')}>
                                                                                                 <Text style={styles.buttonText}>Contact Information</Text>
                                                                                              </TouchableOpacity>
                                                                                              <TouchableOpacity style={styles.button}
                                                                                                                onPress={() => navigation.navigate('AddMenuItem')}>
                                                                                                                 <Text style={styles.buttonText}>Add Menu Item</Text>
                                                                                                                </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MenuScreen;