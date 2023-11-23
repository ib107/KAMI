import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from "../components/Logo";

const Contact = () => {
  return (
    <View style={styles.container}>
    <Logo style={{ marginBottom: 30 }} />

    <Text style={styles.title}>Who We Are</Text>
      <Text style={styles.description}>
        We are a team of undergraduate biomedical engineering students who are passionate about creating effective solutions for Arthritis pain relief and other medical conditions. 
      </Text>

      <View style={styles.socialContainer}>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/khushi-tailor/')} 
        style={styles.socialButton}>
          <Ionicons name="logo-linkedin" size={32} color="#7F9172" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/maria-butt/')} 
         style={styles.socialButton}>
          <Ionicons name="logo-linkedin" size={32} color="#567568" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/khanaleeza/')} 
        style={styles.socialButton}>
          <Ionicons name="logo-linkedin" size={32} color="#7F9172" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/isha-baxi107/')}  
        style={styles.socialButton}>
          <Ionicons name="logo-linkedin" size={32} color="#567568" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
   // alignItems: 'center',
   // justifyContent: 'center',
   paddingHorizontal: 20,

    flex: 1,
    backgroundColor: "#FFFFF",
    alignItems: "center",
    justifyContent: "center",
   marginBottom: 150,
   // marginTop: -200, 

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 10,
  },
});

export default Contact;
