import React from 'react';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';
// import { View, tint } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentSignUp1 from './Screens/StudentSignUp/StudentSignUp1';
import StudentSignUp2 from './Screens/StudentSignUp/StudentSignUp2';
import StudentSignUp3 from './Screens/StudentSignUp/StudentSignUp3';
import StudentLogin from './Screens/StudentLogin/StudentLogin';
import HomeScreen from './Screens/Home/HomeScreen';
import FacultyLogin from './Screens/FacultyLogin/FacultyLogin';
import HomeScreen2 from './Screens/Home/HomeScreen2';
import FacultySignUp1 from './Screens/FacultySignUp/FacultySignUp1';
import FacultySignUp2 from './Screens/FacultySignUp/FacultySignUp2';
import FacultySignUp3 from './Screens/FacultySignUp/FaacultySignUp3';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Complaints from './Screens/Complaints/Complaints';
import Setting from './Screens/Settings/Setting';
import News from './Screens/LatestNews/News';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Admin from './Screens/Admin/Admin';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      header: () => null,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'HomeScreen') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Login') {
          iconName = focused ? 'enter' : 'enter-outline';
        } else if (route.name === 'Complaints') {
          iconName = focused ? 'chatbox' : 'chatbox-outline';
        } else if (route.name === 'News') {
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={26} color={'#0047AB'} />;
      },
      
       tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel:false,
        tabBarStyle: [
          {
            display: "flex",
            height:50,
            backgroundColor:'#F5F5F5',

           
          },
          null
        ]
      
    })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Complaints" component={Complaints} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Settings" component={Setting} /> 
    </Tab.Navigator>
  );
}



//Function for Drawer Navigation

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false, // Hide the header for all screens in the Drawer Navigator
      }}
    >
      <Drawer.Screen name="HomeScreen" component={TabNavigation} />
      <Drawer.Screen name="Admin" component={Admin} />
    </Drawer.Navigator>
  );
}


function App() {

  // useEffect(() => {
  //   // Change the status bar color when the component mounts
  //   StatusBar.setBackgroundColor('#40DFFE');
  //   StatusBar.setTranslucent(false)
  // }, [])

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: () => null,
      }}>
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeScreen', headerShown: false }} />
        <Stack.Screen name="Home2" component={HomeScreen2} options={{ title: 'HomeScreen2' }} />
        <Stack.Screen name="StudentSignUp1" component={StudentSignUp1} options={{ title: 'Student Details' }} />
        <Stack.Screen name="StudentSignUp2" component={StudentSignUp2} options={{ title: 'OTP Verification' }} />
        <Stack.Screen name="StudentSignUp3" component={StudentSignUp3} options={{ title: 'Set Password' }} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} options={{ title: 'Student Login' }} />
        <Stack.Screen name="FacultyLogin" component={FacultyLogin} options={{ title: 'Faculty Login' }} />
        <Stack.Screen name="FacultySignUp1" component={FacultySignUp1} options={{ title: 'Faculty Details' }} />
        <Stack.Screen name="FacultySignUp2" component={FacultySignUp2} options={{ title: 'Email Verification' }} />
        <Stack.Screen name="FacultySignUp3" component={FacultySignUp3} options={{ title: 'Set Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
