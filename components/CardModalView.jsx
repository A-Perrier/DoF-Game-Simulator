import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

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


const CardModalView = ({ 
  currentPlayer,
  players,
  card,
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
    <View style={styles.modalBackground}>
      <Pressable style={styles.pressableCardModal} onPress={onPress}> 
        <Image source={card?.src} style={styles.cardModal}/>
      </Pressable>
      <View style={styles.sidePressable}>
        { 
          discard &&
          <Pressable onPress={() => onDiscard(card)}>
            <Text style={styles.sideText}>Défausser la carte</Text>
          </Pressable>
        }
        {
          cardToHand &&
          <Pressable onPress={() => onCardToHand(card)}>
            <Text style={styles.sideText}>Placer dans la main</Text>
          </Pressable>
        }
        {
          cardToAllies &&
          <Pressable onPress={() => onCardToAllies(card)}>
            <Text style={styles.sideText}>Déplacer en zone Alliée</Text>
          </Pressable>
        }
        {
          players.map((player, index) => {
            if (player !== currentPlayer) {
              return (
                <Pressable key={index} onPress={() => onGiveCard(card, player)}>
                  <Text style={styles.sideText}>Donner à {player.name}</Text>
                </Pressable>
              )
            }
          })
        }
      </View> 
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
  }
}

export default connect(mapStateToProps)(CardModalView);