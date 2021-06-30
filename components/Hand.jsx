import React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  handContainer: {
    flexDirection: 'column',
  },
  hand: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 108,
    justifyContent: 'center',
    maxWidth: 200,
  
  },
  pressableCard: {
    flex: 1,
    maxWidth: 70,
    minWidth: 40,
    marginLeft: -14
  },
  card: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: -35
  }
})


const Hand = () => {
  return ( 
    <View style={styles.handContainer}>
      <View style={styles.hand}>
      <Pressable style={styles.pressableCard}>
          <Image source={require('../assets/cards/items/Arbalete-de-fitland-1.png')} style={styles.card}/>
        </Pressable>

        <Pressable style={styles.pressableCard}>
          <Image source={require('../assets/cards/items/Arbalete-de-fitland-1.png')} style={styles.card}/>
        </Pressable>

        <Pressable style={styles.pressableCard}>
          <Image source={require('../assets/cards/items/Arbalete-de-fitland-1.png')} style={styles.card}/>
        </Pressable>

        <Pressable style={styles.pressableCard}>
          <Image source={require('../assets/cards/items/Arbalete-de-fitland-1.png')} style={styles.card}/>
        </Pressable>

        <Pressable style={styles.pressableCard}>
          <Image source={require('../assets/cards/items/Arbalete-de-fitland-1.png')} style={styles.card}/>
        </Pressable>

        <Pressable style={styles.pressableCard}>
          <Image source={require('../assets/cards/items/Arbalete-de-fitland-1.png')} style={styles.card}/>
        </Pressable>

        <Pressable style={styles.pressableCard}>
          <Image source={require('../assets/cards/items/Arbalete-de-fitland-1.png')} style={styles.card}/>
        </Pressable>
      </View>
      <Text style={styles.title}>Main</Text>
    </View>
  );
}
 
export default Hand;