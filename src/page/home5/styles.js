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
    // Colocar deitado
    flex: 0.06,
    backgroundColor: "#7ADAA5"
  },

  Text: {
    textAlign: "center",
    fontSize: 14,
    marginInline: 15,
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
    backgroundColor: "#E1AA36",
    borderRadius: 20,
    borderColor: "#239BA7",
    borderBottomWidth: 2,
    width: 225,
    marginInline: "20%",
    marginVertical: "2%",
  },

  titulo2 : {
    marginLeft: 25,
    fontSize: 20,
    // color: "white",
    textAlign: "center",
    fontStyle: "solid",
    backgroundColor: "#7ADAA5",
    borderRadius: 20,
    borderColor: "#239BA7",
    borderBottomWidth: 1,
    width: 150,
    marginInline: "20%",
    marginVertical: "2%"
  },
  modalView:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_detalhado: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    paddingTop:20,
    backgroundColor: "#ECECBB",

  },

  imagem: {
    width: 385,
    height: 195,
    borderRadius: 20,
  }

});
