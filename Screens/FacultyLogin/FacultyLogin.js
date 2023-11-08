import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

function FacultyLogin({  }) {
  const [rn, setRN] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Sign in with email and password
      await auth().signInWithEmailAndPassword(rn, password);
      navigation.navigate('Home2');

    } catch (error) {
      // Handle authentication errors here
      console.error('Authentication failed:', error);
      // You can show an error message to the user if needed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="RN (Registration Number)"
        value={rn}
        onChangeText={setRN}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    <Pressable onPress={()=>{navigation.navigate('FacultySignUp1')}}>
    <Text style={styles.footer}>Create a New Account</Text>
    </Pressable>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  footer:{
    fontSize:20,
    color:'black',
    marginTop:30

  }
});

export default FacultyLogin;
