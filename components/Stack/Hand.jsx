import React, { useState } from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import CardModal from '../CardModal';

const styles = StyleSheet.create({
  handContainer: {
    flexDirection: 'column',
  },
  hand: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 108,
    justifyContent: 'center',
    maxWidth: 200,
  
  },
  pressableCard: {
    flex: 1,
    maxWidth: 70,
    minWidth: 40,
    marginLeft: -17
  },
  card: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: -35
  }
})


const Hand = ({ cards, onDiscard, onGiveCard, currentPlayer }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [cardToShow, setCardToShow] = useState(null)

  function toggleCardModal ( card ) {
    cardToShow ? setCardToShow(null) : setCardToShow(card)
    setModalVisible(!modalVisible)
  }

  function handleDiscard (card) {
    setModalVisible(false)
    setCardToShow(null)
    onDiscard(card, 'hand')
  }

  function handleGiveCard (card, target) {
    setModalVisible(false)
    setCardToShow(null)
    onGiveCard(card, target, 'hand')
  }

  return ( 
    <View style={styles.handContainer}>
      <View style={styles.hand}>
      {
        cards.map((card, index) =>
          <Pressable key={index} style={styles.pressableCard} onPress={() => toggleCardModal (card)}>
            <Image source={card.src} style={styles.card}/>
          </Pressable>
        )
      }
      </View>
      <Text style={styles.title}>Main</Text>
      <CardModal
        currentPlayer={currentPlayer}
        card={cardToShow} 
        visible={modalVisible} 
        onPress={() => toggleCardModal (cardToShow)} 
        discard={true} 
        onDiscard={handleDiscard}
        onGiveCard={handleGiveCard}
      />
    </View>
  );
}
 
export default Hand;