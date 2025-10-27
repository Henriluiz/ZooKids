import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, ImageBackground, Modal, ScrollView} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home4() {

  const [posicaoModal, setPosicaoModal] = useState(false);
  const [posicao, setPosicao] = useState(0);

  const [animais, setAnimais] = useState([
    {
      img: require('./img_t3/axolotes.jpg'),
      nome: "Axolote",
      curiosidade: "Conhecido como 'monstro da água', o axolote é um anfíbio capaz de regenerar partes do corpo, incluindo coração, cérebro e membros.",
      habito: "Vive em lagos e canais de água doce no México, preferindo águas frias e calmas.",
      reproducao: "Reproduz-se na água. As fêmeas colocam centenas de ovos que eclodem em poucos dias.",
      conservacao: "Criticamente ameaçado devido à poluição e perda de habitat. É criado em cativeiro para preservação e pesquisa científica."
    },
    {
      img: require('./img_t3/raposinha.jpg'),
      nome: "Raposinha-do-campo",
      curiosidade: "É o menor canídeo do Brasil, medindo cerca de 60 cm de comprimento e pesando até 4 kg.",
      habito: "Habita o Cerrado, campos e áreas abertas, sendo mais ativa ao entardecer e durante a noite.",
      reproducao: "A gestação dura cerca de 50 dias e nascem de 3 a 5 filhotes em tocas subterrâneas.",
      conservacao: "Embora ainda não esteja ameaçada, sofre com atropelamentos e perda de habitat natural."
    },
    {
      img: require('./img_t3/cachorro-do-mato.jpg'),
      nome: "Cachorro-do-mato",
      curiosidade: "Espécie adaptável, encontrada em diferentes biomas brasileiros, incluindo florestas e áreas agrícolas.",
      habito: "Onívoro, alimenta-se de frutas, insetos e pequenos vertebrados; é solitário e de hábitos noturnos.",
      reproducao: "O casal forma laços monogâmicos e a fêmea tem de 3 a 6 filhotes por gestação.",
      conservacao: "Enfrenta ameaças como atropelamentos e fragmentação de habitat, mas ainda é considerada de menor preocupação."
    },
    {
      img: require('./img_t3/tamandua-bandeira.jpg'),
      nome: "Tamanduá-bandeira",
      curiosidade: "É o maior dos tamanduás, podendo atingir até 2 metros de comprimento contando com a cauda.",
      habito: "Vive em áreas abertas e florestas; alimenta-se principalmente de formigas e cupins, usando sua língua longa e pegajosa.",
      reproducao: "A gestação dura cerca de 6 meses e nasce apenas um filhote, que é carregado nas costas da mãe.",
      conservacao: "Vulnerável devido à perda de habitat, atropelamentos e incêndios florestais."
    },
    {
      img: require('./img_t3/urso-de-oculos.jpg'),
      nome: "Urso-de-Óculos",
      curiosidade: "É o único urso nativo da América do Sul, reconhecido pelas manchas claras ao redor dos olhos que lembram óculos.",
      habito: "Habita florestas andinas e regiões montanhosas, alimentando-se de frutas, brotos e pequenos animais.",
      reproducao: "A fêmea tem de 1 a 2 filhotes após uma gestação de cerca de 7 meses.",
      conservacao: "Vulnerável, devido ao desmatamento e à caça ilegal. É símbolo de conservação nos Andes."
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
              <Text style={styles.TextImg}>Axolote</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(1)}>
            <ImageBackground source={animais[1].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Raposinha do campo</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(2)}>
            <ImageBackground source={animais[2].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Cachorro-do-mato</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(3)}>
            <ImageBackground source={animais[3].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Tamanduá-bandeira</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(4)}>
            <ImageBackground source={animais[4].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Urso de Óculos</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </ScrollView>
  
      <Modal transparent={true} visible={posicaoModal}>
        <View style={styles.navbar}>
          <Pressable onPress={fechar_modal}>
            <Image
              source={require('./img_t3/seta.png')}
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
