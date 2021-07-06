import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const screen = Dimensions.get('window')
const fontSize = 46

const styles = StyleSheet.create({
  timerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: screen.height / 2,
    left: screen.width / 2,
    transform: [
      { translateY: -fontSize },
      { translateX: -fontSize -90 }
    ]
  }, 
  timer: {
    color: '#F2A102',
    fontSize,
  },
  timerBtn: {
    color: '#F2A102',
    fontSize: 14,
    textTransform: "uppercase",
    marginLeft: 30,
    marginRight: 30
  },
  rulesBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  }
})

const Timer = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timer = null

    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 59) setMinutes((minutes) => minutes + 1)
        setSeconds((seconds) => seconds === 59 ? 0 : seconds + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isActive, seconds])
  

  function resetStopwatch () {
    setIsActive(false)
    setMinutes(0)
    setSeconds(0)
  }

  function toggleStart() {
    !isActive ? setIsActive(true) : setIsActive(false)
  }

  return ( 
    <View style={styles.timerView}>
      <Pressable onPress={resetStopwatch}>
        <Text style={styles.timerBtn}>Reset</Text>
      </Pressable>
      <Text style={styles.timer}>{minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds}</Text>
      <Pressable onPress={toggleStart}>
        <Text style={styles.timerBtn}>{isActive && 'Pause' || 'Start'}</Text>
      </Pressable>
    </View>
  );
}
 
export default Timer;