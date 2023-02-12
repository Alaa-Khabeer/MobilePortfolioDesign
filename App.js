import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Download from './components/download';
import Extra from './components/Extra';
import Head from './components/Header';
import Hr from './components/HR';
import Info from './components/Info';
import Lang from './components/Language';
import Skill from './components/Skill';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Head/>
      <Hr/>
      <Info/>
      <Hr/>
      <Lang/>
      <Hr/>
      <Skill/>
      <Hr/>
      <Extra/>
      <Hr/>
      <Download/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34373a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:50
  },
   
});
