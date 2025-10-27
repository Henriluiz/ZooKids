import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, ImageBackground, Modal, ScrollView} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home7() {

  const [posicaoModal, setPosicaoModal] = useState(false);
  const [posicao, setPosicao] = useState(0);

  const [animais, setAnimais] = useState([
    {
      img: require('./img_t6/chimpanze.jpg'),
      nome: "Chimpanzé",
      curiosidade: "Compartilha cerca de 98% do DNA com os humanos e é conhecido por sua inteligência e uso de ferramentas.",
      habito: "Vive em florestas tropicais e savanas africanas, em grupos sociais complexos liderados por machos dominantes.",
      reproducao: "A gestação dura cerca de 8 meses e nasce um único filhote, que depende intensamente da mãe por vários anos.",
      conservacao: "Em perigo de extinção devido à caça e destruição de florestas. Protegido por leis internacionais e santuários."
    },
    {
      img: require('./img_t6/muriqui.jpg'),
      nome: "Muriqui-do-sul",
      curiosidade: "É o maior primata das Américas e um símbolo da Mata Atlântica brasileira.",
      habito: "Vive em grupos nas copas das florestas, alimentando-se de folhas, frutos e flores.",
      reproducao: "A gestação dura cerca de 7 meses e nasce um filhote que é carregado pela mãe nos primeiros meses de vida.",
      conservacao: "Criticamente ameaçado devido ao desmatamento e à caça. Espécie prioritária em programas de conservação no Brasil."
    },
    {
      img: require('./img_t6/orangotango.jpg'),
      nome: "Orangotango",
      curiosidade: "Seu nome significa 'homem da floresta' em malaio; é um dos animais mais inteligentes do planeta.",
      habito: "Habita florestas tropicais de Sumatra e Bornéu, vivendo a maior parte do tempo nas árvores.",
      reproducao: "A gestação dura cerca de 8,5 meses e a mãe cuida do filhote por até 7 anos, o período mais longo entre os primatas.",
      conservacao: "Criticamente ameaçado devido ao desmatamento para plantações de óleo de palma e caça ilegal."
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
              <Text style={styles.TextImg}>Chimpanzé</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(1)}>
            <ImageBackground source={animais[1].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Muriqui do sul</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(2)}>
            <ImageBackground source={animais[2].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Orangotango</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </ScrollView>
  
      <Modal transparent={true} visible={posicaoModal}>
        <View style={styles.navbar}>
          <Pressable onPress={fechar_modal}>
            <Image
              source={require('./img_t6/seta.png')}
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
