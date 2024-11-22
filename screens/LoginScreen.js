// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoChef.png')} style={styles.logo}/>
      <Text style={styles.title}>Tee'Jays Urban Bites</Text>
      <Text style={styles.subtitle}>WHERE EVERY BITE SETS YOUR TASTE BUDS ON FIRE!</Text>
      <TextInput style={styles.input} placeholder="Name"/>
      <TextInput style={styles.input} placeholder="Surname"/>
      <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Menu')}>
                          <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
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
  
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
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

export default LoginScreen;