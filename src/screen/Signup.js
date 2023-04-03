import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import firebase from "../firebase/FireBaseConfig";



export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  registerUser = (email, password) => {
    if(email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
     
      firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then((res) => {
        // console.log('User registered successfully!',res)
        navigation.navigate('Login')
      })
      .catch(error =>({ errorMessage: error.message }))      
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/login.png")} /> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#000000"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
    
      <TouchableOpacity style={styles.loginBtn}
      onPress={() => this.registerUser(email, password)}>
        <Text style={styles.loginText}>Sign Up</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B388FF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width:120,
    height:120
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "black",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'#ffffff'
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFFF00",
  },
  loginText:{
    color:'#000000',
    
  }
});