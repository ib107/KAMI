
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../assets/circle_outline.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  
  logo: {
    height: 170,
    width: 170, 
    alignSelf: 'center', 
    marginTop: 20,
    marginBottom: 30,
  }
});