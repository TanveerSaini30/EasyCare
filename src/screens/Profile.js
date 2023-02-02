import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Profile = () => {
    return (
        <View style={Styles.Container}>
            <Text style={{ fontSize: 30, color: "red", textAlign: 'center', }}>profile</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',


    }
})
export default Profile
