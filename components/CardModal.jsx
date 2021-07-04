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
        onGiveCard={onGiveCard}
        currentPlayer={currentPlayer}
      />
  </Modal> 
  );
}
 
export default CardModal;