import React from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Form, Item, Body, Text, CheckBox, } from 'native-base';

import { Input, Block,Button, } from 'galio-framework';



import DatePicker from 'react-native-datepicker'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
import {Actions} from 'react-native-router-flux';




var radio_props = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 }
];
const switchToForm3 = () => {
    Actions.replace('formo3')
  };




const macro = () => {
    return (
         
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
           
            <Text style={styles.Heading}>OBBN Field Sheet</Text>

            <View style={styles.App}>
                <Text style={styles.textContainer}>Organic Matter</Text>
                <Form style={styles.mainForm}>

                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 5000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}  >
                        <Text style={styles.Fields}>Woody Debris:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },
                                


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />

                    </View>
                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 4000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
                        <Text style={styles.Fields}>Detritus:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />
                    </View>
                   
                    

                </Form>
            </View>
            <View style={styles.App}>
                <Text style={styles.textContainer}>Macrophytes</Text>
                <Form style={styles.mainForm}>

                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 5000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}  >
                        <Text style={styles.Fields}>Emergent:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },
                                


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />

                    </View>
                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 4000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
                        <Text style={styles.Fields}>Rooted Floating:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />
                    </View>
                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 4000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
                        <Text style={styles.Fields}>Submergent:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />
                    </View>
                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 3000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
                        <Text style={styles.Fields}>Free Floating:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />
                    </View>
                   
                    

                </Form>
            </View>
            <View style={styles.App}>
                <Text style={styles.textContainer}>Algae</Text>
                <Form style={styles.mainForm}>

                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 2000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}  >
                        <Text style={styles.Fields}>Floating:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },
                                


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />

                    </View>
                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 4000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
                        <Text style={styles.Fields}>Filamentous:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />
                    </View>
                    <View style={styles.loginAs, (Platform.OS !== 'android' && {
                        zIndex: 4000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
                        <Text style={styles.Fields}>Attached:  </Text>
                        <DropDownPicker
                            items={[
                                { label: 'absent', value: 'absent' },
                                { label: 'present', value: 'present' },
                                { label: 'abundant ', value: 'abundant' },


                            ]}
                            defaultValue={'absent'}
                            containerStyle={{
                                height: 40,
                            }}
                            style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black' }}
                            itemStyle={{
                                justifyContent: 'flex-start'

                            }}
                            selectedtLabelStyle={{
                                color: '#39739d'
                            }}
                            activeLabelStyle={{ color: '#1C3962', }}
                            dropDownStyle={{ backgroundColor: "white" }}

                        />
                    </View>
                   
                    

                </Form>
            </View>
            
            
      <View style={styles.Button}>
                                <Button capitalize size="large"  color="#4A934D" onPress={switchToForm3}>
                                    <Text style={styles.btnText}>Next</Text>  
                                </Button>
                            </View>

        </ScrollView >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C3962',
        position: 'relative',
        



    },
    Heading: {
        color: 'white',
        flex: 1,
        top: 50,
        alignSelf: 'center',
        fontSize: 24,
    },
    Radio: {
        flexDirection: 'row',
        flex: 1

    },
    date: {
        width: 350,


    },
    dateI: {
        borderRadius: 5,
        borderColor: 'black',
        height: 37,
        borderWidth: 1,
        fontSize: 17,
        width: '95%',
        marginRight: 20,


    },
    loginAs: {
        paddingLeft: 10,
        display: 'flex',
        // flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
        justifyContent: 'space-evenly',


    },
    Input: {
        fontFamily: 'Arial',
        fontSize: 20,
        paddingRight: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '55%'



    },
    Button: {
        padding: 30.8,
        borderRadius: 4,
        alignSelf:'center'
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
    textContainer: {
        color: '#1C3962',
        fontFamily: 'Arial',
        fontSize: 24,
        marginBottom: 30,
        position: 'relative',
        paddingTop: 15,
        alignSelf: 'center',
    },
    loginText: {
        color: '#1C3962',
        fontSize: 17,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        alignSelf: 'flex-start',



    },
    Fields: {
        color: '#1C3962',
        fontSize: 17,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        alignSelf: 'auto',
        flexWrap: 'wrap',
        flex: 1





    },
    App: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 80,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'flex-start'

    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default macro;

