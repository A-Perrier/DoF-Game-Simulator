import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import Board from './Board';
import BoardSet from './BoardSet';

const styles = StyleSheet.create({
  gameTableContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  }
})

// Reçoit aussi la navigation
const GameTable = ({ route }) => {

  const table = route.name
  const [ player1, player2 ] = route.params.players
  const requireSplitScreen = player1 === undefined || player2 === undefined ? false : true
  
  //console.log('Joueur 1: ', player1)
  //console.log('Joueur 2 :', player2)
  
  return ( 
    <View style={styles.gameTableContainer}>
      <ImageBackground source={require('../assets/backgrounds/bg-empty-shadowed.jpg')} style={styles.background}>
      { requireSplitScreen ?
        <BoardSet players={route.params.players} />
         : 
        <Board player={player1} />
      }
      </ImageBackground>
    </View>
  );
}
 
export default GameTable;