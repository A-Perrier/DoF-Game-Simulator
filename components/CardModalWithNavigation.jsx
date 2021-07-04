import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import CardModalView from './CardModalView';
import { LeftArrow, RightArrow } from './Helpers/Arrows';


const CardModalWithNavigation = ({
  swipeableItems,
  visible, 
  onPress, 
  discard = false, 
  onDiscard = null,
  cardToHand = false,
  onCardToHand = null,
  cardToAllies = false,
  onCardToAllies = null
}) => {
  const [indexToDisplay, setIndexToDisplay] = useState(0)
  const [limit, setLimit] = useState(swipeableItems.length)

  let isFirstCardDrew = limit - 1 > indexToDisplay
  let isLastCardDrew = indexToDisplay > 0

  useEffect(() => {
    setIndexToDisplay(0)
    setLimit(swipeableItems.length)
  }, [swipeableItems])

  function previousCard () {
    setIndexToDisplay(indexToDisplay + 1)
  }
  
  function nextCard () {
    setIndexToDisplay(indexToDisplay - 1)
  }


  return ( 
  <Modal 
    visible={visible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => onPress()}
    >
      <LeftArrow onPress={previousCard} visible={isFirstCardDrew} />
      <CardModalView 
        card={swipeableItems[indexToDisplay]} 
        onPress={onPress}
        discard={discard}
        onDiscard={onDiscard}
        cardToHand={cardToHand}
        onCardToHand={onCardToHand}
        cardToAllies={cardToAllies}
        onCardToAllies={onCardToAllies}
      />
      <RightArrow onPress={nextCard} visible={isLastCardDrew} />
  </Modal> 
  );
}
 
export default CardModalWithNavigation;