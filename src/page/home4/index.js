import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home4() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página home 4</Text>
      <Pressable onPress={() => navigation.navigate('home5')}  style={styles.button}>
        <Text style={styles.text}>Home 5</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
