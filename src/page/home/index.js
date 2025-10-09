import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Página home</Text>
      <Pressable onPress={() => navigation.navigate('home2')}  style={styles.button}>
        <Text style={styles.text}>Home 2</Text>
      </Pressable>
      <StatusBar style="auto"/>
    </View>
  );
}
