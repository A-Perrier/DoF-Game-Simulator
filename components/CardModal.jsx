import React from 'react';
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const modalWidth = 210
const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.7)', 
    position:'absolute', 
    width: '100%', 
    height: '100%'
  },
  pressableCardModal: {
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -modalWidth / 2}],
    height: 360,
    width: 210
  },
  cardModal: {
    height: 360,
    width: 210
  },
  sidePressable: {
    position: 'absolute',
    top: 0,
    left: (screen.width / 2) + modalWidth + 10,
    transform: [{translateX: -modalWidth / 2}],
  },
  sideText: {
    color: '#F2A102',
    fontFamily: 'Jomhuria',
    fontSize: 28,
  }
})

const CardModal = ({card, visible, onPress, discard = false, onDiscard = null}) => {  
  return ( 
  <Modal 
    visible={visible}
    animationType="slide"
    transparent={true}
    >
    <View style={styles.modalBackground}>
      <Pressable style={styles.pressableCardModal} onPress={onPress}>
        <Image source={card?.src} style={styles.cardModal}/>
      </Pressable>
      { discard &&
      <Pressable onPress={() => onDiscard(card)} style={styles.sidePressable}>
        <Text style={styles.sideText}>Défausser la carte</Text>
      </Pressable>
      }
    </View>
  </Modal> 
  );
}
 
export default CardModal;