import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'react-native';
import { devicewidth } from '../Home/Dimensions';
import { deviceheight } from '../Home/Dimensions';

function StudentLogin() {
  const [rn, setRN] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Set the status bar color
    StatusBar.setBackgroundColor('#0047AB'); // Change to your desired color
  }, []);

  const signup = () => {
    navigation.navigate('StudentSignUp1');
  };

  const handleLogin = async () => {
    if (!rn || !password) {
      // Display an error message for missing fields
      Alert.alert('Please enter both Registration Number and Password');
    } else {
      try {
        // Sign in with email and password
        await auth().signInWithEmailAndPassword(rn, password);
        navigation.navigate('HomeScreen2');
      } catch (error) {
        // Handle authentication errors here
        console.error('Authentication failed:', error);
        // Display an error message to the user if needed
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../Images/hiteclogofinal.png')} style={styles.logo} />
        <Text style={{ fontSize: 25, fontFamily:'Montserrat-Bold', color: 'white', marginLeft: devicewidth*0.05 }}>
          Hitec Universe
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.loginText}>Login to Your Student Account</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="account-circle" size={30} color="gray" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Reg Number (e.g. 20-SE-072)"
            placeholderTextColor="gray"
            onChangeText={(text) => setRN(text)}
            value={rn}
            color="black" // Text input color changed to black
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={30} color="gray" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            color="black" // Text input color changed to black
          />
        </View>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtonContainer} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <TouchableOpacity onPress={signup}>
            <Text style={styles.askSignUpText}>Don't have a Student Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0047AB',
    width: '100%',
    height: '30%', // Top 30 percent of the screen
    flexDirection: 'row',
    borderBottomLeftRadius: 100,
  },
  logo: {
    width: 110, // Adjust the logo size as needed
    height: 110, // Adjust the logo size as needed
  },
  contentContainer: {
    width: '100%',
    padding: 20,
    marginTop: 30,
  },
  loginText: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'darkblue',
    alignSelf:'center',
    marginBottom: 20,
    fontFamily:'Montserrat-SemiBold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height: 40,
    // borderWidth:2,
    marginVertical: 10,
    borderRadius: 20,
    borderBottomWidth: 1,
    color: 'black',
    marginTop:deviceheight*0.03
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily:'Poppins-Medium',
    color: 'black', // Text input color changed to black
  },
  forgotContainer: {
    alignItems: 'flex-end',
    margin: deviceheight*0.03,
    
  },
  forgotText: {
    fontSize: 16,
    fontFamily:'Montserrat-Bold',
    color: 'darkblue',
  },
  loginButtonContainer: {
    height: 50,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical:deviceheight*0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'stretch',
    borderRadius: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  askSignUpText: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily:'Montserrat-Bold',
    color: 'darkblue',
    // fontStyle: 'italic',
  },
});

export default StudentLogin;
