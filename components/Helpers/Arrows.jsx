import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet } from 'react-native';

const modalWidth = 210
const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  arrow: {
    zIndex: 10,
    position: 'absolute',
  },
  prev: {
    top: screen.height / 2 - 35,
    left: (screen.width / 2) - modalWidth + 40,
  },
  next: {
    top: screen.height / 2 - 35,
    left: (screen.width / 2) + modalWidth - 40,
  }
})

export const LeftArrow = ({ onPress, visible }) => {
  return ( 
    visible ?
    <Pressable style={[styles.arrow, styles.prev]} onPress={onPress}>
      <Image source={require('../../assets/left.png')}/>
    </Pressable> :
    <></>
  );
}
 
export const RightArrow = ({ onPress, visible }) => {
  return ( 
    visible ?
    <Pressable style={[styles.arrow, styles.next]} onPress={onPress}>
      <Image source={require('../../assets/right.png')}/>
    </Pressable> : 
    <></>
  );
}