import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, Modal, ScrollView, ImageBackground } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { useFonts, Fredoka_600SemiBold } from '@expo-google-fonts/fredoka';

export default function Home2() {
  const [posicaoModal, setPosicaoModal] = useState(false)
  const [posicao, setPosicao] = useState(0)


  const [animais, setAnimais] = useState([
    {
      img: require('./img_t1/elefante.jpg'),
      nome: "Elefante",
      curiosidade: "O elefante é o maior mamífero terrestre do mundo, conhecido por sua inteligência, memória e fortes laços sociais.",
      habito: "Vivem em savanas, florestas e desertos, dependendo da espécie. São herbívoros e passam a maior parte do dia se alimentando.",
      reproducao: "A gestação dura cerca de 22 meses, a mais longa entre os mamíferos. Normalmente nasce um filhote por vez.",
      conservacao: "A caça ilegal pelo marfim e a perda de habitat colocam os elefantes em risco, apesar dos esforços de conservação em várias regiões."
    },
    {
      img: require('./img_t1/onca-parda.jpg'),
      nome: "Onça Parda",
      curiosidade: "Também conhecida como puma ou suçuarana, é o felino com maior distribuição nas Américas.",
      habito: "Habita florestas, cerrados e montanhas, sendo solitária e territorial. Alimenta-se de mamíferos, aves e répteis.",
      reproducao: "A fêmea dá à luz de um a quatro filhotes após cerca de 90 dias de gestação.",
      conservacao: "A fragmentação de habitat e conflitos com humanos são suas principais ameaças."
    },
    {
      img: require('./img_t1/jacare.jpg'),
      nome: "Jacaré",
      curiosidade: "Jacarés são répteis semi-aquáticos que vivem em rios, pântanos e lagos da América do Sul, como o jacaré-açu e o jacaré-do-papo-amarelo.",
      habito: "Passam boa parte do tempo na água, caçando peixes, aves e pequenos mamíferos.",
      reproducao: "A fêmea constrói ninhos com vegetação e põe de 20 a 50 ovos. Os filhotes nascem após cerca de 70 dias.",
      conservacao: "A caça e a destruição de habitats já ameaçaram muitas espécies, hoje protegidas por leis ambientais."
    },
    {
      img: require('./img_t1/onca-pintada.jpg'),
      nome: "Onça Pintada",
      curiosidade: "É o maior felino das Américas e símbolo da biodiversidade brasileira.",
      habito: "Habita florestas tropicais, pantanais e cerrados. Caça uma variedade de presas, incluindo capivaras, veados e jacarés.",
      reproducao: "A gestação dura cerca de 100 dias, nascendo até quatro filhotes, que ficam com a mãe por até dois anos.",
      conservacao: "Está ameaçada pela caça e pela perda de habitat; projetos de conservação tentam garantir sua sobrevivência."
    },
    {
      img: require('./img_t1/cagados.jpg'),
      nome: "Cágado",
      curiosidade: "Cágados são quelônios de água doce, com carapaça mais achatada que as tartarugas marinhas.",
      habito: "Vivem em rios, lagos e brejos, alimentando-se de plantas aquáticas, peixes pequenos e insetos.",
      reproducao: "A fêmea deposita ovos em buracos cavados na terra. Os filhotes nascem após semanas, dependendo da espécie.",
      conservacao: "A poluição e o tráfico de animais afetam várias espécies de cágados no Brasil."
    },
    {
      img: require('./img_t1/flamingo.jpg'),
      nome: "Flamingos",
      curiosidade: "Conhecidos por sua plumagem rosa, os flamingos se alimentam de pequenos crustáceos que lhes dão essa coloração.",
      habito: "Vivem em lagos salgados, lagoas e áreas alagadas, geralmente em grandes bandos.",
      reproducao: "Constroem ninhos de lama em forma de cone, onde colocam um único ovo por temporada.",
      conservacao: "São afetados por alterações em seus habitats e perturbações humanas, embora não estejam globalmente ameaçados."
    },
    {
      img: require('./img_t1/felino.jpg'),
      nome: "Felino",
      curiosidade: "Felinos são predadores ágeis e furtivos, com garras retráteis e excelente visão noturna.",
      habito: "Dependendo da espécie, habitam florestas, savanas, desertos e montanhas. Caçam sozinhos, principalmente ao amanhecer e anoitecer.",
      reproducao: "O ciclo reprodutivo varia entre espécies. Geralmente, nascem de dois a quatro filhotes por ninhada.",
      conservacao: "Muitas espécies de felinos estão ameaçadas por caça, perda de habitat e fragmentação de território."
    },
    {
      img: require('./img_t1/quati.jpg'),
      nome: "Quati",
      curiosidade: "O quati é um mamífero da família dos guaxinins, com focinho alongado e cauda comprida, usado para se equilibrar.",
      habito: "Vive em florestas e cerrados, é onívoro e ativo durante o dia. Escala árvores com facilidade.",
      reproducao: "A fêmea tem de dois a sete filhotes após cerca de 70 dias de gestação.",
      conservacao: "Embora não esteja amplamente ameaçado, sofre com atropelamentos e perda de habitat."
    },
    {
      img: require('./img_t1/loboguara.jpg'),
      nome: "Lobo-Guará",
      curiosidade: "É o maior canídeo da América do Sul, conhecido por suas pernas longas e pelagem avermelhada.",
      habito: "Habita o cerrado brasileiro, sendo solitário e onívoro, alimentando-se de frutos, pequenos vertebrados e insetos.",
      reproducao: "A gestação dura cerca de 65 dias e nascem de dois a cinco filhotes.",
      conservacao: "Está ameaçado pela perda de habitat, atropelamentos e doenças transmitidas por cães domésticos."
    },
    {
      img: require('./img_t1/Irara.jpg'),
      nome: "Irara",
      curiosidade: "Também chamada de papa-mel, a irara é um mustelídeo ágil e curioso, com corpo alongado e cauda longa.",
      habito: "Vive em florestas e matas fechadas, sendo onívora: come frutas, pequenos animais e até mel.",
      reproducao: "A fêmea dá à luz geralmente dois filhotes após gestação de cerca de dois meses.",
      conservacao: "Embora ainda comum em algumas áreas, sofre com a degradação do habitat e caça."
    }
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
              <Text style={styles.TextImg}>Elefante</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(1)}>
            <ImageBackground source={animais[1].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Onça Parda</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(2)}>
            <ImageBackground source={animais[2].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Jacaré</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(3)}>
            <ImageBackground source={animais[3].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Onça Pintada</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(4)}>
            <ImageBackground source={animais[4].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Cágado</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(5)}>
            <ImageBackground source={animais[5].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Flamingos</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(6)}>
            <ImageBackground source={animais[6].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Felino</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(7)}>
            <ImageBackground source={animais[7].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Quati</Text>
            </ImageBackground>
          </Pressable>  
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(8)}>
            <ImageBackground source={animais[8].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Lobo Guará</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(9)}>
            <ImageBackground source={animais[9].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Irara</Text>
            </ImageBackground>
          </Pressable>
        </View>


      </ScrollView>

      <Modal transparent={true} visible={posicaoModal}>
        <View style={styles.navbar}>
          <Pressable onPress={fechar_modal}>
            <Image
              source={require('./img_t1/seta.png')}
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

