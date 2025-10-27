import { StyleSheet  } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6FCF97',
    justifyContent: 'center',
    padding: 8,
  },
  
  conteudo1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },

  button: {
    backgroundColor: "#F2994A",
    borderRadius: 10,},
  
  mao: {
    width: 150,
    height: 150,
    resizeMode: "contain"
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: 'Fredoka_600SemiBold',
    paddingVertical: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
    elevation: 5,
    backgroundColor: "#56CCF2",
    borderRadius: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#8D6E63",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  conteudo2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },

  conteudo3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },

});
