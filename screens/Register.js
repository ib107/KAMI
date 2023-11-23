import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { firebaseRegister } from "../firebase";
import StandardButton from '../components/StandardButton';
import Logo from "../components/Logo";


export default function RegisterScreen({ navigation }) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function onRegisterButton() {
        let tempuser = await firebaseRegister(email, password);
        if (tempuser != null) {
        }
    }

    async function AlreadyRegisterButton() {
        navigation.navigate('Login');
    }

    /*
      const submit = () => {
          if ((password == '', email == '' || user == '')) {
              alert('All fields are required');
          } else {
              navigation.navigate('Login');
              //alert('Proceed to Login');
          }
      };
    */
    return (
        <View style = 
        {{flex: 1,
            backgroundColor: "#FFFFF",
            alignItems: "center",
            justifyContent: "center",
           // marginBottom: 20,
           // marginTop: 20, 

            marginBottom: 100,
            marginTop: 20,
        }}>

            <Logo style ={{marginBottom: 30}}/>

            <Text style={{ 
                fontSize: 18, 
                height: 20, 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: 10, 
                 }}> Enter Your Details: </Text>

            <TextInput
                onChangeText={(user) => setUser(user)}
                placeholder="Name"
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

            <TextInput
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
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
                onPress={onRegisterButton}
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
                        Create an Account
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={AlreadyRegisterButton}
                style={{ width: '100%' }}>
                <View
                    style={{
                        marginTop: 10,
                        width: '70%',
                        alignSelf: 'center',
                    }}>
                    <Text style={{ textAlign: 'center', color: '#tff', fontSize: 18, marginTop: 20}}>
                        Already Registered?
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
