import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameTable from './GameTable';
import { NavigationContainer } from '@react-navigation/native';

import { connect } from 'react-redux'


const styles = StyleSheet.create({
  gameContainer: {
    flex: 1
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  tabIcon: {
    width: 20,
    height: 15,
    marginBottom: -4
  }
})

const Tabs = createBottomTabNavigator()

const Game = ({ playersFromApp, rounds, players, dispatch }) => {
  const nbTables = (players.length - 2) > 0 ? 2 : 1
  // ICI ON VA VOULOIR MELANGER LES CARTES ET TOUT DISTRIBUER
  useEffect(() => {
    const action = {type: 'DECK_INITIALIZATION', value: null}
    dispatch(action)
  }, [])
  
  useEffect(() => {
    const action = {type: 'PLAYERS_INITIALIZATION', value: playersFromApp}
    dispatch(action)
  }, [])
  console.log('useeffect: ', players)

  function getTabBarOptions () {
    let options
    if (nbTables > 1) {
      options = { 
        showIcon: true,
        activeBackgroundColor: '#113650', 
        inactiveBackgroundColor: '#021422',
        style: {height: '10%', borderTopWidth: 0}
      }
    } else {
      options = {
        showIcon: false,
        showLabel: false,
        style: {height: 0, borderTopWidth: 0}
      }
    }
    return options
  }

  function getScreenOptions () {
    if (nbTables > 1) {
      return () => ({
        tabBarIcon: () => <Image source={require('../assets/table.png')} style={styles.tabIcon}/>
      })
    }
    return {}
  }

  return ( <></>
  /* <View style={styles.gameContainer}>
      <NavigationContainer>
        <Tabs.Navigator
          style={styles.tabbar} 
          initialRouteName="Table 1" 
          tabBarOptions={ getTabBarOptions() }
          screenOptions={ getScreenOptions() }  
          >
          <Tabs.Screen name="Table 1" component={GameTable} initialParams={ { players: [players[0], players[1]] } } />
          { nbTables > 1 &&
          <Tabs.Screen name="Table 2" component={GameTable} initialParams={ { players: [players[2], players[3]] } } />
          }
        </Tabs.Navigator>
      </NavigationContainer>
  </View> */
  );
}



const mapStateToProps = (state) => {
  return {
    encounters: state.manageDeck.encounters,
    hordes: state.manageDeck.hordes,
    bosses: state.manageDeck.bosses,
    items: state.manageDeck.items,
    players: state.managePlayers.players
  }
}

export default connect(mapStateToProps)(Game);