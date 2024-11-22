// screens/MenuItemsAddScreen.js

import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet, FlatList} from 'react-native';
import { MenuContext } from './context/MenuContext';

const MenuItemsAddScreen = () => {
    const {menuItems, setMenuItems} = useContext(MenuContext);
    const [name, setName] = useState('');
    const [course, setCourse] = useState ('');
    const [price, setPrice] = useState ('');

    const addItem = () => {
        const newItem = {id: Date.now(), name, course, price: parseFloat(price)};
        setMenuItems ([menuItems, newItem]);
        setName('');
        setCourse('');
        setPrice('');
    };

    const removeItem = (id) => {
        setMenuItems(menuItems.filter((item) => item.id !== id));
    };

    returnn (
        <View style = {StyleSheet.container}>
            <Text style = {StyleSheet.title}>Add Menu Item</Text>
            <TextInput placeholder = "Name" value={name} onChangeText = {setName} style={StyleSheet.input}/>
            <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input}/>

      <Button title="Add Item" onPress={addItem} />
      <FlatList data={menuItems} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price} ({item.course})</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
});

export default MenuItemsAddScreen;
       
   