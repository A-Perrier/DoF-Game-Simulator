import React from 'react';
import { Modal } from 'react-native';
import CardModalView from './CardModalView';


const CardModal = ({
  card,
  visible, 
  onPress, 
  discard = false, 
  onDiscard = null,
  cardToHand = false,
  onCardToHand = null,
  cardToAllies = false,
  onCardToAllies = null
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
      />
  </Modal> 
  );
}
 
export default CardModal;