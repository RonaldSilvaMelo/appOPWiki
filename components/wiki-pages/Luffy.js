import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function Luffy() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titlebg}>
          <Text style={styles.title}>Monkey D. Luffy</Text>
        </View>
        <Image source={require('../../assets/luffy.jfif')} style={styles.img} />

        <View style={styles.background}>
          <Text style={styles.subtitle}>História</Text>
          <Text style={styles.content}>
            Monkey D. Luffy, também conhecido como Luffy Chapéu de Palha ou
            Chapéu de Palha, é um pirata e o protagonista do anime e mangá One
            Piece. Ele é o fundador e o capitão do cada vez mais infame e
            poderoso Piratas do Chapéu de Palha, bem como um de seus principais
            lutadores. Seu sonho de vida é se tornar o Rei dos Piratas,
            encontrando o lendário tesouro deixado pelo falecido Rei dos
            Piratas, Gol D. Roger. Ele acredita que ser o Rei dos Piratas
            significa ter a maior liberdade do mundo.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Habilidades</Text>
          <Text style={styles.content}>
            Luffy é capaz de esticar seus membros a distâncias incríveis, usando
            essa característica para atacar seus inimigos. Ele consegue deixar
            seu corpo em formatos estranhos, conseguindo surpreender seus
            oponentes que são incapazes de prever de onde vem os ataques. Por
            ser feito de borracha, ele é imune a eletricidade e a ataques com
            tiros ou socos. Ele também aguenta grandes impactos, podendo cair de
            altitudes elevadas sem se ferir. Mas isso tudo não o torna imortal:
            Luffy pode ser ferido com objetos cortantes ou pontiagudos e também
            sofre com o calor ou frio extremos. Além disso, ele carrega a
            fraqueza padrão da sua Fruta do Diabo: Luffy é incapaz de nadar.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Feitos</Text>
          <Text style={styles.content}>
            Conquistou a habilidade de usar o Haki, uma técnica de combate que
            permite aos usuários prever ataques, resistir a ataques e atacar
            seus oponentes sem tocá-los fisicamente. É capaz de esticar seu
            corpo como se fosse borracha, graças à habilidade adquirida após
            comer a Fruta do Diabo Gomu Gomu. Venceu vários oponentes poderosos
            em combates individuais, incluindo Rob Lucci, Crocodile, Donquixote
            Doflamingo e Charlotte Katakuri. Luffy liderou a Aliança Pirata do
            Bajula em sua luta contra a Família Donquixote e ajudou a derrubar o
            governo corrupto da ilha Dressrosa. Ele também liderou a equipe de
            resgate de Ace na Guerra de Marineford, onde enfrentou vários
            adversários poderosos e finalmente resgatou seu irmão Ace. Derrotou
            Charlotte Cracker e Big Mom, membros da Yonkou (Os Quatro
            Imperadores) e um dos piratas mais poderosos do mundo. Possui um
            navio, o Thousand Sunny, que é resistente e capaz de enfrentar
            tempestades e outras adversidades.
          </Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.subtitle}>Caracteristicas</Text>
          <Text style={styles.content}>
            Personalidade alegre e extrovertida: Luffy é conhecido por seu
            sorriso e seu senso de humor. Ele é um personagem extrovertido e
            alegre, que muitas vezes enfrenta desafios com uma atitude positiva
            e um espírito de aventura. Determinação implacável: Luffy é
            extremamente determinado e nunca desiste, mesmo quando enfrenta
            situações difíceis e aparentemente impossíveis. Ele está disposto a
            lutar até a morte por seus amigos e pelos ideais que ele acredita.
            Impulsividade: Luffy é conhecido por ser impulsivo e muitas vezes
            age sem pensar nas consequências. Isso pode levar a problemas, mas
            também pode torná-lo capaz de tomar decisões rápidas em situações de
            crise. Compaixão: Embora Luffy seja um lutador feroz, ele também tem
            um coração grande e é compassivo com aqueles que estão em
            necessidade. Ele está disposto a ajudar as pessoas, mesmo que isso
            signifique colocar-se em perigo. Lealdade aos amigos: Luffy é
            extremamente leal a seus amigos e fará qualquer coisa para
            protegê-los. Ele vê sua tripulação como uma família e está disposto
            a enfrentar qualquer desafio para mantê-los a salvo. Habilidade de
            liderança: Como capitão do Bando do Chapéu de Palha, Luffy é um
            líder natural e sabe como motivar e inspirar seus companheiros. Ele
            é capaz de tomar decisões difíceis quando necessário e é respeitado
            por sua tripulação.
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
    backgroundColor: '#DA1919',
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
    backgroundColor: '#ff1a1a',
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
