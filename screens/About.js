
import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import Logo from "../components/Logo";

export default function About({navigation}) {

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFFFF",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 100,
            marginTop: 20, 
        }}>
        <Logo style={{ marginBottom: 30 }} />

        <Text style = {{
            alignItems: 'center',
            //textAlign: 'center',
            marginHorizontal: 30,
            marginBottom: 30,
            fontSize: 18,  
        }} >

            Welcome to KAMI, where innovation and compassion meet to make a difference in the lives of those suffering from rheumatoid arthritis. 
            We understand that arthritis is a debilitating condition that affects millions worldwide and can drastically reduce one's quality of life. 
            That's why we created KAMI, a product designed to relieve the pain associated with arthritis, specifically in the hand. 
            </Text> 

            <Text style = {{
            alignItems: 'center',
           // textAlign: 'center',
            marginHorizontal: 30,
            marginBottom: 30,
            fontSize: 18, 
        }} >
            KAMI works by using varying levels of heat and vibrational therapy that can be controlled by the user to target joint pain and provide relief. 
            The accompanied app helps view the usage of the KAMI glove.
            </Text> 

            <Text style = {{
            alignItems: 'center',
            //textAlign: 'center',
            marginHorizontal: 28,
            marginBottom: 30,
            fontSize: 20, 
            color: '#567568', 
            fontWeight: 'bold',
       
        }} >
            At KAMI, we hope to help bring you the relief you deserve!
             </Text> 

        </View>
    );
}