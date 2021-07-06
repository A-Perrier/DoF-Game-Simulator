import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import Timer from './Timer';

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  stopwatchBtn: {
    position: 'absolute',
    top: 35,
    right: 7,
    zIndex: 10
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.7)', 
    position:'absolute', 
    width: screen.width, 
    height: screen.height
  }
})

const Stopwatch = () => {
  const [showStopwatch, setShowStopwatch] = useState(false)

  return ( 
    <>
      <Pressable style={styles.stopwatchBtn} onPress={() => setShowStopwatch(true)}>
        <Image source={require('../../assets/stopwatch.png')}/>
      </Pressable>
      <Modal 
      visible={showStopwatch}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setShowStopwatch(false)}
    >
      <View style={styles.modalBackground}>
        <Timer />
      </View>
    </Modal>
    </>
  );
}
 
export default Stopwatch;