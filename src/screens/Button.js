import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = (onClick) => {
    return (
        <TouchableOpacity onPress={() => (
            onClick()
        )}>
            <Text style={Styles.buttonstyle}>View Profile</Text>
        </TouchableOpacity>
    );
}
const Styles = StyleSheet.create({
    buttonstyle: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 15,
        borderWidth: 0.25,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 4,
        padding: 4,
        borderRadius: 4

    }
})
export default Button
