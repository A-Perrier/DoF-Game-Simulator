import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  H1: {
    paddingTop: 30,
    paddingBottom: -10,
    paddingLeft: 5,
    paddingRight: 5,
    //textAlign: 'center',
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 36,
    textTransform: 'uppercase'
  },
  H2: {
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 32,
    textTransform: 'uppercase'
  },
  H3: {
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 28,
    textTransform: 'uppercase'
  },
  P: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    fontFamily: 'Jomhuria',
    fontSize: 24,
    //textAlign: "left",
  },
  Strong: {
    color: '#F2A102',
    fontFamily: 'Jomhuria',
    fontSize: 24
  },
  Li: {
    color: 'white',
    // textAlign: 'left',
    marginLeft: 20,
    paddingBottom: 10
  },
  LiPrependIcon: {
    fontSize: 12,
    paddingRight: 20,
    color: 'red'
  }
})

export const H1 = ({children, alignCenter = false}) => {
  return (
    <Text style={[styles.H1, {textAlign: alignCenter ? 'center' : 'left'}]}>{children}</Text>
  );
}

export const H2 = ({children, alignCenter = false}) => {
  return (
    <Text style={[styles.H2, {textAlign: alignCenter ? 'center' : 'left'}]}>{children}</Text>
  );
}

export const H3 = ({children, alignCenter = false}) => {
  return (
    <Text style={[styles.H3, {textAlign: alignCenter ? 'center' : 'left'}]}>{children}</Text>
  );
}

export const P = ({children, alignCenter = false}) => {
  return (
    <Text style={[styles.P, {textAlign: alignCenter ? 'center' : 'left'}]}>{children}</Text>
  );
}

export const Strong = ({children}) => {
  return (
    <Text style={styles.Strong}>{children}</Text>
  );
}

export const Br = ({ quantity = 1 }) => {
  let str = ''

  function display () {
    for (let i = 0; i < +quantity; i++) {
      str += '\n'
    }
    return str
  }

  display()
  return (
    <Text>{str}</Text>
  );
}

export const Li = ({children, alignCenter = false}) => {
  return (
    <Text style={[styles.Li, {textAlign: alignCenter ? 'center' : 'left'}]}>
      {'\n\t'}
      <Text style={styles.LiPrependIcon}>●</Text>
      {'\t\t'}
      {children}
      {'\n'}
    </Text>
  );
}