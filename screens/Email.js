import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { firebaseUpdateEmail } from "../firebase";
import Logo from "../components/Logo";


export default function ChangeEmail({ navigation }) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*
        async function onResetButton() {
            console.log(email, password)
            let tempuser = await firebaseUpdateEmail(email);
            if (tempuser != null) {
                navigation.navigate('Login')
            }
        }
    */
    async function onEmailUpdate() {
        let tempuser = await firebaseUpdateEmail(email);
        console.log(email)
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

            <Logo style={{ marginBottom: 30 }} />

            <Text style={{
                fontSize: 18,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10
            }}> Enter the Updated Email: </Text>

            <TextInput
                onChangeText={(email) => setEmail(email)}
                placeholder="Email"
                placeholderTextColor="#FFFFFF"
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
                onPress={onEmailUpdate}
                style={{ width: '100%' }}>
                <View
                    style={{
                     //   alignItems: 'center',
                        //padding: 10,
                      //  paddingHorizontal: 25,
                      //  marginTop: 20,
                        //backgroundColor: '#567568',
                       // width: '75%',
                       // borderRadius: 5,

                        alignItems: 'center',
                        padding:10,
                        paddingHorizontal: 25,
                        marginTop: 20,
                        backgroundColor:'#567568',
                        width: '75%',
                        borderRadius: 5,
                        alignSelf: 'center'


                    }}>
                    <Text style={{
                        textAlign: 'center', color: '#fff', fontSize: 18
                    }}>
                        Submit
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onBacktoLoginButton}
                style={{ width: '100%' }}>
                <View
                    style={{
                        //backgroundColor: '#567568',
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