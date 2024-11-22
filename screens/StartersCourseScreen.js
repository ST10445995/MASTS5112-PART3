// screens/StartersCourseScreen.js
import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,TouchableOpacity} from 'react-native';

const StartersCourseScreen = ({ navigation }) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>STARTERS COURSE</Text>
            <View style={styles.menuItem}>
                <Image source={require('../assets/Lobster-Bisque.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>1. Lobster Bisque</Text>
                <Text style={styles.description}>Rich lobster bisque with a drizzle of cream and a touch of brandy</Text>
                <Text style={styles.price}>Price: $12</Text>
            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/Creamy-Tomato-Bisque.jpg')} style={styles.image}/>
                <Image source={require('../assets/Soup-HeartuVegetable.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>2. Soup</Text>
                <Text style={styles.description}>Creamy tomato bisque,Hearty vegetable soup</Text>
                <Text style={styles.price}>Price: $7</Text>
            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/Green-Salad-with-Vinaigrette.webp')} style={styles.image}/>
                <Image source={require('../assets/GreekSalad.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>3. Salad</Text>
                <Text style={styles.description}>Caesar Salad, mixed green with vinaigrette, Greek Salad</Text>
                <Text style={styles.price}>Price: $8</Text>
            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/Bruschetta-Stuffed-Mushrooms.jpg')} style={styles.image}/>
                <Image source={require('../assets/shrimp-cocktail.jpeg')} style={styles.image}/>
                <Text style={styles.itemTitle}>4. Appetizers</Text>
                <Text style={styles.description}>Bruschetta, stuffed mushrooms, Shrimp cocktail</Text>
                <Text style={styles.price}>Price: $10</Text>
            </View>
            <TouchableOpacity style={styles.button}     
                              onPress={() => navigation.navigate('Menu')}>
                                <Text style={styles.buttonText}>Next</Text>
                              </TouchableOpacity>
        </ScrollView>
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
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      menuItem: {
        marginBottom: 20,
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
      image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
      },
      itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      description:{
        marginBottom: 5,
      },
      price:{
        fontWeight: 'bold',
      },
  
 });
    
export default StartersCourseScreen;    
