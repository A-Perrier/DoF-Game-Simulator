import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameTable from './GameTable';
import { NavigationContainer } from '@react-navigation/native';


const styles = {
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
}

const Tabs = createBottomTabNavigator()

const Game = ({ players, rounds }) => {
  const nbTables = (players.length - 2) > 0 ? 2 : 1

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
          <Tabs.Screen name="Table 1" component={GameTable} initialParams={ { player1: players[0], player2: players[1] } } />
          { nbTables > 1 &&
          <Tabs.Screen name="Table 2" component={GameTable} initialParams={ { player1: players[2], player2: players[3] } } />
          }
        </Tabs.Navigator>
      </NavigationContainer>
  </View>
  );
}



export default Game;