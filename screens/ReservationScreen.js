// screens/ReservationScreen.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const ReservationScreen = ({ navigation }) => {
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [date, setDate] = useState(new Date());
const [time, setTime] = useState(new Date());
const [guests, setGuests] = useState('');

const handleSubmit = () => {
// Handle reservation submission
console.log('Reservation submitted:', { name, email, phone, date, time, guests });
navigation.navigate('Contact');
};

return (
<ScrollView style={styles.container}>
<Logo />
<Text style={styles.sectionTitle}>Make Reservation</Text>
<TextInput style={styles.input}
           placeholder="Name"
           value={name}
           onChangeText={setName}
           />
<TextInput style={styles.input}
           placeholder="Email"
           value={email}
           onChangeText={setEmail}
           keyboardType="email-address"
           />
<TextInput style={styles.input}
           placeholder="Phone Number"
           value={phone}
           onChangeText={setPhone}
           keyboardType="phone-pad"
           />

<TextInput style={styles.input}
           placeholder="Date"
           value={dateate}
           onChangeText={setDate}
           />
<TextInput style={styles.input}
           placeholder="Time"
           value={time}
           onChangeText={setTime}
           />
<TextInput style={styles.input}
           placeholder="Number of Guests"
           value={guests}
           onChangeText={setGuests}
           keyboardType="numeric"
           />
<TouchableOpacity style={styles.button} 
                  onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
 
export default ReservationScreen;