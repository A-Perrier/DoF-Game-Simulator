import React from 'react';
import { Text } from 'react-native';

const GameTable = ({route, navigation}) => {
  const table = route.name
  const { player1, player2, twoTables } = route.params
  
  return ( 
    <Text>Table avec {player1} et {player2}</Text>
  );
}
 
export default GameTable;