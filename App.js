import { StatusBar } from 'expo-status-bar';
import React from 'react'

import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD61p7zqLeyH1fzoDdnJPyLJYO0f5C6IRs",
  authDomain: "react-11b30.firebaseapp.com",
  databaseURL: "https://react-11b30.firebaseio.com",
  projectId: "react-11b30",
  storageBucket: "react-11b30.appspot.com",
}



import Splash from './Screens/Splash'
import Auth from './Screens/Auth'
import form from './Screens/form'
import form2 from './Screens/form2'
import form3 from './Screens/CollectionArea'
import signUp from './Screens/SignUp'
import { Component } from 'react';






const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="splash" component={Splash} initial={true} hideNavBar={true}></Scene>
          <Scene key="autho" component={Auth} hideNavBar={true}  ></Scene>
          <Scene key="formo" component={form} back={true} onBack={() => { Actions.replace("autho") }}
            backButtonTintColor={"#4A934D"} title={"Nottawasaga Valley"} titleStyle={{ color: "#1C3962", fontSize: 20, }} ></Scene>
          <Scene key="formo2" component={form2} back={true} onBack={() => { Actions.replace("formo") }} backButtonTintColor={"#4A934D"}title={"Nottawasaga Valley"} titleStyle={{ color: "#1C3962", fontSize: 20, }} ></Scene>
          <Scene key="SignUp" component={signUp} back={true} onBack={() => { Actions.replace("autho") }}  backButtonTintColor={"#4A934D"}title={"Nottawasaga Valley"} titleStyle={{ color: "#1C3962", fontSize: 20, }}> </Scene>
          <Scene key="formo3" component={form3} back={true} backButtonTintColor={"#4A934D"} onBack={() => { Actions.replace("formo2") }} title={"Nottawasaga Valley"} titleStyle={{ color: "#1C3962", fontSize: 20, }} />




        </Scene>

      </Router>
    );
  }
}


