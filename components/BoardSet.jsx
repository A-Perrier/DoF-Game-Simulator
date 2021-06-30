import React from 'react';
import Board from './Board';

const BoardSet = ({ players }) => {
  //console.log(players)
  return (
    <>
    <Board player={players[0]} style={{borderBottomColor: 'white', borderWidth: 1}} />
    <Board player={players[1]} style={{borderTopColor: 'white', borderWidth: 1}} />
    </>
   );
}
 
export default BoardSet;