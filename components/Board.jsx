import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Playmat from './Playmat';

const styles = StyleSheet.create({
  board: {
    flex: 1
  },
  username: {
    fontSize: 32,
    fontFamily: 'Jomhuria',
    color: '#F2A102',
    marginLeft: 20,
    marginTop: -10,
    position: 'relative',
    top: 0,
    zIndex: 3
  },
})

const Board = ({player, style}) => {
  //console.log(player)
  return ( 
    <View style={[styles.board, style]}>
      <Text style={styles.username}>{player.name}</Text>
      <Playmat />
    </View>
   );
}
 
export default Board;