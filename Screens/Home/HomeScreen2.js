import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import StudentLogin from '../StudentLogin/StudentLogin';
import FacultyLogin from '../FacultyLogin/FacultyLogin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const HomeScreen2 = () => {
  const navigation = useNavigation();
  const [studentData, setStudentData] = useState(null); // State to store student data

  useEffect(() => {
    const user = auth().currentUser;

    if (user) {
      // Function to fetch student data
      const getData = async () => {
        try {
          const doc = await firestore()
            .collection('students') // Make sure to use the correct collection name
            .doc(user.email)
            .get();

          if (doc.exists) {
            const studentData = doc.data();
            setStudentData(studentData); // Update the state with student data
          } else {
            console.log('Student document not found in the database.');
          }
        } catch (error) {
          console.log('Error occurred while fetching data:', error);
        }
      };

      // Call the getData function when the component mounts
      getData();
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To Home Screen</Text>
      {studentData && <Text style={styles.text}>{studentData.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 40
  }
})

export default HomeScreen2;