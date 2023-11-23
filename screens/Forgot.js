
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { firebaseResetPassword, firebaseUpdatePassword } from "../firebase";
import Logo from "../components/Logo";

export default function Forgot({ navigation }) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function onResetButton() {
        console.log(email, password)
        //let tempuser = await firebaseResetPassword("aleeza.khan@ryerson.ca", "lol123");
        let tempuser = await firebaseResetPassword(email);
        if (tempuser != null) {
            navigation.navigate('Login')
        }
    }

    async function onPasswordUpdate() {

        let tempuser = await firebaseUpdatePassword(password);
        console.log(password)
    }

    async function onBacktoLoginButton() {
        navigation.navigate('Login')
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFFFF",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 100,
            marginTop: 20,
        }}>

            <Logo style={{ marginBottom: 30 }}></Logo>

            <Text style={{ 
                fontSize: 18, 
                height: 20, 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: 10 }}> Enter your Email: </Text>


            <TextInput
                placeholder="Email"
                placeholderTextColor="#FFFFFF"
                onChangeText={(email) => setEmail(email)}
                style={{

                    alignItems: 'center',
                    padding: 10,
                    paddingHorizontal: 25,
                    marginTop: 20,
                    backgroundColor: '#7F9172',
                    width: '75%',
                    height: 55,
                    borderRadius: 5,
                    textAlign: 'center',
                    fontSize: 20,
                    alignSelf: 'center'
                }}
            />


            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onResetButton}
                style={{
                    alignItems: 'center',
                    padding: 10,
                    paddingHorizontal: 25,
                    marginTop: 20,
                    backgroundColor: '#567568',
                    width: '75%',
                    borderRadius: 5,
                }}>

                <View
                    style={{
                        alignItems: 'center',
                        padding: 1,
                        backgroundColor: '#567568',
                        width: '75%',
                        borderRadius: 5,

                    }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>
                       Get New Password
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onBacktoLoginButton}
                style={{ width: '100%' }}>
                <View
                    style={{
                        padding: 14,
                        marginTop: 10,
                        width: '70%',
                        alignSelf: 'center',

                    }}>
                    <Text style={{ textAlign: 'center', color: '#000', fontSize: 18 }}>
                       Login
                    </Text>
                </View>
            </TouchableOpacity>



        </View>
    );
}