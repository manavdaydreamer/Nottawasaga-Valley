import React, { Component, useState, useEffect } from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Form, Item, Input, Body, Text, CheckBox, Button } from 'native-base';
import logo from './Images/head.png'
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';





import image from './Images/1.png'

//  const switchToForm = () => {
//     Actions.replace('formo')
//     // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
//     //     .then(() => { Actions.replace('formo')}, (error) => { Alert.alert(error.message); });

// };




export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }

    };
    switchToForm = () => {
        // Actions.replace('formo')
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { Actions.replace('formo')}, (error) => { alert(error.message); });

    };
    switchToSignUp = () => {
        Actions.replace('SignUp')
       
    };

    render() {


        return (
            <View style={styles.container} >
                <Image source={image} style={styles.image}></Image>
                <View style={styles.top}>

                </View>

                <View style={styles.middle}>

                    <View style={styles.formArea}>
                        <Text style={[styles.textContainer, styles.signin]}>Sign in</Text>
                        <Form style={styles.mainForm}>
                            <Item style={styles.formItems}>
                                <Input placeholder="Email" style={styles.Input}
                                    value={this.state.email}
                                    onChangeText={text => this.setState({ email: text })} />
                            </Item>
                            <Item style={styles.formItems}>
                                <Input secureTextEntry placeholder="Password" style={styles.Input}
                                    value={this.state.password}
                                    onChangeText={text => this.setState({ password: text })}
                                />
                            </Item>

                            {/* <View style={styles.loginAs}>
                                <Text style={styles.loginText}>Login as</Text>
                                <CheckBox checked={true} />
                                <Body>
                                    <Text style={styles.cboxText}>Admin</Text>
                                </Body>
                                <CheckBox checked={false} />
                                <Body>
                                    <Text style={styles.cboxText}>User</Text>
                                </Body>
                            </View> */}
                            <View style={styles.Button}>
                                <Button block style={styles.mainBtn} onPress={this.switchToForm}>
                                    <Text style={styles.btnText}>Sign In</Text>
                                </Button>
                            </View>
                            <View style={styles.formI}>
                                <Text style={styles.forgotPass}>Forgot Password ?</Text>
                                <Text style={styles.signup} 
                                onPress={this.switchToSignUp}>SignUp</Text>
                            </View>
                        </Form>
                    </View>
                </View>
                <View style={styles.bottom}>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    image: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        justifyContent: 'space-evenly',


    },
    top: {
        position: 'relative',
        backgroundColor: '#5257F2',
        paddingRight: 12.7,
        paddingLeft: 12.7,
        height: 250,
    },
    middle: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
        paddingTop: 300,
        paddingLeft: 26.3,
        paddingRight: 26.3,
    },
    bottom: {
        position: 'relative',
        height: '100%',
        paddingRight: 12.7,
        paddingLeft: 12.7,
        backgroundColor: '#5257F2',
    },
    textContainer: {
        color: '#FCFDFF',
        fontFamily: 'Arial',
        fontSize: 24,
        marginBottom: 30,
        position: 'relative',
        top: '20%',
        alignSelf: 'center',
    },
    formArea: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        top: '10%',
        paddingBottom: 40,
    },
    signin: {
        top: 0,
        color: '#2D3057',
        marginTop: 15,
    },
    formItems: {
        marginTop: 15,
        borderBottomColor: '#2D3057',
        justifyContent: 'center',

    },
    Input: {
        fontFamily: 'Arial',
        fontSize: 15,
        paddingRight: 100
    },
    loginAs: {
        paddingLeft: 46.6,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
        alignItems: 'center',
    },
    loginText: {
        color: '#2D3057',
        fontSize: 15,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    forgotPass: {
        color: '#2D3057',
        fontSize: 12,


    },
    formI: {
        color: '#2D3057',
        fontSize: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    signup: {
        color: '#2D3057',
        fontSize: 12,
        fontWeight: 'bold',


    },
    cboxText: {
        fontFamily: 'Arial',
        fontSize: 15,
    },
    Button: {
        padding: 30.8,
        borderRadius: 4,
    },
    mainBtn: {
        backgroundColor: '#4A934D',
    },
    btnText: {
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold'
    },
});
