import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeScreen2 from '../Home/HomeScreen2';
import StudentLogin from '../StudentLogin/StudentLogin';
import firestore from '@react-native-firebase/firestore';
import TopContainer from '../Components/TopContainer';
import { devicewidth } from '../Home/Dimensions';
import { deviceheight } from '../Home/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
function StudentSignUp3() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {StudentDetails} = route.params;
  const {name, email, degreeValue, programValue, section} = StudentDetails;

  // const handleSetPassword = () => {
  //   const user = auth().currentUser;
  //   if (user && user.emailVerified) {
  //     user.updatePassword(newPassword)
  //       .then(() => {
  //         console.log('Password updated successfully.');
  //         Alert.alert("Account Created Successfully");

  //         firestore()
  //         .collection('students')
  //         .doc(email) // Reference the specific student document by email
  //         .set({
  //           name: name, // Update the 'name' field with the new value
  //         })
  //         .then(() => {
  //           console.log('The information has been updated in Firestore');
  //         })
  //         .catch((error) => {
  //           console.error('An error occurred while updating the information:', error);
  //         });



  //         navigation.navigate('StudentLogin', {name});
  //         // Navigate to the next screen or perform any desired action

  //       })
  //       .catch((error) => {
  //         console.error('Error updating password:', error);
  //       });
  //   } else {
  //     console.error('User is not signed in or email is not verified.');
  //   }
  // };

  const handleSetPassword = () => {
    if (newPassword === confirmPassword) { // Check if passwords match
      const user = auth().currentUser;
      if (user && user.emailVerified) {
        user.updatePassword(newPassword)
          .then(() => {
            console.log('Password updated successfully.');
            Alert.alert("Account Created Successfully");

            console.log('Password updated successfully.');
                    Alert.alert("Account Created Successfully");

                    firestore()
                    .collection('students')
                    .doc(email) // Reference the specific student document by email
                    .set({
                      name: name, // Update the 'name' field with the new value
                      email:email,
                      degree:degreeValue,
                      program:programValue,
                      section:section
                    })
                    .then(() => {
                      console.log('The information has been updated in Firestore');
                    })
                    .catch((error) => {
                      console.error('An error occurred while updating the information:', error);
                    });


            navigation.navigate('StudentLogin', { name });
          })
          .catch((error) => {
            console.error('Error updating password:', error);
          });
      } else {
        console.error('User is not signed in or email is not verified.');
      }
    } else {
      Alert.alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TopContainer />
      </View>

      <View style={styles.icon}>
        <FontAwesome name="lock" size={130} color="#ff5760" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          placeholderTextColor='black'
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor='black'
        />
      </View>

      {/* <Button title="Set Password" onPress={handleSetPassword} /> */}

 

      <TouchableOpacity style={styles.ButtonContainer} onPress={() => handleSetPassword()}>
        <Text style={styles.ButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 40,
    marginVertical: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    color: 'black',
    marginTop: deviceheight * 0.03,
    width: '90%',
    alignSelf: 'center',
  },

  // Update input style to center the text content
  input: {
    flex: 1,
    fontSize: 15,
    // fontFamily: 'Poppins-Medium',
    color: 'black',
    padding: 10,
    // textAlign: 'center', // Center text content horizontally
  },
  topContainer: {
    height: '30%',
  },
  ButtonContainer: {
    width: '90%',
    alignSelf: 'center',
    // Remove marginVertical property
    height: 50,
    backgroundColor: 'dodgerblue',
    alignItems: 'center', // Horizontally center content
    justifyContent: 'center', // Vertically center content
    // Ensure there are no conflicting styles from parent containers
    marginVertical:deviceheight*0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    // alignSelf: 'stretch',
    borderRadius: 9,
  },
  
  ButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  icon: {
    alignSelf: 'center',
    marginTop: deviceheight * 0.04,
    marginBottom:deviceheight*0.02
  },
});

export default StudentSignUp3;