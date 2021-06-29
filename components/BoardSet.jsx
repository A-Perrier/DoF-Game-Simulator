import React from 'react';
import Board from './Board';

const BoardSet = ({player1, player2}) => {
  return (
    <>
    <Board player={player1} style={{borderBottomColor: 'white', borderWidth: 1}} />
    <Board player={player2} style={{borderTopColor: 'white', borderWidth: 1}} />
    </>
   );
}
 
export default BoardSet;