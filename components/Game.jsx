import React from 'react';
import { ImageBackground, View } from 'react-native';

const Game = ({ players, rounds }) => {
  const nbTables = (players.length - 2) > 0 ? 2 : 1
  console.log(players[0], players[1], players[2], players[3])

  return (
  <View style={styles.gameContainer}>
    <ImageBackground source={require('../assets/backgrounds/bg-empty-shadowed.jpg')} style={styles.background} >
      {/* <GameTable player1={players[0]} player2={players[1]} />
      {
        nbTables === 2 &&
        <GameTable player3={players[2]} player4={players[4]} />
      } */}
    </ImageBackground>
  </View>
  );
}



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


export default Game;