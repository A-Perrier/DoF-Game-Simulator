import React from 'react';
import { Text, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const styles = {
  gameTableContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  board: {
    flex: 1,
  },
  board2: {
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

const GameTable = ({route, navigation}) => {

  const table = route.name
  const { player1, player2, twoTables } = route.params
  const requireSplitScreen = player1 === undefined || player2 === undefined ? false : true
  

  
  return ( 
    <View style={styles.gameTableContainer}>
      <ImageBackground source={require('../assets/backgrounds/bg-empty-shadowed.jpg')} style={styles.background}>
      { requireSplitScreen ?
        <>
        <View style={[styles.board, {borderBottomColor: 'white', borderWidth: 1}]}>
          <Text style={styles.username}>{player1}</Text>
        </View>
        <View style={[styles.board2, {borderTopColor: 'white', borderWidth: 1}]}>
          <Text style={styles.username}>{player2}</Text>
        </View>
        </> :
        <View style={styles.board}>
          <Text style={styles.username}>{player1}</Text>
        </View>
      }
      </ImageBackground>
    </View>
  );
}
 
export default GameTable;