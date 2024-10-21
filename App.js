import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
export default function App() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 const [loggedIn, setLoggedIn] = useState(false);
 const handleLogin = () => {
 signInWithEmailAndPassword(auth, email, password)
 .then(() => {
 setLoggedIn(true);
 })
 .catch((error) => setErrorMessage(error.message));
 };
 const handleLogout = () => {
 auth
 .signOut()
 .then(() => setLoggedIn(false))
 .catch((error) => setErrorMessage(error.message));
 };
 if (loggedIn) {
 return (
 <View style={styles.container}>
 {" "}
 <Text style={styles.welcome}>Dobrodošli u aplikaciju!</Text>{" "}
 <Button title="Odjavi se" onPress={handleLogout} />{" "}
 </View>
 );
 }
 return (
 <View style={styles.container}>
 {" "}
 <Text style={styles.title}>Login</Text>{" "}
 <TextInput
 placeholder="Email"
 value={email}
 onChangeText={setEmail}
 style={styles.input}
 />{" "}
 <TextInput
 placeholder="Lozinka"
 value={password}
 onChangeText={setPassword}
 secureTextEntry
 style={styles.input}
 />{" "}
 {errorMessage ? <Text style={styles.error}>{errorMessage}</Text>
: null}{" "}
 <Button title="Prijava" onPress={handleLogin} />{" "}
 </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: "center", padding: 20 },
 title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
 input: {
 height: 40,
 borderColor: "gray",
 borderWidth: 1,
 marginBottom: 10,
 padding: 8,
 },
 error: { color: "red", marginBottom: 10 },
 welcome: {
 fontSize: 28,
 fontWeight: "bold",
 marginBottom: 10,
 textAlign: "center",
 },
});