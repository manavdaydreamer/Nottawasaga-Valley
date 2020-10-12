import React, { Component } from 'react'
import {View,Text,StyleSheet,Animated,Image} from 'react-native'

import logo from './Images/NVCA.png'

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Image source={logo} style={styles.image}></Image>
                <Text style={styles.logotext}>Nottawasaga Valley Conservation Authority</Text>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#1C3962',
        justifyContent:'center'
        
    },
    logotext:{
        flex:2,
        color:'#239442',
        fontFamily:'Arial',
        fontSize:30,
        marginTop:20,
        fontWeight:'300',
        textAlign:'center'},
    image:{
        flex:1,
        width:null,
        height:null,
        marginTop:250,
        resizeMode: 'contain',
    justifyContent:'center'}
})