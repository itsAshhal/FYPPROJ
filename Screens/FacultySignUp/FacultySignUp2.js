import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import FacultySignUp3 from './FaacultySignUp3';
import { useRoute } from '@react-navigation/native';

function FacultySignUp2() {
  const route = useRoute();
  const navigation = useNavigation();
  const [isVerified, setIsVerified] = useState(false);
  const {FacultyDetails} = route.params;
//   useEffect(() => {
//       const user = auth().currentUser;
//       if (user) {
//         const emailVerified = user.emailVerified;
//         setIsVerified(emailVerified);
  
//         if (emailVerified) {
//           navigation.navigate(FacultySignUp3);
//         }
//       }
    
  
//   }, []);
  
  const handleContinue = () => {
    const user = auth().currentUser;
    user.reload();
    if (user) {
      if(user.emailVerified){
        console.log("Verified");
        navigation.navigate('FacultySignUp3', {FacultyDetails});
      }
      else{
        console.log("Not Verified Yet")
      }
    }
  };
  

  const deleteAccount = () => {
    const user = auth().currentUser;
    if (user) {
      user.delete()
        .then(() => {
          console.log('User account deleted due to unverified email or leaving the process.');
        })
        .catch(error => {
          console.error('Error deleting user account:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Email Verification</Text>
      <Text>
        {isVerified
          ? 'Email verified. You can now set your password.'
          : 'Please verify your email by clicking the link sent to your email address.'}
      </Text>
      <Button title="Continue" onPress={handleContinue} />
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
});

export default FacultySignUp2;
