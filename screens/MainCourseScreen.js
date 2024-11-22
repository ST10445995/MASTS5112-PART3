// screens/MainCourseScreen.js
import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,TouchableOpacity} from 'react-native';

const MainCourseScreen = ({ navigation }) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>MAIN COURSE</Text>
            <View style={styles.menuItem}>
                <Image source={require('../assets/grilled-salmon.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>1. Grilled Meat</Text>
                <Text style={styles.description}>Steak, chicken, or lamb chops with roasted vegetables</Text>
                <Text style={styles.price}>Price: $25</Text>
            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/fettuccine-alfredo.jpg')} style={styles.image}/>
                <Image source={require('../assets/spaghetti-bolognese.jpg')} style={styles.image}/>
                <Image source={require('../assets/Linguine-with-Seafood-Sauce.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>2. Pasta</Text>
                <Text style={styles.description}>Fettuccine Alfredo, Spaghetti Bolognese, Seafood Linguine</Text>
                <Text style={styles.price}>Price: $20</Text>
            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/vegetarian-stuffed-peppers.jpg')} style={styles.image}/>
                <Image source={require('../assets/Vegan-Eggplant-Parmesan.jpg')} style={styles.image}/>
                <Image source={require('../assets/vegetable_stir_fry.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>3. Vegetarian</Text>
                <Text style={styles.description}>Stuffed Pepper, Eggplant Parmesan, Veggie stir-fry</Text>
                <Text style={styles.price}>Price: $16</Text>
            </View>
            <View style={styles.menuItem}>
                <Image source={require('../assets/grilled-salmon.jpg')} style={styles.image}/>
                <Image source={require('../assets/shrimp-scampi.webp')} style={styles.image}/>
                <Image source={require('../assets/Seafood-Paella.jpg')} style={styles.image}/>
                <Text style={styles.itemTitle}>4. Seafood</Text>
                <Text style={styles.description}>Grilled salmon, Shrimp scampi, Seafood paella</Text>
                <Text style={styles.price}>Price: $27</Text>
            </View>
            

            <TouchableOpacity style={styles.button}     
                              onPress={() => navigation.navigate('Menu')}>
                                <Text style={styles.buttonText}>Back to Menu</Text>
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

 export default MainCourseScreen;