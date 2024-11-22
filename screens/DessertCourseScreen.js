// screens/DessertCourseScreen.js
import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,TouchableOpacity} from 'react-native';

const DessertCourseScreen = ({ navigation }) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>DESSERT COURSE</Text>
            <View style={styles.menuItem}>
                <Image source={require('../assets/Chocolate-Mousse-Baker.jpg')} style={styles.image}/>
                <Image source={require('../assets/Cheesecake.jpg')} style={styles.image}/>
                <Image source={require('../assets/Tirasimu.jpeg')} style={styles.image}/>
                <Text style={styles.itemTitle}>1. Cakes</Text>
                <Text style={styles.description}>Chocolate lava cake, Cheesecake, Tiramisu</Text>
                <Text style={styles.price}>Price: $9</Text>
            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/Creme-Brulee.webp')} style={styles.image}/>
                <Image source={require('../assets/Panna-cotta.jpg')} style={styles.image}/>
                <Image source={require('../assets/Chocolate-Mousse-Baker.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>2. Pudding</Text>
                <Text style={styles.description}>Creme brulee, Panna cotta, Chocolate mousse</Text>
                <Text style={styles.price}>Price: $8</Text>

            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/Affogato.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>3. Affogato</Text>
                <Text style={styles.description}>Vanilla gelato “drowned” in hot espresso, topped with a biscotti crumble</Text>
                <Text style={styles.price}>Price: $9</Text>
            </View>

            <TouchableOpacity style={styles.button}     
                              onPress={() => navigation.navigate('Reservation')}>
                                <Text style={styles.buttonText}>Make Reservation</Text>
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

 export default DessertCourseScreen;