import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';

const modalWidth = 210

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
  }
})

const CardModal = ({card, visible, onPress}) => {
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
    </View>
  </Modal> 
  );
}
 
export default CardModal;