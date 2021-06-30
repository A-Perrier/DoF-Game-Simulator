import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  deckContainer: {
    height: 103,
    width: 60,
    marginRight: 10
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
    backgroundColor: 'white'
  }
})

const DungeonDeck = () => {
  return ( 
    <View>
      <Pressable style={styles.deckContainer}>
        <Image source={require('../assets/cards/back-encounter.png')} style={styles.deck}/>
      </Pressable>
      <Text style={styles.title}>Donjon</Text>
    </View>
  );
}
 
export default DungeonDeck;