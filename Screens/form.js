import React from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Form, Item, Input, Body, Text, CheckBox, Button } from 'native-base';


import DatePicker from 'react-native-datepicker'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


var radio_props = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 }
];



const LotsOfStyles = () => {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
      <Text style={styles.Heading}>NVCA Watershed Science Data​</Text>
      <View style={styles.App}>
        <Text style={styles.textContainer}>OBBN Field Sheet</Text>
        <Form style={styles.mainForm}>

          <View style={styles.loginAs}>
            <Text style={styles.loginText}>Site Code:  </Text>
            <TextInput placeholder="Site Code" style={styles.Input} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.loginText}>Site Name:  </Text>
            <TextInput placeholder="Site Name" style={styles.Input} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.loginText}>Agency:    </Text>
            <TextInput placeholder="Agency" style={styles.Input} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Sampling Event Date:</Text>
            <DatePicker style={styles.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2030-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  width: 25,
                  height: 25,
                  left: -2,
                  top: 0,
                  marginRight: 10
                },

                dateInput: {

                  borderRadius: 5,
                  borderColor: 'black',
                  height: 28,
                  fontSize: 17,
                  marginRight: 20,


                }
              }}
              onDateChange={(date) => { this.setState({ date: date }) }} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Coordinates/Lat/Long:</Text>
            <TextInput placeholder="Coordinates" style={styles.dateI} />
          </View>
        </Form>
      </View>
      <View style={styles.App}>
        <Text style={styles.textContainer}>SITE CREATOR</Text>
        <Form style={styles.mainForm}>
          <View style={styles.loginAs}>
            <Text style={styles.loginText}>Elevation(m): </Text>
            <TextInput placeholder="Elevation" style={styles.Input} keyboardType="numeric" />

          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Candidate Reference site:</Text>
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
        </Form>
      </View>
      <View style={styles.App}>
        <Text style={styles.textContainer}>SAMPLING EVENT</Text>
        <Form style={styles.mainForm}>

          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Gear Type:  </Text>
            <TextInput placeholder="Site Name" style={styles.dateI} />
            
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Collection Method:  </Text>
            <TextInput placeholder="Site Name" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Mesh Size:    </Text>
            <TextInput placeholder="Agency" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>River Permanence:</Text>
            <TextInput placeholder="Coordinates" style={styles.dateI} />
            
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Bank Full Width:</Text>
            <TextInput placeholder="Coordinates" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>% Canopy Cover:</Text>
            <TextInput placeholder="Coordinates" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Time Of Day:</Text>
            <TextInput placeholder="Coordinates" style={styles.dateI} />
          </View>
          <View style={styles.loginAs}>
            <Text style={styles.Fields}>Event Comment:</Text>
            <TextInput placeholder="Coordinates" style={styles.dateI} />
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
    flex: 1

  },
  date: {
    width: 200,


  },
  dateI: {
    borderRadius: 5,
    borderColor: 'black',
    height: 28,
    borderWidth: 1,
    fontSize: 17,
    width: '55%',
    marginRight: 20,


  },
  loginAs: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'space-evenly'
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
  textContainer: {
    color: '#1C3962',
    fontFamily: 'Arial',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '0%',
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

export default LotsOfStyles;

