import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DungeonDeck from './Stack/DungeonDeck';
import Encounters from './Stack/Encounters';
import Hand from './Stack/Hand';
import ItemsDeck from './Stack/ItemsDeck';
import Allies from './Stack/Allies';
import { connect } from 'react-redux'

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
  const [cardsRevealed, setCardsRevealed] = useState([])

  useEffect(() => {
    getRevealed()
  }, [currentRound])
  

  /**
   * Permet de garder une trace de l'historique des cartes dans la pile rencontres
   */
  function getRevealed () {
    let revealed = []
    for (let i = 0; i < currentRound; i++) {
      revealed.unshift(player.encounters[i])
    }
    setCardsRevealed(revealed)
  }


  function onDungeonPress () {
    if (rounds > currentRound && player.encounters.length > 0) {
      setCurrentRound(currentRound + 1)
      getRevealed()
    }
  }


  function onItemsPress () {
    if (player.hand.length < 7) {
      const action = { type: 'DRAW_ITEM', value: player}
      dispatch(action)
    }
  }


  function onDiscard (card, source) {
    const action = { type: 'DISCARD', value: { player, card, source }}
    dispatch(action)
  }


  function onCardToHand (card) {
    const copy = cardsRevealed.slice()
    setCardsRevealed(copy.filter(cardCopy => cardCopy !== card))

    const action = { type: 'SWITCH_TO_HAND', value: { player, card }}
    dispatch(action)
  }


  function onCardToAllies (card) {
    const copy = cardsRevealed.slice()
    setCardsRevealed(copy.filter(cardCopy => cardCopy !== card))

    const action = { type: 'SWITCH_TO_ALLIES', value: { player, card }}
    dispatch(action)
  }


  function onGiveCard (card, target, source) {
    const action = { type: 'GIVE_TO_PLAYER', value: { player, target, card, source} }
    dispatch(action)
  }


  return ( 
    <View style={styles.playmat}>
      <View style={styles.decks}>
        <DungeonDeck onPress={onDungeonPress}/>
        <ItemsDeck onPress={onItemsPress}/>
      </View>
      <Encounters 
        cards={cardsRevealed} 
        onCardToHand={onCardToHand}
        onCardToAllies={onCardToAllies}
        onGiveCard={onGiveCard} 
        currentPlayer={player}
      />
      <View style={styles.allies}>
        <Allies cards={player.allies} onDiscard={onDiscard} />
      </View>
      <View style={styles.hand} >
        <Hand cards={player.hand} onDiscard={onDiscard} onGiveCard={onGiveCard} currentPlayer={player} />
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