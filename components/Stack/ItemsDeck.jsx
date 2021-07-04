import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  deckContainer: {
    height: 120,
    width: 70
  },
  deck: {
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

const ItemsDeck = ({ onPress }) => {
  return ( 
    <View style={{marginRight: 10}}>
      <Pressable style={styles.deckContainer} onPress={onPress}>
        <Image source={require('../../assets/cards/back-item.png')} style={styles.deck}/>
      </Pressable>
      <Text style={styles.title}>Objets</Text>
    </View>
  );
}
 
export default ItemsDeck;