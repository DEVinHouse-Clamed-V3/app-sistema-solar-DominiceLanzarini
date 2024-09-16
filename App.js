import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { planetas } from './planetas'
import {Planetas} from './PlanetasPost'

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>

      <StatusBar backgroundColor="#f7ff00" />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg' }}
        />
        <Text style={styles.header}>Vamos Explorar!</Text>
      </View>

      <ScrollView>
        {
          planetas.map((planetas, index) => (
            <Planetas key= {index} planetas={planetas}></Planetas>
          ))
        }
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40
  },
  imgHeader: {
    width: 35,
    height: 35
  },
  header: {
    backgroundColor: '#000',
    color: '#FFF',
    fontSize: 24,
    flexDirection: 'row',
    padding: 10,
  }
});
