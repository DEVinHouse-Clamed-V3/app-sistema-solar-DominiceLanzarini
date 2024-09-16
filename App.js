import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import { planetas } from './planetas'
import { Planetas } from './PlanetasPost'

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

      <ImageBackground
        source={{ uri: 'https://aventurasnahistoria.com.br/media/uploads/hard_news/design_sem_nome_4_9Syquv8.jpg' }}
        style={styles.backgroundImage}>
        <Swiper showsButtons loop={false}>
          {
            planetas.map((planetas, index) => (
              <ScrollView>
                <Planetas key={index} planetas={planetas}></Planetas>
              </ScrollView>
            ))
          }
        </Swiper>
      </ImageBackground>

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
    color: '#f7ff00',
    fontSize: 24,
    flexDirection: 'row',
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
