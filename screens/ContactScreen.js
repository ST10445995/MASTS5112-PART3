// screens/ContactScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
 
const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Information</Text>
      <Text style={styles.info}>Address: 123 Main Street, City, State, ZIP</Text>
      <Text style={styles.info}>Phone: (123) 456-7890</Text>
      <Text style={styles.info}>Email: info@TeeJaysUrbanBites.com</Text>
      <Text style={styles.subtitle}>Follow Us</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
          <Text style={styles.socialButton}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
          <Text style={styles.socialButton}>Twitter</Text>    
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
          <Text style={styles.socialButton}>Instagram</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ContactScreen;
