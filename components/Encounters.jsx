import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  pressableCard: {
    height: 103,
    width: 60
  },
  card: {
    height: 103,
    width: 60
  },
  title: {
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 24,
    textAlign: 'center',
    marginTop: -11,
    marginLeft: -7

  }
})

const Encounters = () => {
  return ( 
    <View style={{flex: 1}}>
      <View style={{width: 68}}>
      <Pressable style={styles.pressableCard}>
        <Image source={require('../assets/cards/back-item.png')} style={styles.card}/>
      </Pressable>
      <Text style={styles.title}>Rencontres</Text>
      </View>
    </View>
   );
}
 
export default Encounters;