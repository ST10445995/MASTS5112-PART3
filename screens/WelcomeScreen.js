// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return(
    <View style = {styles.container}>
      <Image source={require('../assets/LogoChef.png')} style = {styles.logo}/>
      <Text style={styles.title}>Tee'Jays Urban Bites</Text>
      <Text style={styles.subtitle}>WHERE EVERY BITE SETS YOUR TASTE BUDS ON FIRE!</Text>
      <Text style={styles.welcomeText}>Welcome to Tee'Jays Urban Bites! Enjoy flavors crafted with love and passion. We hope you have an unforgettable experience!</Text>
      <TouchableOpacity style={styles.button}
                        onPress={() =>navigation.navigate('Login')}>
                          <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'orange',
    textAlign: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WelcomeScreen;