import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, ImageBackground, Modal, ScrollView} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home3() {

  const [posicaoModal, setPosicaoModal] = useState(false);
  const [posicao, setPosicao] = useState(0);

  const [animais, setAnimais] = useState([
    {
      img: require('./img_t2/aves-mata-altantica.jpg'),
      nome: "Aves da Mata Atlântica",
      curiosidade: "A Mata Atlântica abriga mais de 850 espécies de aves, muitas delas endêmicas, como o tiê-sangue e o saíra-sete-cores.",
      habito: "Vivem em florestas densas, alimentando-se de frutas, insetos e sementes, contribuindo para a dispersão de plantas.",
      reproducao: "Fazem ninhos em árvores ou arbustos. A época reprodutiva varia conforme o clima e a espécie.",
      conservacao: "O desmatamento e o tráfico de animais ameaçam várias espécies; muitas estão em programas de conservação."
    },
    {
      img: require('./img_t2/aves-caatinga.jpg'),
      nome: "Aves da Caatinga",
      curiosidade: "A Caatinga possui aves adaptadas à seca, como o asa-branca e o corrupião, que resistem a longos períodos sem água.",
      habito: "Vivem em áreas abertas e arbustivas, alimentando-se de frutos secos, sementes e pequenos insetos.",
      reproducao: "Reproduzem-se durante a estação chuvosa, quando há mais alimento disponível.",
      conservacao: "O desmatamento e a caça reduzem a população de aves nativas; a preservação do bioma é essencial."
    },
    {
      img: require('./img_t2/aves-amazonia.jpg'),
      nome: "Aves da Amazônia",
      curiosidade: "A Amazônia é o lar de cerca de 1.300 espécies de aves, incluindo araras, tucanos e garças coloridas.",
      habito: "Vivem em diferentes estratos da floresta, alimentando-se de frutos, sementes e pequenos animais.",
      reproducao: "Fazem ninhos em ocos de árvores ou em ninhos abandonados, com reprodução durante a estação das chuvas.",
      conservacao: "O desmatamento e o comércio ilegal são as maiores ameaças; áreas protegidas ajudam na preservação."
    },
    {
      img: require('./img_t2/aves-pantanal.jpg'),
      nome: "Aves do Pantanal",
      curiosidade: "O Pantanal é um dos maiores santuários de aves do mundo, com espécies como tuiuiú, colhereiro e garça-branca.",
      habito: "Vivem em áreas alagadas, alimentando-se de peixes, insetos e pequenos répteis.",
      reproducao: "Reproduzem-se na época das cheias, construindo ninhos próximos à água.",
      conservacao: "Queimadas e alterações nos ciclos das cheias ameaçam a reprodução e alimentação das aves."
    },
    {
      img: require('./img_t2/serpentes.jpg'),
      nome: "Serpentes",
      curiosidade: "Existem mais de 400 espécies de serpentes no Brasil, a maioria não venenosa e importante para o equilíbrio ecológico.",
      habito: "Vivem em diferentes ambientes, caçando roedores, aves e anfíbios.",
      reproducao: "Podem ser ovíparas ou vivíparas, dependendo da espécie. A reprodução ocorre geralmente em épocas quentes.",
      conservacao: "São frequentemente mortas por medo; a preservação depende da conscientização e manutenção dos habitats."
    },
    {
      img: require('./img_t2/micos.jpg'),
      nome: "Micos",
      curiosidade: "Os micos são pequenos primatas brasileiros, como o mico-leão-dourado e o mico-estrela, conhecidos por sua agilidade.",
      habito: "Vivem em grupos familiares nas copas das árvores, alimentando-se de frutas, insetos e néctar.",
      reproducao: "Têm gestações curtas, com o nascimento de um ou dois filhotes por vez, que são cuidados por todo o grupo.",
      conservacao: "O desmatamento e o tráfico de animais ameaçam espécies como o mico-leão-dourado."
    },
    {
      img: require('./img_t2/anfibios.jpg'),
      nome: "Anfíbios",
      curiosidade: "Rãs, sapos e pererecas respiram pela pele e são bioindicadores da qualidade ambiental.",
      habito: "Vivem em locais úmidos próximos à água, alimentando-se de insetos e pequenos invertebrados.",
      reproducao: "Dependem da água para se reproduzir; os ovos se desenvolvem em girinos antes de virarem adultos.",
      conservacao: "A poluição e a perda de áreas úmidas têm causado o declínio global das populações de anfíbios."
    },
    {
      img: require('./img_t2/formigueiro.jpeg'),
      nome: "Formigueiro",
      curiosidade: "Formigas vivem em sociedades organizadas, com divisão de tarefas entre rainha, operárias e soldados.",
      habito: "Podem habitar solos, troncos ou árvores, alimentando-se de folhas, néctar e fungos cultivados.",
      reproducao: "A rainha é responsável pela postura dos ovos; durante o voo nupcial, machos e fêmeas se reproduzem.",
      conservacao: "Apesar de comuns, algumas espécies sofrem com perda de habitat e mudanças climáticas."
    },
    {
      img: require('./img_t2/invertebrados.webp'),
      nome: "Invertebrados",
      curiosidade: "Representam mais de 95% das espécies animais do planeta, incluindo insetos, aracnídeos e moluscos.",
      habito: "Habitam praticamente todos os ambientes, desde o solo até o fundo dos oceanos.",
      reproducao: "Apresentam grande variedade de modos reprodutivos, de ovos a metamorfoses complexas.",
      conservacao: "A destruição de habitats e o uso de pesticidas afetam muitas populações de invertebrados."
    },
    {
      img: require('./img_t2/coruja.jpg'),
      nome: "Coruja",
      curiosidade: "Possui visão e audição extremamente aguçadas, permitindo caçar com precisão mesmo no escuro.",
      habito: "É uma ave de hábitos noturnos, geralmente solitária e silenciosa, encontrada em florestas e áreas rurais.",
      reproducao: "Constrói ninhos em troncos ocos ou fendas, onde a fêmea põe de 2 a 4 ovos brancos e os incuba por cerca de um mês.",
      conservacao: "A perda de habitat e o uso de agrotóxicos afetam suas populações, embora algumas espécies ainda sejam comuns."
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
              <Text style={styles.TextImg}>Aves da Mata Atlântica</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(1)}>
            <ImageBackground source={animais[1].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Aves da Caatinga</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(2)}>
            <ImageBackground source={animais[2].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Aves da Amazônia</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(3)}>
            <ImageBackground source={animais[3].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Aves do Pantanal</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(4)}>
            <ImageBackground source={animais[4].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Serpentes</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(5)}>
            <ImageBackground source={animais[5].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Micos</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(6)}>
            <ImageBackground source={animais[6].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Anfíbios</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(7)}>
            <ImageBackground source={animais[7].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Formigueiro</Text>
            </ImageBackground>
          </Pressable>  
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(8)}>
            <ImageBackground source={animais[8].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Invertebrados</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(9)}>
            <ImageBackground source={animais[9].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Coruja</Text>
            </ImageBackground>
          </Pressable>
        </View>


      </ScrollView>
  
      <Modal transparent={true} visible={posicaoModal}>
        <View style={styles.navbar}>
          <Pressable onPress={fechar_modal}>
            <Image
              source={require('./img_t2/seta.png')}
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
