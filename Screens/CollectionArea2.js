import React from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Form, Item, Input, Body, Text, CheckBox, Button } from 'native-base';


import DatePicker from 'react-native-datepicker'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
import {Actions} from 'react-native-router-flux';



var radio_props = [
  { label: 'Pool', value: 1 },
  { label: 'Riffle', value: 0 }
];
var radio2_props = [
    { label: 'Microscope', value: 1 },
    { label: 'Unaided', value: 0 }
  ];
const switchToForm2 = () => {
  Actions.replace('formo2')
};



const CollectionArea2 = () => {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
      <Text style={styles.Heading}>Collection Area</Text>
      <View style={styles.App}>
        <Text style={styles.textContainer}>Sample 2</Text>
        <Form style={styles.mainForm}>
        <View style={styles.loginAs}>
            <Text style={styles.Fields}>Pool or Riffle:</Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              radioStyle={{ paddingRight: 30 }}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#239442'}
              selectedButtonColor='#239442'
              animation={true}
              style={styles.Radio}

            />

          </View>

          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Wetted Width (m):</Text>
            <TextInput placeholder="Wetted Width" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Sampling Distance (m):</Text>
            <TextInput placeholder="Sampling Distance" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Sampling Time:</Text>
            <TextInput placeholder="Sampling Time" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Max Depth (cm):</Text>
            <TextInput placeholder="Max Depth" style={styles.dateI} />
            
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Max Hydraulic Head (mm):</Text>
            <TextInput placeholder="Max Hydraulic Head" style={styles.dateI} />
          </View>
          <View style={styles.loginAs,(Platform.OS !== 'android' && {
                        zIndex: 2000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
            <Text style={styles.Fields}>Dominant Substrate:</Text>
            <DropDownPicker
                            items={[
                                { label: 'Clay (hard pan)', value: 'Clay (hard pan)' },
                                { label: 'Silt (floury, <0.06mm)', value: 'Silt (floury, <0.06mm)' },
                                { label: 'Sand (grainy, 0.06-2mm)', value: 'Sand (grainy, 0.06-2mm)' },
                                { label: 'Gravel (2-65mm)', value: 'Gravel (2-65mm)' },
                                { label: 'Cobble (65 - 250mm)', value: 'Cobble (65 - 250mm)' },
                                { label: 'Boulder (>250mm)', value: 'Boulder (>250mm)' },
                                { label: 'Bedrock', value: 'Bedrock' },



                            ]}
                            defaultValue={'Clay (hard pan)'}
                            containerStyle={{
                                height: 48,
                                paddingTop:10,
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
          <View style={styles.loginAs,(Platform.OS !== 'android' && {
                        zIndex: 1000, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
            <Text style={styles.Fields}>2nd Dominant Substrate:</Text>
            <DropDownPicker
                            items={[
                                { label: 'Clay (hard pan)', value: 'Clay (hard pan)' },
                                { label: 'Silt (floury, <0.06mm)', value: 'Silt (floury, <0.06mm)' },
                                { label: 'Sand (grainy, 0.06-2mm)', value: 'Sand (grainy, 0.06-2mm)' },
                                { label: 'Gravel (2-65mm)', value: 'Gravel (2-65mm)' },
                                { label: 'Cobble (65 - 250mm)', value: 'Cobble (65 - 250mm)' },
                                { label: 'Boulder (>250mm)', value: 'Boulder (>250mm)' },
                                { label: 'Bedrock', value: 'Bedrock' },



                            ]}
                            defaultValue={'Clay (hard pan)'}
                            containerStyle={{
                                height: 48,
                                paddingTop:10,
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
          <View style={styles.loginAs,(Platform.OS !== 'android' && {
                        zIndex: 500, paddingLeft: 10,
                        display: 'flex',
                        // flexDirection: 'row',
                        marginTop: 15,
                        marginBottom: 20,
                        justifyContent: 'space-evenly',
                    })}>
            <Text style={styles.Fields}>Subsampling Method:</Text>
            <DropDownPicker
                            items={[
                                { label: 'Bucket', value: 'Bucket' },
                                { label: 'Marchant', value: 'Marchant' },
                                { label: 'Other', value: 'Other' },
                                



                            ]}
                            defaultValue={'Bucket'}
                            containerStyle={{
                                height: 48,
                                paddingTop:10,
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
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Visual Aid:</Text>
            <RadioForm
              radio_props={radio2_props}
              initial={0}
              radioStyle={{ paddingRight: 30 }}
              formHorizontal={true}
              labelHorizontal={false}
              buttonColor={'#239442'}
              selectedButtonColor='#239442'
              animation={true}
              style={styles.Radio}

            />

          </View>
          
          
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Longitude:</Text>
            <TextInput placeholder="Longitude" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Latitude:</Text>
            <TextInput placeholder="Latitude" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Number of Samples Pooled (grabs/area):</Text>
            <TextInput placeholder="Samples Pooled" style={styles.dateI} />
          </View>
        </Form>
      </View>
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
            <View style={styles.App}>
                <Text style={styles.textContainer}>Pebble Count</Text>
                <Form style={styles.mainForm}>

                    <View style={styles.loginAs}>
                        <Text style={styles.FieldsN}>PC-1:  </Text>
                        <TextInput placeholder="Material" style={styles.Input} />
                        <TextInput placeholder="Size" style={styles.Input} />
                        <Text style={styles.FieldsN}>PC-2:  </Text>
                        <TextInput placeholder="Material" style={styles.Input} />
                        <TextInput placeholder="Size" style={styles.Input} />
                        <Text style={styles.FieldsN}>PC-3:  </Text>
                        <TextInput placeholder="Material" style={styles.Input} />
                        <TextInput placeholder="Size" style={styles.Input} />
                        <Text style={styles.FieldsN}>PC-4:  </Text>
                        <TextInput placeholder="Material" style={styles.Input} />
                        <TextInput placeholder="Size" style={styles.Input} />
                        <Text style={styles.FieldsN}>PC-5:  </Text>
                        <TextInput placeholder="Material" style={styles.Input} />
                        <TextInput placeholder="Size" style={styles.Input} />

                    </View>
                    <View style={styles.Button}>
                                <Button block style={styles.mainBtn} >
                                    <Text style={styles.btnText}>NEXT</Text>  
                                </Button>
                            </View>
                   
                    

                </Form>
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
    flex: 1,
    paddingRight:50

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
    marginTop:15,
    height: 37,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '95%'



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
  textContainer: {
    color: '#1C3962',
    fontFamily: 'Arial',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    paddingTop:15,
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
  FieldsN: {
    color: '#1C3962',
    fontSize: 17,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    alignSelf: 'auto',
    flexWrap: 'wrap',
    flex: 1,
    marginTop:15
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
export default CollectionArea2;

