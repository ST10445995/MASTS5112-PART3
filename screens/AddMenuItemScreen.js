// screens/AddMenuItemScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddMenuItemScreen = ({ navigation }) => {
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    if (!course || !price) {
      setErrorMessage('Please fill in all fields');
      setSuccessMessage('');
    } else {
     
      console.log('New menu item:', { course, price });
      setErrorMessage('');
      setSuccessMessage('Menu item added successfully!');
      // Clear form fields
      setCourse('');
      setPrice('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Course</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Course" value="" />
          <Picker.Item label="Starters Course" value="Starters" />
          <Picker.Item label="Main Course" value="Main" />
          <Picker.Item label="Dessert Course" value="Dessert" />
        </Picker>
      </View>

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      {successMessage ? (
        <Text style={styles.successMessage}>{successMessage}</Text>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    height: 50,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default AddMenuItemScreen;