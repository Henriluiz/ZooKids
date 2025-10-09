import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home3() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página home 3</Text>
      <Pressable onPress={() => navigation.navigate('home4')}  style={styles.button}>
        <Text style={styles.text}>Home 4</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
