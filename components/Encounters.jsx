import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  pressableCard: {
    height: 120,
    width: 70
  },
  card: {
    height: 120,
    width: 70
  },
  title: {
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 24,
    textAlign: 'center',
    marginTop: -11
  }
})

const Encounters = () => {
  return ( 
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{width: 68}}>
      <Pressable style={styles.pressableCard}>
        <Image source={require('../assets/cards/rencontres/Acronide-1.png')} style={styles.card}/>
      </Pressable>
      <Text style={styles.title}>Rencontres</Text>
      </View>
    </View>
   );
}
 
export default Encounters;