// screens/FilterMenuScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';

const FilterMenuScreen = () => {
  const { menuItems } = useContext(MenuContext);
  const [filter, setFilter] = useState('');

  const filteredItems = menuItems.filter((item) => item.course === filter);

  return (
    <View style={styles.container}>
      <Button title="Show Starters" onPress={() => setFilter('Starters')} />
      <Button title="Show Main Course" onPress={() => setFilter('Main Course')} />
      <Button title="Show Desserts" onPress={() => setFilter('Desserts')} />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.name} - ${item.price}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default FilterMenuScreen;
