import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeScreen2 from '../Home/HomeScreen2';
import StudentLogin from '../StudentLogin/StudentLogin';
import firestore from '@react-native-firebase/firestore';


function FacultySignUp3() {
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {FacultyDetails} = route.params;
  const {name, email} = FacultyDetails;

  const handleSetPassword = () => {
    const user = auth().currentUser;
    if (user && user.emailVerified) {
      user.updatePassword(newPassword)
        .then(() => {
          console.log('Password updated successfully.');
          Alert.alert("Account Created Successfully");

          firestore()
          .collection('faculty')
          .doc(email) // Reference the specific student document by email
          .set({
            name: name, // Update the 'name' field with the new value
          })
          .then(() => {
            console.log('The information has been updated in Firestore');
          })
          .catch((error) => {
            console.error('An error occurred while updating the information:', error);
          });
        
         
         
          navigation.navigate('FacultyLogin', {name});
          // Navigate to the next screen or perform any desired action
       
        })
        .catch((error) => {
          console.error('Error updating password:', error);
        });
    } else {
      console.error('User is not signed in or email is not verified.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
        placeholderTextColor='black'
      />
      <Button title="Set Password" onPress={handleSetPassword} />
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
    color:'black'
  },
});

export default FacultySignUp3;
