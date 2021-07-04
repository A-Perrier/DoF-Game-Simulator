import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { connect } from 'react-redux';
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
const GameTable = ({ route, players }) => {
  const table = route.name
  const [ player1, player2, player3, player4 ] = players
  
  if (table === "Table 1") {
    const requireSplitScreen = player1 === undefined || player2 === undefined ? false : true
    
    return (
      <View style={styles.gameTableContainer}>
        <ImageBackground source={require('../assets/backgrounds/bg-empty-shadowed.jpg')} style={styles.background}>
        { requireSplitScreen ?
          <BoardSet players={[player1, player2]} />
           : 
          <Board player={player1} />
        }
        </ImageBackground>
      </View>
    )
  }
  
  if (table === "Table 2") {
    const requireSplitScreen = player3 === undefined || player4 === undefined ? false : true
    
    return (
      <View style={styles.gameTableContainer}>
        <ImageBackground source={require('../assets/backgrounds/bg-empty-shadowed.jpg')} style={styles.background}>
        { requireSplitScreen ?
          <BoardSet players={[player3, player4]} />
           : 
          <Board player={player3} />
        }
        </ImageBackground>
      </View>
    )
  }
}
 

const mapStateToProps = (state) => {
  return {
    encounters: state.encounters,
    hordes: state.hordes,
    bosses: state.bosses,
    items: state.items,
    players: state.players,
  }
}

export default connect(mapStateToProps)(GameTable);