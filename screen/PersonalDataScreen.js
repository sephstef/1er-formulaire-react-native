import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
//import { Datepicker } from "@ui-kitten/components";

function PersonalDataScreen({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstname: "",
      lastname: "",
      birthdate: "",
      mail: route.params.signin.mail,
      password: route.params.signin.password,
    },
  });

  const onSubmit = (data) => {
   // data.birthdate = date.toLocaleDateString()
    return navigation.navigate("Validation", { data })};

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Civilité</Text>
        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value, onBlur } }) => (
            <RNPickerSelect
              Icon={() => {
                return <Icon name="arrow-down" size={24} color="gray" />;
              }}
              placeholder={{label:"Veulliez choisir"}}
              useNativeAndroidPickerStyle={false}
              style={{
                inputAndroid: {
                  width: 300,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "#c8371a",
                  borderRadius: 15,
                  marginBottom: 20,
                  padding: 10,
                  color: "black",
                },
                iconContainer: {
                  top: 12,
                  right: 10,
                },
              }}
              value={value}
              onValueChange={(value) => onChange(value)}
              onChange={(value) => onChange(value)}
              onBlur={(value) => onBlur(value)}
              items={[
                {
                  label: "Monsieur",
                  value: "monsieur",
                  key: 1,
                  color: "#c8371a",
                },
                { label: "Madame", value: "madame", key: 2, color: "#c8371a" },
              ]}
            />
          )}
          rules={{
            required: {
              value: true,
              message: (
                <Text style={{ color: "red", marginBottom: 20 }}>
                  <Icon name="warning" size={20} />
                  La civilité est obligatoire
                </Text>
              ),
            },
          }}
        />
        {errors.gender && errors.gender.message}
        <Text style={styles.text}>Prénom</Text>

        <Controller
          control={control}
          name="firstname"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.input}
              placeholder="Entrez votre prénom"
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
                  Le prénom est obligatoire
                </Text>
              ),
            },
            pattern: {
              value: /^[a-zA-Z]{3,50}$/,
              message: (
                <Text style={{ color: "red", marginBottom: 20 }}>
                  <Icon name="warning" size={20} />
                  Le prénom est invalide
                </Text>
              ),
            },
          }}
        />
        {errors.firstname && errors.firstname.message}

        <Text style={styles.text}>Nom</Text>

        <Controller
          control={control}
          name="lastname"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.input}
              placeholder="Entrez votre nom"
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
                  Le nom est obligatoire
                </Text>
              ),
            },
            pattern: {
              value: /^[a-zA-Z]{3,50}$/,
              message: (
                <Text style={{ color: "red", marginBottom: 20 }}>
                  <Icon name="warning" size={20} />
                  Le nom est invalide
                </Text>
              ),
            },
          }}
        />
        {errors.lastname && errors.lastname.message}
        {/* <Text style={styles.text}>Date de naissance</Text> */}
        {/* <Controller
          control={control}
          name="birthdate"
          render={({ field: {   } }) => (
        <Datepicker
          min={new Date(1900, 0, 0)}
          max={new Date()}
          date={date}
          onSelect={nextDate => setDate(nextDate)}
        />
        )}
      /> */}
      </View>
      <TouchableOpacity
        style={styles.validationBtn}
        onPress={handleSubmit(onSubmit)}
        
      >
        <Text style={styles.validationText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PersonalDataScreen;

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

  validationBtn: {
    borderRadius: 50,
    backgroundColor: "#c8371a",
    padding: 20,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
  },
  validationText: {
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
    marginBottom: 20,
    padding: 10,
  },
  dateBtn: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#c8371a",
    borderRadius: 15,
    marginBottom: 20,
    padding: 10,
  },
  dateText: {
    color: "#c8371a",
    textAlign: "center",
    paddingTop: 3,
  },
});
