import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameTable from './GameTable';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux'
import RuleBook from './RuleBook';


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
  },
})

const Tabs = createBottomTabNavigator()

const Game = ({ playersFromApp, roundsFromApp, dispatch }) => {
  const nbTables = (playersFromApp.length - 2) > 0 ? 2 : 1
  
  // On initialise les cartes de départ, les joueurs et leur donjon/items
  useEffect(() => {
    const action = {type: 'GAME_INITIALIZATION', value: {playersFromApp, roundsFromApp}}
    dispatch(action)
  }, [])
  
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

  return (
  <View style={styles.gameContainer}>
    <RuleBook />
    <NavigationContainer>
      <Tabs.Navigator
        style={styles.tabbar} 
        initialRouteName="Table 1" 
        tabBarOptions={ getTabBarOptions() }
        screenOptions={ getScreenOptions() }  
        >
        <Tabs.Screen name="Table 1" component={GameTable}  />
        { nbTables > 1 &&
        <Tabs.Screen name="Table 2" component={GameTable}  />
        }
      </Tabs.Navigator>
    </NavigationContainer>
  </View>
  );
}



const mapStateToProps = (state) => {
  return {
    encounters: state.encounters,
    hordes: state.hordes,
    bosses: state.bosses,
    items: state.items,
    players: state.players,
    rounds: state.rounds
  }
}

export default connect(mapStateToProps)(Game);