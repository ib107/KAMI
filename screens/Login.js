import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../components/Logo';
import StandardButton from '../components/StandardButton';

import { firebaseLogin } from '../firebase';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onLoginButton() {
        console.log(email, password)
        //let tempuser = await firebaseLogin("aleeza.khan@ryerson.ca", "lol123");
        let tempuser = await firebaseLogin("maria.butt@ryerson.ca", "lol123");

        // let tempuser = await firebaseLogin(email, password);
        if (tempuser != null) {
            navigation.navigate('Home')
        }
    }

    return (
        <View style={stylesLogin.container}>
            <Logo style={{ marginBottom: 30 }} />
            <StatusBar style="auto" />
            <View style={stylesLogin.inputView}>
                <TextInput
                    style={stylesLogin.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={stylesLogin.inputView}>
                <TextInput
                    style={stylesLogin.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                <Text style={stylesLogin.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <StandardButton function={() => onLoginButton()} text={'Login'} />
            <Text style={stylesLogin.loginText}></Text>

            <Text style={{ fontSize: 18, marginTop: 30 }}>Don't have an account? </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={stylesLogin.registerBtn}>Register Here</Text>
            </TouchableOpacity>

        </View>


    );
}

const stylesLogin = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#FFFFF",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            marginTop: 20,
        },

        inputView: { // email and password 
            alignItems: 'center',
            padding: 10,
            paddingHorizontal: 25,
            marginTop: 20,
            backgroundColor: '#7F9172',
            width: '75%',
            height: 65,
            //65
            borderRadius: 5
        },

        TextInput: { // when typing 
            height: 20,
            flex: 1,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
        },

        forgot_button: {
            height: 30,
            marginBottom: 10,
            marginTop: 20,
            fontSize: 17,
            alignItems: 'right',
        },

        registerBtn: {
            height: 80,
            fontSize: 18,
            borderRadius: 10,
            color: '#567568',
            alignItems: "center",
            padding: 7,
        },

    });

