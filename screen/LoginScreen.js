import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/Ionicons";

function LoginScreen({ navigation }) {
  const [hide, setHide] = useState(true)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  const onSubmit = (data) => navigation.navigate("Validation", { data });
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/password.png")} />
      <View>
        <View>
          <Text style={styles.text}>Email</Text>
          <Controller
            control={control}
            name="mail"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.input}
                placeholder="Entrez votre mail"
                value={value}
                onBlur={(value) => onBlur(value)}
                onChangeText={(value) => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: (
                  <Text style={{ color: "red", marginBottom: 20 }}>
                    <Icon name="warning" size={20} />
                    Le mail est obligatoire
                  </Text>
                ),
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: (
                  <Text style={{ color: "red", marginBottom: 20 }}>
                    <Icon name="warning" size={20} />
                    Le mail ou le mot de passe est invalide
                  </Text>
                ),
              },
            }}
          />

          {errors.mail && errors.mail.message}
        </View>
        <Text style={styles.text}>Mot de passe</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <View style={styles.containerPassword}>
              <TextInput
                secureTextEntry={hide ? true : false}
                placeholder="Entrez votre mot de passe"
                value={value}
                onBlur={(value) => onBlur(value)}
                onChangeText={(value) => onChange(value)}
              />
              <Icon style={styles.iconPassword} name={hide ? "eye-off" : "eye"} onPress={() => { setHide(!hide) }} size={20} />
            </View>
          )}
          rules={{
            required: {
              value: true,
              message: (
                <Text style={{ color: "red", marginBottom: 20 }}>
                  <Icon name="warning" size={20} /> Le mot de passe est
                  obligatoire
                </Text>
              ),
            },
            validate: (value) =>
              value === "bonjour" || (
                <Text style={{ color: "red", marginBottom: 20 }}>
                  <Icon name="warning" size={20} />
                  Le mail ou le mot de passe est invalide
                </Text>
              ),
          }}
        />

        {errors.password && errors.password.message}
      </View>
      <TouchableOpacity
        style={styles.connectBtn}
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        <Text style={styles.connectText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

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
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#c8371a",
    borderRadius: 15,
    padding: 10,
  },
  containerPassword: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#c8371a",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconPassword: {
    paddingTop: 5,
  },
});
