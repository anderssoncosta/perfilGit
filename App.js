import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
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
