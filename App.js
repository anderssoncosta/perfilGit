import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Perfil from './src/Perfil';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    <StatusBar style='auto' />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
