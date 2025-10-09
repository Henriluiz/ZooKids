import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native-web';
import { useState, useEffect } from 'react';

export default function Home5() {
  const [posicaoModal, setPosicaoModal] = useState(true)
  const [posicao, setPosicao] = useState(0)


  const [animais, setAnimais] = useState ([
    {
      img: require('./img_t1/onca-pintada.jpg'),
      nome: "Onça-Pintada",
      curiosidade: "É o maior animal terrestre, sendo o macho maior do que a fêmea. A inconfundível tromba é formada pelo nariz e lábio superior. A pele é espessa e quase desprovida de pelos. Dentes incisivos superiores crescem ao longo de toda a vida do animal. As orelhas são muito grandes e com funções de regulação de temperatura entre outras.",
      habito: "Vive em clãs, onde a fêmea mais velha (a matriarca) assume a liderança. Um animal adulto pode ingerir entre 150 - 300 kg de matéria vegetal por dia. Comunica através de sons de baixa frequência.",
      reproducao: "Pode ocorrer em qualquer altura do ano. O parto pode ser assistido por outra fêmea do grupo e o intervalo mínimo entre nascimentos é de 4 anos. Todas as fêmeas do grupo participam na proteção das crias. Cada cria é amamentada durante cerca de 2 anos.",
      conservacao: "A caça para a obtenção das presas e da carne têm sido as principais causas de declínio da espécie. Atualmente, a perda e fragmentação do habitat causadas pela expansão humana para conversão do solo são ameaças importantes.",
    },
  ])  


  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página home 5</Text>
      {/* <Pressable onPress={() => navigation.navigate('home5')}  style={styles.button}>
        <Text style={styles.text}>Home 5</Text>
      // </Pressable> */}
      

      <Modal transparent={true} visible={true}>
        <View style={styles.modal_detalhado}>
          <Image source={animais[0].img} style={styles.imagem} />
          <Text style={styles.titulo}>{animais[0].nome}</Text>
          <Text style={styles.titulo2}>Curiosidade</Text>
          <Text style={styles.Text}>{animais[0].curiosidade}</Text>
          <Text style={styles.titulo2}>Hábito</Text>
          <Text style={styles.Text}>{animais[0].habito}</Text>
          <Text style={styles.titulo2}>Reprodução</Text>
          <Text style={styles.Text}>{animais[0].reproducao}</Text>
          <Text style={styles.titulo2}>Conservação</Text>
          <Text style={styles.Text}>{animais[0].conservacao}</Text>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

