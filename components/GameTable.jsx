import React from 'react';
import { Text, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const styles = {
  gameContainer: {
    flex: 1
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  }
}

const GameTable = ({route, navigation}) => {
  const table = route.name
  const { player1, player2 } = route.params

  
  return ( 
    <View style={styles.gameContainer}>
      <ImageBackground source={require('../assets/backgrounds/bg-empty-shadowed.jpg')} style={styles.background}>
        <Text>Table avec {player1} et {player2}</Text>
      </ImageBackground>
    </View>
  );
}
 
export default GameTable;