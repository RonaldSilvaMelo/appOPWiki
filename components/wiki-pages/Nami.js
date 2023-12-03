import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function Nami() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titlebg}>
          <Text style={styles.title}>Nami</Text>
        </View>
        <Image source={require('../../assets/nami.jfif')} style={styles.img} />

        <View style={styles.background}>
          <Text style={styles.subtitle}>História</Text>
          <Text style={styles.content}>
            Nami nasceu em uma vila no East Blue, onde começou a desenvolver seu
            talento para navegação e mapas desde cedo. Depois de perder sua
            família para um grupo de piratas, Nami se tornou uma ladra, roubando
            dos piratas para comprar a liberdade de sua vila. Quando conheceu
            Monkey D. Luffy e sua equipe, ela se juntou ao bando para ajudar a
            alcançar seus sonhos e a proteger aqueles que ama.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Habilidades</Text>
          <Text style={styles.content}>
            Nami é uma excelente navegadora e cartógrafa, com habilidades
            avançadas em navegação, mapeamento e meteorologia. Ela também é uma
            ladra habilidosa, capaz de enganar e manipular seus inimigos para
            obter o que precisa. Além disso, ela possui habilidades em luta com
            bastão, embora essa habilidade não seja sua especialidade.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Feitos</Text>
          <Text style={styles.content}>
            Nami é responsável por vários feitos notáveis ao longo da história
            de One Piece. Ela ajudou a equipe a navegar pelos mares perigosos e
            foi fundamental na descoberta de muitas ilhas importantes e tesouros
            escondidos. Ela também foi importante na luta contra muitos dos
            inimigos do bando, usando sua inteligência e habilidades de luta
            para proteger seus companheiros de equipe.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Caracteristicas</Text>
          <Text style={styles.content}>
            Nami é uma personagem forte e determinada, com um coração compassivo
            e amoroso. Ela é uma das líderes do Bando do Chapéu de Palha, sempre
            planejando e pensando à frente para garantir a segurança de sua
            equipe. Ela é vista como uma irmã mais velha para muitos dos membros
            mais jovens da equipe, incluindo Luffy e Chopper.
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
    backgroundColor: '#cc6600',
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
    backgroundColor: '#ff8000',
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
