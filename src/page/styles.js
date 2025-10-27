import { StyleSheet  } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ADAA5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navbar: {
    display: "flex",
    flexDirection: "row",
    flex: 0.06,
    backgroundColor: "#F2994A",
    color: "#8D6E63",
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Fredoka_600SemiBold'
  },
  
  itens: {
    marginVertical: 15, // Adiciona espaço entre os itens
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    marginBottom: 15,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#8D6E63",
  },

  img_cont: {
    width: 340,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    borderRadius: 25,
  },

  Text: {
    textAlign: "center",
    fontSize: 25,
    marginInline: 15,
  },

  

  TextImg: {
    textAlign: "center",
    fontSize: 25,
    marginInline: 15,
    color: "yellow",
    fontFamily: 'Fredoka_600SemiBold',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  titulo : {
    textAlign: "center",
    fontSize: 35,
    textDecorationStyle: "underline",
    backgroundColor: "#FFD700",
    borderRadius: 20,
    borderColor: "#56CCF2",
    borderBottomWidth: 2,
    width: 265,
    marginInline: "21%",
    justifyContent: "center",
    marginVertical: "3%",
    fontFamily: 'Fredoka_600SemiBold'
  },

  titulo2 : {
    marginLeft: 25,
    fontSize: 30,
    // color: "white",
    textAlign: "center",
    fontStyle: "solid",
    backgroundColor: "#56CCF2",
    borderRadius: 20,
    borderColor: "#239BA7",
    borderBottomWidth: 1,
    width: 200,
    marginInline: "20%",
    marginVertical: "2%",
    fontFamily: 'Fredoka_600SemiBold'
  },
  modalView:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_detalhado: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    // paddingTop: 20,
    backgroundColor: "#ECECBB",
  },

  imagem: {
    width: 355,
    height: 175,
    marginTop: 20,
    borderRadius: 20,
  },



});
