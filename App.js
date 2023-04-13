import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
  const [user, setUsername] = useState("");
  const [clave, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Usuario: ${user}, Contraseña: ${clave}`);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:70}}>Inicio de Sesion</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={user}
        placeholder="Usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={clave}  
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <Image
        source={{ uri: "https://i.ibb.co/JmHG5Hv/Dragon-Ball-anime-logo.png" }}
        style={styles.logo}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 450,
    height: 300,
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  
});

export default Login;
