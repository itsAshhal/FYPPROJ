import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import TopContainer from '../Components/TopContainer';
import { deviceheight } from '../Home/Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StudentLogin from '../StudentLogin/StudentLogin';
import { devicewidth } from '../Home/Dimensions';
import DropDownPicker from 'react-native-dropdown-picker';

function StudentSignUp1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [section, setSection] = useState('');
  function isFormValid(name, email, section, degreeValue, programValue) {
    return name.trim() !== '' && email.trim() !== '' && section.trim() !== '' && degreeValue !== null && programValue !== null;
  }

  const navigation = useNavigation();

  const [degreeOpen, setDegreeOpen] = useState(false);
  const [degreeValue, setDegreeValue] = useState(null);
  const [degreeItems, setDegreeItems] = useState([
    { label: 'Undergraduate', value: 'undergraduate' },
    { label: 'Graduate', value: 'graduate' }
  ]);

  const [programOpen, setProgramOpen] = useState(false);
  const [programValue, setProgramValue] = useState(null);
  const [programItems, setProgramItems] = useState([]);

  const isEmailValid = (email) => {
    const regex = /^.*@student\.hitecuni\.edu\.pk$/i;
    if (regex.test(email)) {
      // Pass the email as an argument to handleSignUp
      handleSignUp(email);
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
        navigation.navigate('StudentSignUp2', { StudentDetails: { name, email, degreeValue, programValue, section } });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Update the program list based on the selected degree
  const updatePrograms = (selectedDegree) => {
    if (selectedDegree === 'undergraduate') {
      setProgramItems([
        { label: 'BS Software Engineering', value: 'softwareengineering' },
        { label: 'BS Electrical Engineering', value: 'electricalengineering' }
      ]);
    } else if (selectedDegree === 'graduate') {
      setProgramItems([
        { label: 'MS Software Engineering', value: 'softwareengineering' },
        { label: 'MS Electrical Engineering', value: 'electricalengineering' }
      ]);
    } else {
      setProgramItems([]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <TopContainer />
      </View>

      <Text style={styles.signUpText}>SignUp to Your Student Account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor='black'
        />
      </View>

      <View style={{ ...styles.inputContainer, zIndex: 1.5 }}>
        <DropDownPicker
          style={styles.dropdown}
          open={degreeOpen}
          value={degreeValue}
          items={degreeItems}
          setOpen={setDegreeOpen}
          setValue={setDegreeValue}
          setItems={setDegreeItems}
          placeholder="Degree"
          onChangeValue={(value) => {
            setDegreeValue(value);
            updatePrograms(value); // Update program list based on selected degree
          }}
        />
      </View>

      <View style={{...styles.inputContainer, zIndex:1}}>
        <DropDownPicker
          style={styles.dropdown}
          open={programOpen}
          value={programValue}
          items={programItems}
          setOpen={setProgramOpen}
          setValue={setProgramValue}
          setItems={setProgramItems}
          placeholder="Program"
        />
      </View>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your University Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor='black'
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Section 'A OR B'"
          keyboardType='default'
          value={section}
          onChangeText={setSection}
          placeholderTextColor='black'
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(StudentLogin)}>
          <Text style={styles.askLoginText}>Already have a Student Account?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.ButtonContainer,
            backgroundColor: isFormValid(name, email, section, degreeValue, programValue) ? 'dodgerblue' : 'gray',
          }}
          onPress={() => {
            if (isFormValid(name, email, section, degreeValue, programValue)) {
              isEmailValid(email);
            }
          }}
        >
          <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>


      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  input: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    padding: 10,
  },
  dropdown: {
    height: 40,
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  TopContainer: {
    height: '25%',
    marginBottom: deviceheight * 0.055,
  },
  signUpText: {
    fontSize: 20,
    color: 'darkblue',
    alignSelf: 'center',
    marginBottom: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  ButtonContainer: {
    width: '30%',
    alignSelf: 'flex-end',
    marginRight: devicewidth * 0.09,
    height: 40,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: deviceheight * 0.06,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 9,
  },
  ButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  askLoginText: {
    fontSize: 12,
    color: 'darkblue',
    fontFamily: 'Montserrat-Bold',
    marginLeft: devicewidth * 0.059,
    marginTop: deviceheight * 0.075
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default StudentSignUp1;
