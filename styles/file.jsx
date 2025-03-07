import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  textD: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  playerContainer: { alignItems: "center", marginHorizontal: 20 },
  playerTitle: { fontSize: 16, fontWeight: "bold" },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonSumar: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonText: { color: "white", fontWeight: "bold", textAlign: "center" },
  resetButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  fosforoContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
  },
});

export default styles;
