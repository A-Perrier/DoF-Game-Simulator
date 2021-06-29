
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, LogBox, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Game from './components/Game';

LogBox.ignoreLogs(['Remote debugger'])
LogBox.ignoreLogs(['Failed prop type'])

export default function App() {
  let [fontsLoaded] = useFonts({
    'Jomhuria' : require('./assets/fonts/Jomhuria-Regular.ttf')
  })

  const [nbPlayerStep, setNbPlayerStep] = useState(true)
  const [namesStep, setNamesStep] = useState(false)
  const [nbRoundStep, setNbRoundStep] = useState(false)
  const [gameStep, setGameStep] = useState(false)

  const [nbPlayers, setNbPlayers] = useState('1')
  const [players, setPlayers] = useState([])
  const [nbRounds, setNbRounds] = useState('5')

  function handleNbPlayers (text) {
    if (text < 1) text = 1
    if (text > 4) text = 4
    setNbPlayers(text)
  }

  function handleNbRounds (text) {
    if (text < 2) text = 2
    if (text > 8) text = 8
    setNbRounds(text)
  }

  function handlePlayerInput (text, p) {
    const playersCopy = players.slice()
    playersCopy[p] = text
    setPlayers(playersCopy)
  }
  
  function toNbPlayersStep () {
    setNamesStep(false)
    setNbPlayerStep(true)
    setPlayers([])
  }

  function toNamesStep () {
    setNbPlayerStep(false)
    setNbRoundStep(false)
    setNamesStep(true)
  }

  function toRoundStep () {
    setNamesStep(false)
    setNbRoundStep(true)
  }

  function toGameLaunch () {
    setNbRoundStep(false)
    setGameStep(true)
  }

  function renderPlayerNameInputs () {
    const inputs = []
    for (let p = 0; p < nbPlayers; p++) {
      inputs.push(
        <TextInput 
        key={p} 
        style={styles.nameInput} 
        placeholder={`Joueur ${p + 1}`} 
        value={players[p]?.username}
        onChangeText={(text) => handlePlayerInput(text, p)}
        />)
    }
    return inputs
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/backgrounds/bg-home-shadowed.png')} style={styles.background}>
            {
              nbPlayerStep &&
              <View style={styles.nbPlayersContainer}>
                <Text style={styles.text}>Nombre de joueurs (1 à 4)</Text>
                <TextInput keyboardType="numeric" style={styles.input} value={nbPlayers} onChangeText={(text) => handleNbPlayers (text)}/>
                <Pressable onPress={toNamesStep}>
                  <Text style={styles.textBtn}>Continuer</Text>
                </Pressable>
              </View>
            }

            {
              namesStep &&
              <View style={styles.namesContainer}>
                <Text style={styles.text}>Entrez le nom de chaque joueur</Text>
                <Text style={styles.miniText}>Attention, les champs vides ne seront pas pris en compte</Text>
                <View style={styles.inputsContainer}>
                  { renderPlayerNameInputs() }
                </View>
                <Pressable onPress={toRoundStep}>
                  <Text style={styles.textBtn}>Continuer</Text>
                </Pressable>
                <Pressable onPress={toNbPlayersStep}>
                  <Text style={[styles.textBtn, {marginTop: -30}]}>Retour</Text>
                </Pressable>
              </View>
            }

            {
              nbRoundStep &&
              <View style={styles.nbPlayersContainer}>
                <Text style={styles.text}>Nombre de rounds (de 2 à 8)</Text>
                <TextInput keyboardType="numeric" style={styles.input} value={nbRounds} onChangeText={(text) => handleNbRounds (text)}/>
                <Pressable onPress={toGameLaunch}>
                  <Text style={styles.textBtn}>Continuer</Text>
                </Pressable>
                <Pressable onPress={toNamesStep}>
                  <Text style={[styles.textBtn, {marginTop: -30}]}>Retour</Text>
                </Pressable>
              </View>
            }

            {
              gameStep &&
              <Game players={players} rounds={nbRounds} />
            }
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  nbPlayersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'Jomhuria'
  },
  miniText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Jomhuria',
    marginTop: -30
  },
  textBtn: {
    color: '#F2A102',
    fontSize: 48,
    fontFamily: 'Jomhuria',
    marginTop: -10
  },
  input: {
    backgroundColor: 'white',
    width: '10%',
    fontSize: 18,
    height: 36,
    opacity: .8
  },
  namesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputsContainer: {
    flex: 1,
    maxWidth: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  nameInput: {
    backgroundColor: 'white',
    width: '30%',
    fontSize: 18,
    height: 36,
    opacity: .8,
    margin: 10
  }
});
