import React from 'react';
import { Modal } from 'react-native';
import CardModalView from './CardModalView';


const CardModal = ({
  currentPlayer,
  card,
  visible, 
  onPress, 
  discard = false, 
  onDiscard = null,
  cardToHand = false,
  onCardToHand = null,
  cardToAllies = false,
  onCardToAllies = null,
  giveCard,
  onGiveCard
}) => {
  return ( 
  <Modal 
    visible={visible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => onPress()}
    >
      <CardModalView 
        card={card} 
        onPress={onPress}
        discard={discard}
        onDiscard={onDiscard}
        cardToHand={cardToHand}
        onCardToHand={onCardToHand}
        cardToAllies={cardToAllies}
        onCardToAllies={onCardToAllies}
        giveCard={giveCard}
        onGiveCard={onGiveCard}
        currentPlayer={currentPlayer}
      />
  </Modal> 
  );
}
 
export default CardModal;