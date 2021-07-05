import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import CardModalWithNavigation from '../CardModalWithNavigation';

const styles = StyleSheet.create({
  pressableCard: {
    height: 120,
    width: 70
  },
  card: {
    height: 120,
    width: 70
  },
  title: {
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 24,
    textAlign: 'center',
    marginTop: -11
  }
})

const Encounters = ({ cards, onCardToHand, onCardToAllies, onGiveCard, currentPlayer }) => {
  const [modalVisible, setModalVisible] = useState(false)

  function handleCardToHand (card) {
    setModalVisible(false)
    onCardToHand(card)
  }

  function handleCardToAllies (card) {
    setModalVisible(false)
    onCardToAllies(card)
  }

  function handleGiveCard (card, target) {
    setModalVisible(false)
    onGiveCard(card, target, 'encounters')
  }

  return ( 
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{width: 68}}>
        {
        cards.length === 0 ?
        <Pressable style={styles.pressableCard}>
          <Image source={require('../../assets/placeholders/default-encounters.png')} style={styles.card}/>
        </Pressable> : 
        <Pressable style={styles.pressableCard} onPress={() => setModalVisible(true)}>
          <Image source={cards[0]?.src} style={styles.card}/>
        </Pressable>
        }
      <Text style={styles.title}>Rencontres</Text>
      </View>
      <CardModalWithNavigation
        currentPlayer={currentPlayer}
        swipeableItems={cards}
        visible={modalVisible} 
        onPress={() => setModalVisible(false)}
        cardToHand={true}
        onCardToHand={handleCardToHand}
        cardToAllies={true}
        onCardToAllies={handleCardToAllies}
        giveCard={false}
        onGiveCard={handleGiveCard}
      />
    </View>
   );
}
 
export default Encounters;