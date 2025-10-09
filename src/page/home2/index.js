import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home2() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>Página home 2</Text>
      <Pressable onPress={() => navigation.navigate('home3')}  style={styles.button}>
        <Text style={styles.text}>Home 3</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
