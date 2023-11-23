import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import Logo from "../components/Logo";
import StandardButton from "../components/StandardButton";
import { getB, getHeat, getUserDetails, getVib, getBState, getTemp} from "../firebase";

export default function HomeScreen({ navigation }) {
    const [VData, setVData] = useState("OFF")
    const [HData, setHData] = useState("OFF")
    const [BData, setBData] = useState("OFF")
    const [BStateData, setBStateData] = useState("OFF")
    const [TData, setTData] = useState("OFF")

    useEffect(() => {
        if (getUserDetails === null) {
            navigation.navigate("Login")
        }

        const interval = setInterval(() => {
            handleVState()
            handleHState()
            handleBState()
            handleBStates()
            handleTState()
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    async function handleVState() {
        let VData = await getVib()
        setVData(VData)
    }

    async function handleHState() {
        let HData = await getHeat()
        setHData(HData)
    }

    async function handleTState() {
        let TData = await getTemp()
        setTData(TData)
    }

    async function handleBState() {
         let BData = await getB()
         setBData(BData)
    }

    async function handleBStates() {
        let BStateData = await getBState()
        setBStateData(BStateData)
   }

    return ( //change HData AND BData
        <View style={stylesHome.container}>
            <Logo style={{ marginBottom: 20 }} /> 

            <Text style={stylesHome.temperature}> Temperature: </Text>
            <Text style={{fontSize: 23, padding: 3}}> Level: {HData}</Text>
            <Text style={{fontSize: 23}}> Temperature: {TData}</Text>

            <Text style={stylesHome.vibration}> Vibration: </Text>
            <Text style={{fontSize: 23 }}> Level: {VData} </Text>

            <Text style={stylesHome.battery}> Battery: </Text>
            <Text style={{fontSize: 23 , padding: 3}}> Voltage: {BData}</Text>
            <Text style={{fontSize: 23 , padding: 3, marginBottom: 30}}> Level: {BStateData}</Text>

           {/*<View style={{flexDirection: 'row'}}>

           <View style={{flex:1, left: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('Temperature Plot')}>
                <Text style={stylesHome.graphH}> Temperature Plot</Text>
            </TouchableOpacity>
            </View>
            
            <View style={{flex:1,left: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('Vibration Plot')}>
                <Text style={stylesHome.graphV}> Vibration Plot</Text>
            </TouchableOpacity>
            </View>

</View>*/}
        </View>
    );
}

const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
            backgroundColor: "#FFFFF",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
           // marginTop: 120,
    },

    temperature: {
        width: "70%",
        height: 45,
        marginBottom: 0,
        alignItems: "center",
        fontWeight: 'bold', 
        fontSize: 21,
        color: '#567568',

    },

    vibration: {
        width: "70%",
        height: 45,
        marginTop: 30,
        alignItems: "center",
        fontWeight: 'bold', 
        fontSize: 21,
        color: '#567568',

    },

    battery: {
        width: "70%",
        height: 45,
        marginTop: 20,
        alignItems: "center",
        fontWeight: 'bold', 
        fontSize: 21,
        color: '#567568',

    },

   graphH: {
    fontSize: 20,
    marginTop: 10, 
    marginBottom: 10, 
    backgroundColor: '#7F9172',
    width: '80%',
    height: '35%', 
    alignItems: 'center',
    flexDirection: 'flex-start',
    padding: 5,
   }, 

   graphV: {
    fontSize: 20,
    marginTop: 10, 
    marginBottom: 10, 
    flexDirection: 'flex-end', 
    backgroundColor: '#7F9172',
    width: '65%',
    height: '35%', 
    alignItems: 'center',
    padding: 5, 
   }, 
    

}
);