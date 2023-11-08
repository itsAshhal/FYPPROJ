import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import StudentSignUp3 from './StudentSignUp3';
import { useRoute } from '@react-navigation/native';
import TopContainer from '../Components/TopContainer';
import Octicons from 'react-native-vector-icons/Octicons';
import { deviceheight } from '../Home/Dimensions';
import { devicewidth } from '../Home/Dimensions';

function StudentSignUp2() {
  const route = useRoute();
  const navigation = useNavigation();
  const [isVerified, setIsVerified] = useState(false);
  const {StudentDetails} = route.params;
  
  useEffect(() => {
      const user = auth().currentUser;
      if (user) {
        const emailVerified = user.emailVerified;
        setIsVerified(emailVerified);
        if (emailVerified) {
          navigation.navigate('StudentSignUp3');
        }
      }
  }, []);
  
  const handleContinue = () => {
    const user = auth().currentUser;
    user.reload();
    if (user) {
      if (user.emailVerified) {
        console.log("Verified");
        navigation.navigate('StudentSignUp3', { StudentDetails });
      } else {
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

      <View style={styles.topContainer}>
        <TopContainer />
      </View>

      <View style={styles.icon}>
        <Octicons name='unverified' size={150} color="#ff5760" />
      </View>

      <Text style={styles.note}>
        A verification email has been sent to your university mail. Please go to your mail and click the link for verification.
      </Text>

      <TouchableOpacity style={styles.ButtonContainer} onPress={() => handleContinue()}>
        <Text style={styles.ButtonText}>Next</Text>
      </TouchableOpacity>

      {/* <Button title="Continue" onPress={handleContinue} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5 ',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  topContainer: {
    height: '30%',
  },
  icon: {
    alignSelf: 'center',
    marginTop: deviceheight * 0.09,
    marginBottom:deviceheight*0.03
  },
  note: {
    textAlign: 'center',
    width:'90%',
    alignSelf:'center',
    fontSize: 16,
    color: 'gray',
    marginTop: deviceheight*0.035,
  },
  ButtonContainer: {
    width: '30%',
    alignSelf: 'flex-end',
    marginRight: devicewidth * 0.09,
    // flexDirection: 'column',
    height: 40,
    backgroundColor: 'dodgerblue',
    alignItems: 'center', // Horizontally center content
    justifyContent: 'center', // Vertically center content
    marginVertical: deviceheight * 0.13,
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
  },
});

export default StudentSignUp2;
