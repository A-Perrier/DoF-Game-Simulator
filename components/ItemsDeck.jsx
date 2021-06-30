import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  deckContainer: {
    height: 103,
    width: 60
  },
  deck: {
    height: 103,
    width: 60
  }
})

const ItemsDeck = () => {
  return ( 
    <Pressable style={styles.deckContainer}>
      <Image source={require('../assets/cards/back-item.png')} style={styles.deck}/>
    </Pressable>
  );
}
 
export default ItemsDeck;