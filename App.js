
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Jomhuria' : require('./assets/fonts/Jomhuria-Regular.ttf')
  })


  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/backgrounds/bg-home-shadowed.png')} style={styles.background}>
          <View style={styles.homeContainer}>
            <Text style={styles.text}>Nombre de joueurs (1 à 4)</Text>
            <TextInput keyboardType="numeric" style={styles.input} />
            <Pressable>
              <Text style={styles.textBtn}>Commencer</Text>
            </Pressable>
          </View>
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
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'Jomhuria'
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
  }
});
