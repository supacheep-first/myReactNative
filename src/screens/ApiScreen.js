import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, Button, FlatList, TextInput, Dimensions } from 'react-native';

const ApiScreen = () => {
    let [resBC, setResBC] = useState('')
    let [_a, setA] = useState('')
    let [_ab, setAB] = useState('')
    let [_ac, setAC] = useState('')
    let [resXYZ, setResXYZ] = useState('')
    let [_x, setX] = useState('')
    let [_y, setY] = useState('')
    let [_z, setZ] = useState('')
    let [_coords, setCoords] = useState([]);

    const apiFindBC = () => {
        let _url = 'http://192.168.1.105:8080/DOSCG/doFindBC?param=' + _a + ',' + _ab + ',' + _ac
        axios({
            url: _url,
        }).then(response => {
            setResBC(response.data)
        }).catch(error => {
            console.log(error)
        });
    }

    const apiFindXYZ = () => {

        let _url = 'http://192.168.1.105:8080/DOSCG/doFindXYZ?param=X,Y,5,9,15,23,Z'
        axios({
            url: _url,
        }).then(response => {
            setX(response.data[0])
            setY(response.data[1])
            setZ(response.data[6])
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <Text style={styles.cusfont}>FIND A, B, C</Text>
                <View>
                    <TextInput style={styles.textInput} placeholder='A' onChangeText={text => setA(text)}></TextInput>
                    <TextInput style={styles.textInput} placeholder='A + B' onChangeText={text => setAB(text)}></TextInput>
                    <TextInput style={styles.textInput} placeholder='A + C' onChangeText={text => setAC(text)}></TextInput>
                    <Text style={styles.cusfont}>A = {resBC['a']}, B = {resBC['b']}, C = {resBC['c']}</Text>
                </View>
                <Button
                    title="CALL API "
                    onPress={() => apiFindBC()}
                />
            </View>

            <View style={styles.border}>
                <Text style={styles.cusfont}>FIND X, Y, Z</Text>
                <Text style={styles.cusfont}>INPUT IS X, Y, 5, 9, 15, 23, Z</Text>
                <Button
                    title="CALL API "
                    onPress={() => apiFindXYZ()}
                />
                <Text style={styles.cusfont}>{resXYZ}</Text>
                <Text style={styles.cusfont}>X = {_x}, Y = {_y}, Z = {_z}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        paddingTop: 60,
    },
    cusHeader: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    cusFooter: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    cusfont: {
        color: "red", fontSize: 18, fontWeight: "bold",
    }, mainView: {
        flex: 1,
    },
    textInput: {
        borderBottomColor: 'red', borderBottomWidth: 1, height: 40,
    },
    border: {
        borderColor: 'gray', borderWidth: 2, padding: 20, marginBottom: 5
    }, map: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});
export default ApiScreen;