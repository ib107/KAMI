import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import Logo from "../components/Logo";
import { RadialGradient } from 'react-native-gradients';
//import { Image } from "react-native-svg";

const logogif = require('../assets/animation.gif')

const AddGifImage = () => {
    return (
        <View>
          <Image
            source={{logogif}}
          />
        </View>
      );
}

const colorList = [
    { offset: '60%', color: '#7F9172', opacity: '0' },
{ offset: '10%', color: '#46503f', opacity: '1' },
]

export default function Intro({ navigation }) {

    setTimeout(() => {
        navigation.navigate('Login'); //this.props.navigation.navigate('Login')
    }, 5000); 

    return (

        <View>
            <ImageBackground source={logogif} style={stylesIntro.image}/>
        </View>

    )
}

const stylesIntro = StyleSheet.create({

    image: {
     // position: 'absolute',
        width: 400,
        height: 400,
        alignItems: "center",
        justifyContent: "center", 
        bottom: 50, 
        top: 150, 
    },

 
  

}
)