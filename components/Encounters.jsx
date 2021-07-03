import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import CardModal from './CardModal';

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

const Encounters = ({ cards, round }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return ( 
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{width: 68}}>
        <Pressable style={styles.pressableCard} onPress={() => setModalVisible(true)}>
          <Image source={cards[round - 1].src} style={styles.card}/>
        </Pressable>
      <Text style={styles.title}>Rencontres</Text>
      </View>
      <CardModal card={cards[round - 1]} visible={modalVisible} onPress={() => setModalVisible(false)}/>
    </View>
   );
}
 
export default Encounters;