import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StatusBar } from 'react-native';

const HomeScreen = () => {
  useEffect(() => {
    // Set the status bar color
    StatusBar.setBackgroundColor('#0047AB'); // Change to your desired color
  }, []);
  const navigation = useNavigation();

  const student = () => {
    navigation.navigate('StudentLogin');
  }

  const faculty = () => {
    Alert.alert('Attention', 'You are Now in Faculty Portal');
    navigation.navigate('FacultyLogin');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../Images/hiteclogo3.png')} style={styles.logo} />
        <Text style={{ fontSize: 22, color: 'white', marginLeft: 12, fontFamily: 'Montserrat-Bold' }}>
          Hitec Universe
        </Text>
      </View>

      <ScrollView>
        <View style={styles.content}>

          <View style={styles.timetable}>
            <Text style={[styles.heading, { marginTop: 0 }]}>My TimeTable</Text>
            <TouchableOpacity style={[styles.portalBox, { backgroundColor: '#87CEEB', marginBottom: 3, height: 70 }]}>
              <View style={styles.iconContainer}>
                <Ionicons name="calendar" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Timetable</Text>
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.information}>
            <Text style={styles.heading}>Information</Text>
            <TouchableOpacity style={styles.portalBox} onPress={student}>
              <View style={styles.iconContainer}>
                <Ionicons name="school" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Student Portal</Text>
              {/* <Text style={styles.portalText}>Portal</Text> */}
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.portalBox} onPress={faculty}>
              <View style={styles.iconContainer}>
                <Ionicons name="person" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Faculty Portal</Text>
              {/* <Text style={styles.portalText}>Portal</Text> */}
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.portalBox}>
              <View style={styles.iconContainer}>
                <Ionicons name="calendar" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Undergraduate Schedule</Text>
              {/* <Text style={styles.portalText}>Schedule</Text> */}
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.portalBox}>
              <View style={styles.iconContainer}>
                <Ionicons name="calendar" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Graduate Schedule</Text>
              {/* <Text style={styles.portalText}>Schedule</Text> */}
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.portalBox}>
              <View style={styles.iconContainer}>
                {/* <Ionicons name="calendar" size={30} color="dodgerblue" /> */}
                <MaterialIcons name="event-available" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Event Booking</Text>
              {/* <Text style={styles.portalText}>Booking</Text> */}
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.portalBox}>
              <View style={styles.iconContainer}>
                {/* <Ionicons name="calendar" size={30} color="dodgerblue" /> */}
                <MaterialIcons name="tour" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Virtual Tour</Text>
              {/* <Text style={styles.portalText}>Tour</Text> */}
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.portalBox}>
              <View style={styles.iconContainer}>
                <Ionicons name="calculator" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>GPA Calculator</Text>
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.portalBox}>
              <View style={styles.iconContainer}>
                <Ionicons name="calendar" size={30} color="dodgerblue" />
              </View>
              <Text style={styles.portalText}>Exam DateSheet</Text>
              <View style={styles.backiconContainer}>
                <Ionicons name="arrow-forward-circle" size={30} color="dodgerblue" />
              </View>
            </TouchableOpacity>

          </View>


          {/* Add more content here to make the ScrollView scrollable */}

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',

  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0047AB',
    // backgroundColor: '#483D8B',
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    borderBottomLeftRadius: 60,
    // marginBottom: 20,
  },
  logo: {
    width: 90,
    height: 90,
  },
  content: {
    paddingVertical: 5,
    paddingTop: 20
  },
  portalBox: {
    backgroundColor: '#ECECEC',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 15,
    height: 60,
    borderWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    textAlign: 'center',
    borderRadius: 20,
    justifyContent: 'space-between',
    elevation: Platform.OS === 'android' ? 2.5 : 0, // Apply elevation only on Android
    shadowOffset: { width: 0, height: 2 }, // Shadow properties for iOS
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    marginLeft: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ACE9F2',
    borderRadius: 20,
  },
  portalText: {
    color: '#444444',
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
    // fontFamily:'RobotoMono-SemiBold'
    // fontWeight:
    // marginLeft: 40,
    opacity:0.8,

  },
  backiconContainer: {
    width: 40,
    height: 40,
    marginRight: 20, // Use marginRight to push it to the right
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ACE9F2',
    borderRadius: 30,
  },
  heading: {
    fontSize: 18,
    color: '#36454F',
    margin: 15,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    opacity:3
  }
});



export default HomeScreen;

