import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/header.jpg")} style={styles.banner} />
      <View>
        <TouchableOpacity
          style={styles.connectBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.connectText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.inscBtn} onPress={() => navigation.navigate("SignIn")}>
          <Text  style={styles.inscText}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fbddd2",
  },
  banner: {
    width: 350,
    height: 350,
    borderRadius: 350 / 2,
  },
  connectBtn: {
    borderRadius: 50,
    backgroundColor: "#c8371a",
    padding: 20,
    marginBottom: 10,
    width: 200,
    alignItems: 'center'
  },
  connectText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 20,
  },
  inscBtn: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#c8371a",
    padding: 20,
    width: 200,
    alignItems: 'center'
  },
  inscText: {
    textTransform: "uppercase",
    color: "#c8371a",
    fontSize: 20,
  },
 
});
