
import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Btn(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.function}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding:10,
        paddingHorizontal: 25,
        marginTop: 20,
        backgroundColor:'#567568',
        width: '75%',
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        color: "#FFFF"

    }
});