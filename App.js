import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import patterns from "./designs/patterns";
import styles from "./styles/file";

export default function Home() {
  const [juego, setJuego] = useState(0);
  const [inputValues, setInputValue] = useState([0, 0, 0, 0]);

  const [conteoTruco1, setConteoTruco1] = useState(0);
  const [conteoTruco2, setConteoTruco2] = useState(0);

  useEffect(() => {
    if (conteoTruco1 === -1) setConteoTruco1(0);
    if (conteoTruco2 === -1) setConteoTruco2(0);
    if (conteoTruco1 === 16) setConteoTruco1(1);
    if (conteoTruco2 === 16) setConteoTruco2(1);
  }, [conteoTruco1, conteoTruco2]);

  const [conteoChinChon, setConteoChinChon] = useState([0, 0, 0, 0]);

  const handleReset = () => {
    setConteoTruco1(0);
    setConteoTruco2(0);
    setConteoChinChon([0, 0, 0, 0]);
    setInputValue([0, 0, 0, 0]);
  };

  const handleSumarTruco = (index) => {
    if (index === 1) setConteoTruco1(conteoTruco1 + 1);
    if (index === 2) setConteoTruco2(conteoTruco2 + 1);
  };

  const handleRestarTruco = (index) => {
    if (index === 1) setConteoTruco1(conteoTruco1 - 1);
    if (index === 2) setConteoTruco2(conteoTruco2 - 1);
  };

  const handleSumarChinChon = (index) => {
    const valorSuma = parseInt(inputValues);
    let newConteo = [...conteoChinChon];
    newConteo[index] += valorSuma;
    setConteoChinChon(newConteo);
  };

  const handleRestarChinChon = (index) => {
    let newConteo = [...conteoChinChon];
    newConteo[index] -= 10;
    setConteoChinChon(newConteo);
  };

  const renderFosforos = (num) => (
    <View style={styles.fosforoContainer}>
      {(patterns[num] || []).map((fosforo, index) => (
        <Image
          key={index}
          source={require("./assets/fosforo.png")}
          style={{
            position: "absolute",
            top: parseInt(fosforo.top, 10) * 1.5,
            left: parseInt(fosforo.left, 10) * 1.5,
            transform: [{ rotate: `${parseFloat(fosforo.rotate)}deg` }],
            width: 15,
            height: 50,
          }}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 20,
          marginTop: 20,
          width: "80%",
          backgroundColor: "white",
          borderRadius: 8,
        }}
      >
        <Picker
          selectedValue={juego}
          onValueChange={(itemValue) => setJuego(itemValue)}
          style={{
            height: 55,
            width: "100%",
            borderWidth: 2,
            borderColor: "#000",
          }}
        >
          <Picker.Item label="Seleccionar el juego" value={0} />
          <Picker.Item label="Truco" value={1} />
          <Picker.Item label="Chin Chon" value={2} />
        </Picker>
      </View>

      {juego === 1 && (
        <View>
          <View style={styles.row}>
            <View style={styles.playerContainer}>
              <Text style={styles.playerTitle}>Jugador 1</Text>
              {renderFosforos(conteoTruco1)}
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  style={styles.buttonRestarTruco}
                  onPress={() => handleRestarTruco(1)}
                >
                  <Text style={styles.buttonText}>-1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonSumarTruco}
                  onPress={() => handleSumarTruco(1)}
                >
                  <Text style={styles.buttonText}>+1</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.playerContainer}>
              <Text style={styles.playerTitle}>Jugador 2</Text>
              {renderFosforos(conteoTruco2)}
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  style={styles.buttonRestarTruco}
                  onPress={() => handleRestarTruco(2)}
                >
                  <Text style={styles.buttonText}>-1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonSumarTruco}
                  onPress={() => handleSumarTruco(2)}
                >
                  <Text style={styles.buttonText}>+1</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      )}

      {juego === 2 && (
        <View>
          {conteoChinChon.map((puntos, index) => {
            if (puntos > 100) {
              return (
                <View key={index} style={styles.row}>
                  <Text style={styles.textD}>
                    Jugador {index + 1} eliminado
                  </Text>
                </View>
              );
            } else {
              return (
                <View key={index} style={styles.row}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleRestarChinChon(index)}
                  >
                    <Text style={styles.buttonText}>-10</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.textD}>
                      Jugador {index + 1}: {puntos}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.buttonSumar}
                    onPress={() => handleSumarChinChon(index)}
                  >
                    <Text style={styles.buttonText}>Sumar</Text>
                  </TouchableOpacity>
                </View>
              );
            }
          })}
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: 250,
              textAlign: "center",
              backgroundColor: "white",
            }}
            placeholder="Puntos"
            keyboardType="numeric"
            onChangeText={(text) => setInputValue(text)}
          />
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
