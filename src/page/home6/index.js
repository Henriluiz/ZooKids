import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, ImageBackground, Modal, ScrollView} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home6() {

  const [posicaoModal, setPosicaoModal] = useState(false);
  const [posicao, setPosicao] = useState(0);

  const [animais, setAnimais] = useState([
    {
      img: require('./img_t5/aguia.jpg'),
      nome: "Águia",
      curiosidade: "As águias possuem visão até oito vezes mais potente que a humana, permitindo enxergar presas a grandes distâncias.",
      habito: "Vivem em regiões montanhosas, florestas e áreas abertas, caçando peixes, roedores e outras aves.",
      reproducao: "Constroem grandes ninhos em penhascos ou árvores altas. A fêmea geralmente põe de 1 a 3 ovos por ninhada.",
      conservacao: "Algumas espécies estão ameaçadas pela destruição de habitat e contaminação por agrotóxicos."
    },
    {
      img: require('./img_t5/condor.jpeg'),
      nome: "Condor",
      curiosidade: "O condor-dos-andes é uma das maiores aves voadoras do mundo, com envergadura que pode ultrapassar 3 metros.",
      habito: "Habita regiões montanhosas da Cordilheira dos Andes, aproveitando as correntes de ar para planar grandes distâncias.",
      reproducao: "Põe um ou dois ovos em fendas de rochas, com longo período de incubação e cuidado parental.",
      conservacao: "Vulnerável devido à caça e envenenamento; projetos de reintrodução têm ajudado a aumentar sua população."
    },
    {
      img: require('./img_t5/gaviao.jpg'),
      nome: "Gavião",
      curiosidade: "Os gaviões são caçadores ágeis e rápidos, usando sua visão apurada para localizar presas em movimento.",
      habito: "Vivem em florestas, campos e áreas urbanas, alimentando-se de pequenos mamíferos, répteis e aves.",
      reproducao: "Fazem ninhos em árvores altas, onde a fêmea incuba de 2 a 4 ovos enquanto o macho caça.",
      conservacao: "Em geral, não estão ameaçados, mas sofrem com a perda de habitat e poluição."
    },
    {
      img: require('./img_t5/harpia.jpg'),
      nome: "Harpia",
      curiosidade: "É a maior e mais poderosa ave de rapina das Américas, com garras do tamanho de um urso.",
      habito: "Habita florestas tropicais densas, principalmente na Amazônia, caçando macacos e bichos-preguiça.",
      reproducao: "A fêmea põe um ou dois ovos, mas normalmente só um filhote sobrevive; o cuidado parental dura até 2 anos.",
      conservacao: "Vulnerável devido ao desmatamento e caça. Símbolo de conservação da fauna brasileira."
    },
    {
      img: require('./img_t5/urubu-rei.jpg'),
      nome: "Urubu-rei",
      curiosidade: "Reconhecido pela coloração vibrante da cabeça e pescoço, o urubu-rei é considerado o mais bonito entre os urubus.",
      habito: "Vive em florestas tropicais e áreas abertas da América Central e do Sul, alimentando-se de carcaças de animais.",
      reproducao: "Reproduz-se em ninhos no alto de árvores ou rochas, colocando geralmente um único ovo por vez.",
      conservacao: "Não está globalmente ameaçado, mas sofre com a degradação de florestas e redução de presas naturais."
    },
  ]);

  const fechar_modal = () => {
    setPosicaoModal(false)
  }

  const abrir_modal = (idModal) => {
    setPosicao(idModal)
    setPosicaoModal(true)
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(0)}>
            <ImageBackground source={animais[0].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Águia</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(1)}>
            <ImageBackground source={animais[1].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Condor</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(2)}>
            <ImageBackground source={animais[2].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Gavião</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(3)}>
            <ImageBackground source={animais[3].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Harpia</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(4)}>
            <ImageBackground source={animais[4].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Urubu rei</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </ScrollView>
  
      <Modal transparent={true} visible={posicaoModal}>
        <View style={styles.navbar}>
          <Pressable onPress={fechar_modal}>
            <Image
              source={require('./img_t5/seta.png')}
              style={{ width: 45, height: 40, marginLeft: 10, marginTop: 5.5}}/>
          </Pressable>
        </View>
        <ScrollView style={styles.modal_detalhado}>
          <View style={styles.modalView}>
          <Image source={animais[posicao].img} style={styles.imagem} />

          </View>
          <Text style={styles.titulo}>{animais[posicao].nome}</Text>
          <Text style={styles.titulo2}>Curiosidade</Text>
          <Text style={styles.Text}>{animais[posicao].curiosidade}</Text>
          <Text style={styles.titulo2}>Hábito</Text>
          <Text style={styles.Text}>{animais[posicao].habito}</Text>
          <Text style={styles.titulo2}>Reprodução</Text>
          <Text style={styles.Text}>{animais[posicao].reproducao}</Text>
          <Text style={styles.titulo2}>Conservação</Text>
          <Text style={styles.Text}>{animais[posicao].conservacao}</Text>
          
        </ScrollView>
      </Modal>
  
      <StatusBar style="auto" />
    </View>
  );
}
