import { StyleSheet  } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    borderRadius: 25,
    justifyContent: 'center',
    width: 125,
    padding: 10,
  },
  Text: {
    textAlign: "center",
    fontSize: 14,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  titulo : {
    textAlign: "center",
    fontSize: "30px",
    textDecorationStyle: "double"
    
  },

  titulo2 : {
    marginLeft: 20,
    fontSize: 25,
    fontStyle: "solid",
  },

  modal_detalhado: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "cyan",
  },

  imagem: {
    width: 385,
    height: 195,
    margin: 20,
    borderRadius: 20,
  }

});
