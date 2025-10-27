import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.conteudo1}>
        <Pressable onPress={() => navigation.navigate('home2')} style={styles.button}>
          <Image
            style={styles.mao}
            source={require("./icones/1.png")}
          />
          <Text style={styles.text}>Território 1</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('home3')} style={styles.button}>
          <Image
            style={styles.mao}
            source={require("./icones/2.png")}
          />
          <Text style={styles.text}>Território 2</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>

      <View style={styles.conteudo2}>
        <Pressable onPress={() => navigation.navigate('home4')} style={styles.button}>
          <Image
            style={styles.mao}
            source={{ uri: "https://previews.123rf.com/images/vikvector/vikvector2404/vikvector240402752/228890714-a-cartoon-tiger-is-sitting-on-a-yellow-background-the-tiger-is-smiling-and-looking-at-the-camera.jpg" }}
          />
          <Text style={styles.text}>Território 3</Text>
        </Pressable>
        <StatusBar style="auto" />

        <Pressable onPress={() => navigation.navigate('home5')} style={styles.button}>
          <Image
            style={styles.mao}
            source={{ uri: "https://previews.123rf.com/images/vikvector/vikvector2404/vikvector240402752/228890714-a-cartoon-tiger-is-sitting-on-a-yellow-background-the-tiger-is-smiling-and-looking-at-the-camera.jpg" }}
          />
          <Text style={styles.text}>Território 4</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>

      <View style={styles.conteudo3}>
        <Pressable onPress={() => navigation.navigate('home6')} style={styles.button}>
          <Image
            style={styles.mao}
            source={{ uri: "https://previews.123rf.com/images/vikvector/vikvector2404/vikvector240402752/228890714-a-cartoon-tiger-is-sitting-on-a-yellow-background-the-tiger-is-smiling-and-looking-at-the-camera.jpg" }}
          />
          <Text style={styles.text}>Território 5</Text>
        </Pressable>

        <StatusBar style="auto" />

        <Pressable onPress={() => navigation.navigate('home7')} style={styles.button}>
          <Image
            style={styles.mao}
            source={{ uri: "https://previews.123rf.com/images/vikvector/vikvector2404/vikvector240402752/228890714-a-cartoon-tiger-is-sitting-on-a-yellow-background-the-tiger-is-smiling-and-looking-at-the-camera.jpg" }}
          />
          <Text style={styles.text}>Território 6</Text>
        </Pressable>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
