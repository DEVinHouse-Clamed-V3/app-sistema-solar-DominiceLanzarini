import { Text, View, Image, StyleSheet } from 'react-native'

export function Planetas({ planetas }) {
  return (
    <View>
      <View style={styles.nomeView}>
        <Text style={styles.nome}>{planetas.nome}</Text>
      </View>

      <Image style={styles.imagePlanetas} source={{ uri: planetas.img }} />

      <View style={styles.descricaoBreveView}>
        <Text style={styles.descricaoBreve}>{planetas.descricaoBreve}</Text>
      </View>
      
      <View style={styles.view}>
        <Text style={styles.texto}>Descrição: {planetas.descricao}</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.texto}>Número de Satélites: {planetas.quantidadeSatelites}</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.texto}>Área da Superfície: {planetas.areaSuperficieKm2} km²</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.texto}>Velocidade Orbital Média: {planetas.velocidadeOrbitalMediaKmS} km²/s</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.texto}>Período de Rotação: {planetas.periodoRotacaoDias} dias</Text>
      </View>  
    </View>
  )
}


const styles = StyleSheet.create({
  nomeView: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 20
  },
  nome: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  imagePlanetas: {
    width: '100%',
    height: 400,
  },
  descricaoBreveView: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  descricaoBreve: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  view: {
    padding: 10,
    alignItems: 'center'
  },
  texto: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center'
  }
})