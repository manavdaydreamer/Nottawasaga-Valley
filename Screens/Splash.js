import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,Animated,ActivityIndicator,} from 'react-native'

import logo from './Images/NVCA.png'
import {Actions} from 'react-native-router-flux';

const switchToAuth = () => {
    Actions.replace('autho')
  };

export default class Splash extends Component {
    state = {
       
        loadingSpinner: true,
      };
      componentDidMount() {
        setTimeout(switchToAuth, 2000);  
        
      }
       
    render() {
        return (
        <View style={styles.container} >
          
          <Image source={logo} style={styles.image}></Image>

          {this.state.loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                flex:2,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                marginTop:300,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size="large"
              color="#239442"
            />
          ) : null}
        
        
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