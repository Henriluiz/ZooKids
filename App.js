import React, { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Fredoka_600SemiBold } from '@expo-google-fonts/fredoka';

import Home from "./src/page/home";
import Home2 from "./src/page/home2";
import Home3 from "./src/page/home3";
import Home4 from "./src/page/home4";
import Home5 from "./src/page/home5";
import Home6 from "./src/page/home6";
import Home7 from "./src/page/home7";

const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    Fredoka_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Tela Inicial",
            headerStyle: { backgroundColor: "#F2994A" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 35,
              fontFamily: 'Fredoka_600SemiBold',
            },
            headerRight: () => (
              <Pressable
                onPress={() => setModalVisible(true)}
                style={({ pressed }) => [
                  styles.button,
                  { opacity: pressed ? 0.6 : 1 },
                ]}
              >
                <Text style={styles.buttonText}>≡</Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="home2"
          component={Home2}
          options={{
            title: "Território 1",
            headerStyle: { backgroundColor: "#F2994A" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'Fredoka_600SemiBold',
            },
          }}
        />
        <Stack.Screen
          name="home3"
          component={Home3}
          options={{
            title: "Território 2",
            headerStyle: { backgroundColor: "#F2994A" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'Fredoka_600SemiBold',
            },
          }}
        />
        <Stack.Screen
          name="home4"
          component={Home4}
          options={{
            title: "Território 3",
            headerStyle: { backgroundColor: "#F2994A" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'Fredoka_600SemiBold',
            },
          }}
        />
        <Stack.Screen
          name="home5"
          component={Home5}
          options={{
            title: "Território 4",
            headerStyle: { backgroundColor: "#F2994A" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'Fredoka_600SemiBold',
            },
          }}
        />
        <Stack.Screen
          name="home6"
          component={Home6}
          options={{
            title: "Território 5",
            headerStyle: { backgroundColor: "#F2994A" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'Fredoka_600SemiBold',
            },
          }}
        />
        <Stack.Screen
          name="home7"
          component={Home7}
          options={{
            title: "Território 6",
            headerStyle: { backgroundColor: "#F2994A" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'Fredoka_600SemiBold',
            },
          }}
        />
      </Stack.Navigator>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            
            <Text style={styles.menuText}>Menu</Text>

            <Pressable onPress={() => navigation.navigate('home5')} style={styles.modalText}><Text style={styles.modalText}>Conta</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('home5')} style={styles.modalText}><Text style={styles.modalText}>Como Chegar</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('home5')} style={styles.modalText}><Text style={styles.modalText}>Sobre</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('home5')} style={styles.modalText}><Text style={styles.modalText}>ingressos</Text>
            </Pressable>

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    padding: 8,
  },
  buttonText: {
    color: "#8D6E63",
    fontSize: 35,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#56CCF2",
    borderRadius: 10,
    padding: 20,
    width: 250,
    alignItems: "center",
    elevation: 20,
  },
  menuText: {
    color: "#8D6E63",
    fontSize: 35,
    marginBottom: 10,
    fontFamily: 'Fredoka_600SemiBold',
    paddingVertical: 9,
  },
  modalText: {
    color: "#8D6E63",
    fontSize: 22,
    marginBottom: 10,
    fontFamily: 'Fredoka_600SemiBold',
    paddingVertical: 9,
    textAlign: "center",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#8D6E63",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    backgroundColor: "#F2C94C",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  closeButton: {
    backgroundColor: "#F2C94C",
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 15,
    elevation: 5,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#8D6E63",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: 'Fredoka_600SemiBold',
    fontSize: 18,
  },
  closeButtonText: {
    color: "#8D6E63",
    fontWeight: "bold",
  },
});