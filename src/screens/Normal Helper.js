import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollViewComponent, FlatList, ScrollView, Image } from 'react-native'
import Button from './Button';


const Icon = require('../../assets/doctor.png');

const EmpNames = ['Dr.Strange', 'IronMan', 'Black Widow', 'Captain America', 'SpiderMan', 'Hulk', 'Thor', 'Wanda'];
const Expert = ['skin', 'bone', 'blood', 'dental', 'skin', 'bone', 'blood', 'dental'];
const Status = [0, 1, 1, 1, 0, 0, 0, 1];


const Helper = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <Text style={styles.headerstyle} >Normal Assistant</Text>
                <View>
                    <Text style={styles.textstyle}>Assistant's List</Text>
                    <View style={{ marginTop: 5, justifyContent: 'center' }}>
                        <FlatList numColumns={2} data={EmpNames} extraData={Expert} extraData2={Status} renderItem={({ item, index }) => {
                            return (
                                <View style={styles.liststyle}>
                                    <Image source={Icon} style={styles.iconstyle} />
                                    <Text style={{ textAlign: 'center', marginTop: 1, color: '#4ba6e3', fontSize: 16, fontWeight: '600', }}>{EmpNames[index]}</Text>
                                    <Text style={{ textAlign: 'center', marginTop: 1, color: '#fc8955', fontSize: 14, fontWeight: '600' }}>{Expert[index]} </Text>
                                    <Text style={[styles.avastyle, { color: Status[index] == 0 ? 'red' : 'green' }]}>{Status[index] == 0 ? 'Busy' : 'Available'} </Text>
                                    <Button />
                                </View>
                            )
                        }} />

                    </View>
                </View>
            </ScrollView>
        </View>



    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor:'#69a3c2'
    },
    headerstyle: {
        backgroundColor: '#4ba6e3',
        color: '#fff',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
        height: '17%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 70,
        paddingBottom: 40,
        shadowColor: 'black',
        shadowOffset: { width: 20, height: 20 },
        elevation: 9,
        shadowColor: "#000",
        shadowOpacity: 100,
        shadowRadius: 10.62,
        shadowOffset: { width: 0, height: 4 }
    },
    textstyle: {
        textAlign: 'center',
        color: "#4ba6e3",
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: '50%',
    },
    liststyle: {
        width: '47%',
        height: 160,
        backgroundColor: '#fff',
        elevation: 10,
        margin: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: 'center'
    },
    iconstyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 3,
        alignSelf: 'center'

    },
    avastyle: {
        textAlign: 'center',
        // color: '#fc8955',
        fontSize: 15,
        fontWeight: '500',

    }
})

export default Helper
