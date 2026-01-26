import { StyleSheet } from "react-native";

export const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b6623",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  cardImage: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    margin: 6,
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#111",
  },

  handRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
