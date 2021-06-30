import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameTable from './GameTable';
import { NavigationContainer } from '@react-navigation/native';
import Bosses from '../entity/Bosses'
import Hordes from '../entity/Hordes'
import ClassicEncounters from '../entity/ClassicEncounters'
import Items from '../entity/Items'


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

const Game = ({ players, rounds }) => {
  const nbTables = (players.length - 2) > 0 ? 2 : 1
  // ICI ON VA VOULOIR MELANGER LES CARTES ET TOUT DISTRIBUER
  const bosses = new Bosses()
  const hordes = new Hordes()
  const encounters = new ClassicEncounters()
  const items = new Items()
  
  bosses.shuffle()
  hordes.shuffle()
  encounters.shuffle()
  items.shuffle()

  players.forEach(player => {
    const regularEncounters = rounds - 2
    player.addItem(items.draw(2))
          .addEncounters(encounters.draw(regularEncounters))
          .addEncounters(hordes.draw())
          .addEncounters(bosses.draw())
  })

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
  </View>
  );
}



export default Game;