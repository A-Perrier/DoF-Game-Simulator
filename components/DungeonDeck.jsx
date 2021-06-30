import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  deckContainer: {
    height: 103,
    width: 60
  },
  deck: {
    height: 103,
    width: 60
  },
  title: {
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 24,
    textAlign: 'center',
    marginTop: -11
  }
})

const DungeonDeck = () => {
  return ( 
    <View style={{marginRight: 10}}>
      <Pressable style={styles.deckContainer}>
        <Image source={require('../assets/cards/back-encounter.png')} style={styles.deck}/>
      </Pressable>
      <Text style={styles.title}>Donjon</Text>
    </View>
  );
}
 
export default DungeonDeck;