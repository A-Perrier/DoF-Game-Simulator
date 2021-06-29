import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  board: {
    flex: 1,
  },
  username: {
    fontSize: 32,
    fontFamily: 'Jomhuria',
    color: '#F2A102',
    marginLeft: 20,
    marginTop: -10
  }
}

const Board = ({player, style}) => {
  return ( 
    <View style={[styles.board, style]}>
      <Text style={styles.username}>{player}</Text>
    </View>
   );
}
 
export default Board;