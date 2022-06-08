import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function ValidationScreen({ navigation, route }) {
  console.log(route.params.data);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/Completed.png")} />
     
        <View>
        {route.params.data.mail &&  <Text style={styles.text}>Votre mail est: {route.params.data.mail}</Text> }
          {route.params.data.password &&  <Text style={styles.text}>Votre mot de passe est: {route.params.data.password}</Text> }
          {route.params.data.gender &&  <Text style={styles.text}>Bonjour, {route.params.data.gender} {route.params.data.lastname} {route.params.data.firstname}</Text> }
          {route.params.data.birthdate &&   <Text style={styles.text}>Votre date de naissance est {route.params.data.birthdate}.</Text> }
        </View>
     
      <TouchableOpacity
        style={styles.connectBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.connectText}>Accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ValidationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fbddd2",
  },
  text: {
    fontSize: 20,
    color: "#c8371a",
    marginBottom: 10,
  },

  connectBtn: {
    borderRadius: 50,
    backgroundColor: "#c8371a",
    padding: 20,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
  },
  connectText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 20,
  },
  img: {
    height: 300,
    width: 300,
  },
});
