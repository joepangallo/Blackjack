import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { gameStyles } from "../styles/GameStyles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const cleanEmail = email.trim();

  const signUp = async () => {
    if (!cleanEmail || !password) {
      Alert.alert("Missing info", "Please type email + password.");
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, cleanEmail, password);
      // onAuthStateChanged in App.js will auto-switch to GameScreen
    } catch (e) {
      Alert.alert("Sign up failed", e.message);
    } finally {
      setLoading(false);
    }
  };

  const logIn = async () => {
    if (!cleanEmail || !password) {
      Alert.alert("Missing info", "Please type email + password.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, cleanEmail, password);
    } catch (e) {
      Alert.alert("Login failed", e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={gameStyles.container}>
      <Text style={gameStyles.title}>Login</Text>

      <Text style={{ color: "white", marginBottom: 6 }}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="you@example.com"
        placeholderTextColor="#999"
        style={{
          width: "90%",
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: 12,
          borderRadius: 10,
          marginBottom: 12,
        }}
      />

      <Text style={{ color: "white", marginBottom: 6 }}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="password (6+ chars)"
        placeholderTextColor="#999"
        style={{
          width: "90%",
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: 12,
          borderRadius: 10,
          marginBottom: 16,
        }}
      />

      <Pressable style={gameStyles.button} onPress={logIn} disabled={loading}>
        <Text style={gameStyles.buttonText}>{loading ? "Loading..." : "Log In"}</Text>
      </Pressable>

      <Pressable style={gameStyles.button} onPress={signUp} disabled={loading}>
        <Text style={gameStyles.buttonText}>{loading ? "Loading..." : "Create Account"}</Text>
      </Pressable>
    </View>
  );
}
