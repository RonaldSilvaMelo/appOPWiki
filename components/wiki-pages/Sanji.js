import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function Sanji() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titlebg}>
          <Text style={styles.title}>Vinsmoke Sanji</Text>
        </View>
        <Image source={require('../../assets/sanji.jfif')} style={styles.img} />

        <View style={styles.background}>
          <Text style={styles.subtitle}>História</Text>
          <Text style={styles.content}>
            Vinsmoke Sanji, faz parte da família real do reino de Germa, junto
            com seus outros três irmãos. Seu pai, Vinsmoke Judge, planejava
            modificar geneticamente todos os seus filhos, para que eles tivessem
            força sobre-humana e nenhuma emoção, os tornando, eventualmente,
            “soldados perfeitos”.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Habilidades</Text>
          <Text style={styles.content}>
            Características Físicas Sobre-Humanas, Artes Marciais, Manipulação
            do Fogo, Calor via Diable Jambe e Resistência contra isso. | Todos
            os poderes anteriores em uma escala absurdamente maior, Haki
            (Busoshoku básico, Kenbunshoku Proeficiente), Pseudo-Voo via Sky
            Walk, Com o Raid-Suit ele possui: Voo, Invisibilidade, Velocidade
            Melhorada, Resistência contra Fogo e Eletriciade, Imunidade á
            disparos de balas, possivelmente muitos outros.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Feitos</Text>
          <Text style={styles.content}>
            Sanji teve uma grande gama de feitos na serie, como ser o braço
            esquerdo de Luffy D. Monkey, derrotar Queen, um dos tripulantes mais
            fortes de Kaido, participar da família Vinsmoke, uma das familias
            mais fortes do reino germa 66.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Caracteristicas</Text>
          <Text style={styles.content}>
            Sanji é geralmente um personagem que se deixa levar por suas
            emoções. Ele é leal e dedicado a seus amigos e companheiros de
            equipe, ele é um otimo cozinheiro, assim como otimo lutador.
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
    backgroundColor: '#EBB501',
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
    backgroundColor: '#fecf34',
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
