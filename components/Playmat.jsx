import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DungeonDeck from './DungeonDeck';
import Encounters from './Encounters';
import Hand from './Hand';
import ItemsDeck from './ItemsDeck';

const styles = StyleSheet.create({
  playmat: {
    marginTop: -22,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  decks: {
    flex: 1,
    flexDirection: "row"
  },
  hand: {
    flex: 1,
    transform: [{translateX: 20}]
  }
})

const Playmat = () => {
  return ( 
    <View style={styles.playmat}>
      <View style={styles.decks}>
        <DungeonDeck />
        <ItemsDeck />
      </View>
      <Encounters />
      <View style={styles.hand}>
        <Hand />
      </View>
    </View>
   );
}
 
export default Playmat;