import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import DungeonDeck from './DungeonDeck';
import Encounters from './Encounters';
import Hand from './Hand';
import ItemsDeck from './ItemsDeck';
import Allies from './Allies';
import { connect } from 'react-redux'
import { round } from 'react-native-reanimated';

const styles = StyleSheet.create({
  playmat: {
    marginTop: -22,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  decks: {
    flex: 1,
    flexDirection: "row"
  },
  hand: {
    flex: 1,
    transform: [{translateX: 20}]
  },
  allies: {
    flex: 1
  }
})

const Playmat = ({ player, dispatch, rounds }) => {
  const [currentRound, setCurrentRound] = useState(1)

  function onDungeonPress () {
    if (rounds > currentRound) {
      setCurrentRound(currentRound + 1)
    }
  }

  function onItemsPress () {
    if (player.hand.length < 7) {
      const action = { type: 'DRAW_ITEM', value: player}
      dispatch(action)
    }
  }

  function onDiscard (card) {
    const action = { type: 'DISCARD', value: { player, card }}
    dispatch(action)
  }

  function onCardToHand (card) {
    const action = { type: 'SWITCH_TO_HAND', value: { player, card }}
    dispatch(action)
  }

  return ( 
    <View style={styles.playmat}>
      <View style={styles.decks}>
        <DungeonDeck onPress={onDungeonPress}/>
        <ItemsDeck onPress={onItemsPress}/>
      </View>
      <Encounters cards={player.encounters} round={currentRound} onCardToHand={onCardToHand}/>
      <View style={styles.allies}>
        <Allies cards={player.allies} />
      </View>
      <View style={styles.hand} >
        <Hand cards={player.hand} onDiscard={onDiscard}/>
      </View>
    </View>
   );
}
 
const mapStateToProps = (state) => {
  return {
    players: state.players,
    rounds: state.rounds
  }
}

export default connect(mapStateToProps)(Playmat);
//export default Playmat;