import React, { useState } from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import CardModal from '../CardModal';

const styles = StyleSheet.create({
  alliesContainer: {
    flexDirection: 'column',
  },
  allies: {
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
    marginLeft: -20
  }
})


const Allies = ({ cards, onDiscard }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [cardToShow, setCardToShow] = useState(null)

  function toggleCardModal ( card ) {
    cardToShow ? setCardToShow(null) : setCardToShow(card)
    setModalVisible(!modalVisible)
  }

  function handleDiscard (card) {
    setModalVisible(false)
    setCardToShow(null)
    onDiscard(card, 'allies')
  }

  return ( 
    <View style={styles.alliesContainer}>
      <View style={styles.allies}>
      {
        cards.map((card, index) =>
          <Pressable key={index} style={styles.pressableCard} onPress={() => toggleCardModal (card)}>
            <Image source={card.src} style={styles.card}/>
          </Pressable>
        )
      }
      {
        cards.length === 0 ?
        <Pressable style={styles.pressableCard}>
          <Image source={require('../../assets/placeholders/default-allies.png')} style={styles.card}/>
        </Pressable> : <></>
      }
      </View>
      <Text style={styles.title}>Alliés</Text>
      <CardModal 
        card={cardToShow} 
        visible={modalVisible} 
        onPress={() => toggleCardModal (cardToShow)} 
        discard={true} 
        onDiscard={handleDiscard}
      />
    </View>
  );
}
 
export default Allies;