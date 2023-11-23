import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from "../components/Logo";


export default function Settings({navigation}) {

    return (

        <View style={screen.container}>
            <Logo style={{ marginBottom: 30 }} />
            
            {/*<View style={topbar.container}>
               // <Text style={topbar.text}>User Profile</Text>
            </View>*/}

            <View style={page.container}>
                <View style={page.table}>

                    <View style={page.tableentry}>
                        <TouchableOpacity onPress={() => navigation.navigate('Email')}>
                            <Text style={page.tableentrytext}>Change Email Settings</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={page.tableentry}>
                        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                            <Text style={page.tableentrytext}>Change Password</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={page.tableentry}>
                        <TouchableOpacity onPress={() => navigation.navigate('About KAMI')}>
                            <Text style={page.tableentrytext}>About KAMI</Text>
                        </TouchableOpacity>

                        
                    </View>

                   {<View style={page.tableentry}>
                        <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
                            <Text style={page.tableentrytext}>Contact Us</Text>
                        </TouchableOpacity>
          </View> }


                </View>
            </View>
        </View>
    );
}

const screen = StyleSheet.create({
    container: {
       flex: 1,
    borderWidth: 0,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'flex-start',
       
    },
});

const topbar = StyleSheet.create({
    container: {
        height: "10%",
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#7F9172',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-center',
        paddingBottom: 10,
    
    },
    text: {
        //alignSelf: "center",
        fontSize: 18,
        color: "#fff",
       
    },
    cross: {
        position: 'absolute',
        right: 20,
        bottom: 15,
    },
});

const page = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'column',
        alignContent: 'flex-start',
        flexGrow: 1,
        paddingTop: 13,
        paddingHorizontal: 10,
        gap: 5,
    },
    table: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    tableentry: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#7F9172',
        padding: 30,
        gap: 10,
        
    },
    tableentrytext: {
        fontSize: 18,
        alignItems: 'center', 
    },
    profileentry: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
    },
    profileentrytext: {
        fontSize: 18,
    },
});