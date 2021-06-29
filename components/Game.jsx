import React from 'react';
import { ImageBackground, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GameTable from './GameTable';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const Game = ({ players, rounds }) => {
  const nbTables = (players.length - 2) > 0 ? 2 : 1
  //console.log(players[0], players[1], players[2], players[3])

  return (
  <View style={styles.gameContainer}>
    <ImageBackground source={require('../assets/backgrounds/bg-empty-shadowed.jpg')} style={styles.background}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Table1">
          <Stack.Screen name="Table1" component={GameTable} initialParams={ { player1: players[0], player2: players[1], twoTables: nbTables > 1 } } />
          <Stack.Screen name="Table2" component={GameTable} initialParams={ { player1: players[2], player2: players[3] } } />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <GameTable player1={players[0]} player2={players[1]} />
      {
        nbTables === 2 &&
        <GameTable player1={players[2]} player2={players[4]} />
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