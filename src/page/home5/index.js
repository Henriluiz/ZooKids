import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, ImageBackground, Modal, ScrollView} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home5() {

  const [posicaoModal, setPosicaoModal] = useState(false);
  const [posicao, setPosicao] = useState(0);

  const [animais, setAnimais] = useState([
    {
      img: require('./img_t4/rinoceronte.jpg'),
      nome: "Rinoceronte",
      curiosidade: "Os rinocerontes têm uma pele espessa e um ou dois chifres feitos de queratina, a mesma substância das unhas humanas.",
      habito: "Vivem em savanas e florestas tropicais da África e Ásia, alimentando-se de gramíneas, folhas e brotos.",
      reproducao: "A gestação dura cerca de 16 meses, resultando em um único filhote que permanece com a mãe por até 3 anos.",
      conservacao: "Ameaçados pela caça ilegal devido ao valor de seus chifres; várias espécies estão em risco crítico de extinção."
    },
    {
      img: require('./img_t4/zebra.jpg'),
      nome: "Zebra",
      curiosidade: "Cada zebra tem um padrão único de listras, como se fosse uma impressão digital.",
      habito: "Habita savanas e planícies africanas, formando grupos sociais e migrando em busca de pastagens frescas.",
      reproducao: "A gestação dura cerca de 12 meses e nasce um filhote, que se levanta e caminha poucas horas após o nascimento.",
      conservacao: "Algumas espécies estão ameaçadas pela perda de habitat e caça, embora outras ainda sejam comuns em reservas naturais."
    },
    {
      img: require('./img_t4/girafa.jpg'),
      nome: "Girafa",
      curiosidade: "É o animal terrestre mais alto do mundo, podendo atingir até 5,5 metros de altura.",
      habito: "Vive em savanas africanas, alimentando-se principalmente de folhas de acácias e outras árvores altas.",
      reproducao: "A gestação dura cerca de 15 meses e nasce um único filhote, que já consegue ficar de pé após alguns minutos.",
      conservacao: "Algumas subespécies estão vulneráveis devido à caça e fragmentação do habitat."
    },
    {
      img: require('./img_t4/suricata.jpg'),
      nome: "Suricata",
      curiosidade: "Conhecidas por ficar em pé observando o horizonte, as suricatas vivem em grupos altamente organizados.",
      habito: "Habita desertos e savanas do sul da África, alimentando-se de insetos, pequenos vertebrados e raízes.",
      reproducao: "Vivem em colônias e se reproduzem durante o ano todo; a gestação dura cerca de 11 semanas e nascem até 5 filhotes.",
      conservacao: "Não estão ameaçadas, mas sofrem com perda de habitat e ataques de predadores naturais."
    },
    {
      img: require('./img_t4/dromedario.jpg'),
      nome: "Dromedário",
      curiosidade: "Possui uma única corcova, usada para armazenar gordura que serve de energia e água durante longos períodos no deserto.",
      habito: "Vive em desertos quentes e áridos do norte da África e Oriente Médio, sendo amplamente domesticado.",
      reproducao: "A gestação dura cerca de 13 meses, resultando em um único filhote capaz de andar poucas horas após nascer.",
      conservacao: "Não está ameaçado, pois é criado e utilizado como animal de carga e transporte por populações humanas."
    },
    {
      img: require('./img_t4/leao.jpg'),
      nome: "Leão",
      curiosidade: "Conhecido como o 'rei da selva', é o único felino que vive em grupos organizados chamados alcateias ou coalizões.",
      habito: "Habita savanas africanas, caçando grandes herbívoros e descansando até 20 horas por dia.",
      reproducao: "As fêmeas têm gestação de 110 dias e geralmente dão à luz de 2 a 4 filhotes.",
      conservacao: "Vulnerável devido à caça e à perda de habitat; programas de conservação buscam proteger populações selvagens."
    },
    {
      img: require('./img_t4/tigre.jpg'),
      nome: "Tigre",
      curiosidade: "É o maior felino do mundo, com machos podendo ultrapassar 300 kg.",
      habito: "Vive em florestas densas e áreas pantanosas da Ásia, sendo um caçador solitário e territorial.",
      reproducao: "A gestação dura cerca de 3 meses e nascem de 2 a 4 filhotes que permanecem com a mãe por até 2 anos.",
      conservacao: "Em perigo de extinção devido à caça e destruição de florestas; protegido por leis internacionais."
    },
    {
      img: require('./img_t4/hipopotamo.jpeg'),
      nome: "Hipopótamo",
      curiosidade: "Apesar do corpo pesado, o hipopótamo é excelente nadador e pode ficar submerso por até 5 minutos.",
      habito: "Vive em rios e lagos da África, passando o dia na água e saindo à noite para se alimentar de capim.",
      reproducao: "A gestação dura cerca de 8 meses e nasce um filhote, geralmente dentro da água.",
      conservacao: "Vulnerável devido à caça por sua carne e marfim dos dentes, além da perda de habitat."
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
              <Text style={styles.TextImg}>Rinoceronte</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(1)}>
            <ImageBackground source={animais[1].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Zebra</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(2)}>
            <ImageBackground source={animais[2].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Girafa</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(3)}>
            <ImageBackground source={animais[3].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Suricata</Text>
            </ImageBackground>
          </Pressable>
        </View>
        
        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(4)}>
            <ImageBackground source={animais[4].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Dromedário</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(5)}>
            <ImageBackground source={animais[5].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Leão</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(6)}>
            <ImageBackground source={animais[6].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Tigre</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.itens}>
          <Pressable onPress={() => abrir_modal(7)}>
            <ImageBackground source={animais[7].img}
            style={styles.img_cont} imageStyle={{borderRadius: 15}}>
              <Text style={styles.TextImg}>Hipopótamo</Text>
            </ImageBackground>
          </Pressable>  
        </View>
      </ScrollView>
  
      <Modal transparent={true} visible={posicaoModal}>
        <View style={styles.navbar}>
          <Pressable onPress={fechar_modal}>
            <Image
              source={require('./img_t4/seta.png')}
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
