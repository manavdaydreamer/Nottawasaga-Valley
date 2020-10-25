import { StatusBar } from 'expo-status-bar';
import React from 'react'

import { StyleSheet, Text, View } from 'react-native';
import {Router,Scene} from 'react-native-router-flux'


import Splash from './Screens/Splash'
import Auth from './Screens/Auth'


export default function App() {
  
  return (
    <Router>
      <Scene key="root">
        <Scene key="splash" component={Splash} initial={true} hideNavBar={true}></Scene>
        <Scene key="autho" component={Auth} hideNavBar={true}  ></Scene>
        
      </Scene>

    </Router>
  );
}


