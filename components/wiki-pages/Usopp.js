import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function Usopp() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titlebg}>
          <Text style={styles.title}>'God' Usopp</Text>
        </View>
        <Image source={require('../../assets/usopp.png')} style={styles.img} />

        <View style={styles.background}>
          <Text style={styles.subtitle}>História</Text>
          <Text style={styles.content}>
            Usopp nasceu na ilha de Syrup, localizada na East Blue. Ele cresceu
            com uma imaginação fértil e gostava de contar histórias e mentiras
            para os outros. Depois de se juntar ao Bando do Chapéu de Palha, ele
            descobriu seu talento como atirador, usando seu estilingue e
            habilidades para ajudar seus companheiros de equipe em batalhas.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Habilidades</Text>
          <Text style={styles.content}>
            Usopp é um atirador habilidoso, que usa seu estilingue para lançar
            projéteis com precisão. Ele também é um engenheiro talentoso, capaz
            de criar armas e dispositivos de alta tecnologia para ajudar sua
            equipe. Além disso, ele tem habilidades de persuasão e enganação,
            muitas vezes usando suas mentiras para enganar seus inimigos e se
            safar de situações perigosas.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Feitos</Text>
          <Text style={styles.content}>
            Usopp é responsável por vários feitos notáveis ao longo da história
            de One Piece. Ele ajudou a salvar seus companheiros de equipe em
            várias ocasiões, muitas vezes usando sua astúcia e inteligência para
            encontrar uma solução para um problema. Ele também foi fundamental
            em várias batalhas importantes, como a luta contra a CP9 e a batalha
            contra os Tontattas na Dressrosa.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Caracteristicas</Text>
          <Text style={styles.content}>
            Usopp é um personagem divertido e cativante, com uma imaginação
            fértil e um grande coração. Ele é frequentemente visto como um
            covarde, mas é capaz de superar seus medos quando seus amigos estão
            em perigo. Ele também é um mentiroso notório, mas seus amigos sabem
            que suas mentiras vêm de um lugar de proteção e amor por eles.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#996633',
    padding: 0,
  },
  titlebg: {
    backgroundColor: 'black',
    flex: 1,
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    color: 'white',
  },
  img: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 50,
  },
  background: {
    borderRadius: 20,
    backgroundColor: '#cc9966',
    margin: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10,
    color: 'white',
  },
  content: {
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    marginBottom: 15,
  },
});
