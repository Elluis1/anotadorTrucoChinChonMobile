import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3CB371",
  },
  textD: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center"  },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  playerContainer: { alignItems: "center", marginHorizontal: 20 },
  playerTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
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
  buttonRestar: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },  buttonSumarTruco: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonRestarTruco: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
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
    width: 110,
    height: 150,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default styles;
