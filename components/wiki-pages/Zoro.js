import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function Zoro() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titlebg}>
          <Text style={styles.title}>Roronoa Zoro</Text>
        </View>
        <Image source={require('../../assets/zoro.jfif')} style={styles.img} />

        <View style={styles.background}>
          <Text style={styles.subtitle}>História</Text>
          <Text style={styles.content}>
            Zoro nasceu em Shimotsuki, uma pequena aldeia localizada na East
            Blue. Desde jovem, ele sempre sonhou em se tornar o maior espadachim
            do mundo. No entanto, após uma série de eventos trágicos, incluindo
            a morte de sua melhor amiga, Kuina, ele decidiu abandonar sua vila
            natal e começar uma jornada como um pirata.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Habilidades</Text>
          <Text style={styles.content}>
            Zoro é um espadachim habilidoso, que luta usando três espadas ao
            mesmo tempo - duas em suas mãos e uma em sua boca. Ele é capaz de
            cortar praticamente qualquer coisa com sua técnica de espada,
            conhecida como "Santoryu". Além disso, ele é conhecido por sua
            incrível força e resistência, o que o permite suportar ferimentos
            graves e continuar lutando.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Feitos</Text>
          <Text style={styles.content}>
            Zoro é responsável por uma série de feitos notáveis ao longo da
            história de One Piece. Ele já lutou contra vários inimigos
            poderosos, incluindo o lendário espadachim Mihawk, que lhe concedeu
            o título de "Pirata Caçador de Piratas". Ele também ajudou a salvar
            seus companheiros de equipe em várias ocasiões e até mesmo
            sacrificou sua própria vida para proteger Luffy de seus ferimentos
            mortais.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Caracteristicas</Text>
          <Text style={styles.content}>
            Zoro é geralmente um personagem sério e calmo, que raramente se
            deixa levar por suas emoções. Ele é leal e dedicado a seus amigos e
            companheiros de equipe, e muitas vezes é visto como o "segundo em
            comando" do Bando do Chapéu de Palha. Ele também tem uma
            personalidade teimosa e às vezes é imprudente, o que pode colocá-lo
            em perigo.
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
    backgroundColor: '#006600',
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
    backgroundColor: '#009900',
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
