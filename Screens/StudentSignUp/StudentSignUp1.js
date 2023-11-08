import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function StudentSignUp1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const isEmailValid = (email) => {
    console.log(email)
    const regex = /^.*@student\.hitecuni\.edu\.pk$/i;
    if (regex.test(email)) {
      handleSignUp(email); // Pass the email as an argument to handleSignUp
    } else {
      Alert.alert("Please enter the email provided by the University");
    }
  };

  const handleSignUp = () => {

    auth()
      .createUserWithEmailAndPassword(email, 'temporaryPassword')
      .then(async (userCredential) => {
        const user = userCredential.user;
        await user.sendEmailVerification();
        console.log('User account created. Verification email sent.');
        navigation.navigate('StudentSignUp2', {StudentDetails:{name,email}});
        
      })
      .catch(error => {
        console.error(error);
      });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor='black'
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Universty Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor='black'
      />
      <Button title="Sign Up" onPress={() => isEmailValid(email)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black'
  },
});

export default StudentSignUp1;
