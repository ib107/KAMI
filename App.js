import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Intro from './screens/Intro'; 
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import UserGuide from './screens/UserGuide';
import Settings from './screens/Settings';
import Forgot from './screens/Forgot'; 
import Email from './screens/Email'; 
import About from './screens/About'; 
import Contact from './screens/Contact'; 
import VibGraph from './screens/VibGraph';
import TempGraph from './screens/TempGraph';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          else if (route.name === 'User Manual') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7F9172',
        tabBarInactiveTintColor: 'black',
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="User Manual" component={UserGuide} />
      </Tab.Navigator>
    );
  }
 
 export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='KAMI'>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="KAMI" component={Intro} />
          <Stack.Screen name="Home" component={MyTabs} 
          options={{ 
            headerShown: false, }} />
          {/*<Stack.Screen 
          //name="Temperature Plot" 
          //component={TempGraph} 
         // options={{ headerShown: true}}/>
          // <Stack.Screen 
          //name="Vibration Plot" 
          //component={VibGraph} 
          //options={{ headerShown: true}}/ >*/}
         <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} />
          <Stack.Screen 
          name="Forgot" 
          component={Forgot}
          options={{ headerShown: false }} />
          <Stack.Screen 
          name="Email" 
          component={Email} 
          options={{ headerShown: false }}/>
           <Stack.Screen 
          name="About KAMI" 
          component={About} 
          options={{ headerShown: true}}/>
           <Stack.Screen 
          name="Contact Us" 
          component={Contact} 
          options={{ headerShown: true}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  



  
  







