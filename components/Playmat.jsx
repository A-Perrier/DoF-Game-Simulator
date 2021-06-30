import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DungeonDeck from './DungeonDeck';
import ItemsDeck from './ItemsDeck';

const styles = StyleSheet.create({
  playmat: {
    marginTop: -5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 15,
    flex: 1,
    flexDirection: 'row'
  },
  decks: {
    flex: 1,
    flexDirection: "row"
  }
})

const Playmat = () => {
  return ( 
    <View style={styles.playmat}>
      <View style={styles.decks}>
        <DungeonDeck />
        <ItemsDeck />
      </View>
    </View>
   );
}
 
export default Playmat;