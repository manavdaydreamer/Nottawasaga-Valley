import React,{ Component} from 'react';
import { StyleSheet, View, TextInput, ScrollView, Alert} from 'react-native';
import { Form, Item, Input, Body, Text, CheckBox, Button } from 'native-base';
import DatePicker from 'react-native-datepicker'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
import { Actions} from 'react-native-router-flux';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("db.db");









var radio_props = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 }
];




class Form2 extends Component {
  siteData;
  constructor(props) {
    super(props);
    
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sites_info (id INTEGER PRIMARY KEY AUTOINCREMENT, site_code VARCHAR(20), site_name VARCHAR(20), agency VARCHAR(20), samplingDate DATE, coordinates VARCHAR(20), elevation VARCHAR(20))",[]
      );
    });
    this.state = {
      site_code: "",
      site_name: "",
      agency: "",
      coordinates: "",
      samplingDate: "",
      elevation:"",
      gear: "selectgear",
      CollectionM: "SelectCollectionMethod",
      mesh: "SelectMeshSize"

    }
    addSite =(site_code,site_name,agency,samplingDate,coordinates,elevation) =>{
      if (site_code === "" ||site_name === "" || agency ==="" || samplingDate ==="" || coordinates ==="" || elevation === ""){
        console.log("No values inserted")
        return false;
      }
      db.transaction(tx =>{
        tx.executeSql(
          'INSERT INTO sites_info (site_code, site_name, agency ,samplingDate,coordinates,elevation) VALUES (?,?,?,?,?,?)',[this.state.site_code,this.state.site_name,this.state.agency,this.state.samplingDate,this.state.coordinates,this.state.elevation]);
        tx.executeSql("select * from sites_info", [], (_, { rows }) =>
          console.log(JSON.stringify(rows)));
          
      });


    }

    };
 
  render() {

    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
        <Text style={styles.Heading}>NVCA Watershed Science Data​</Text>
        <View style={styles.App}>
          <Text style={styles.textContainer}>OBBN Field Sheet</Text>
          <Form style={styles.mainForm}>

            <View style={styles.loginAs}>
              <Text style={styles.loginText}>Site Code:  </Text>
              <TextInput placeholder="Site Code" style={styles.Input}
                onChangeText={site_code => this.setState({ site_code })}
                value={this.state.site_code} />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}
            </View>
            <View style={styles.loginAs}>
              <Text style={styles.loginText}>Site Name:  </Text>
              <TextInput placeholder="Site Name" style={styles.Input}
                onChangeText={site_name => this.setState({ site_name })}
                value={this.state.site_name} />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}
            </View>
            <View style={styles.loginAs}>
              <Text style={styles.loginText}>Agency:    </Text>
              <TextInput placeholder="Agency" style={styles.Input} onChangeText={agency => this.setState({ agency })}
                value={this.state.agency} />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}
            </View>
            <View style={styles.loginAs}>
              <Text style={styles.Fields}>Sampling Event Date:</Text>
              <DatePicker style={styles.date}
                date={this.state.samplingDate}
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
                onDateChange={samplingDate => this.setState({ samplingDate })}
                
                value={this.state.samplingDate} />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}
            </View>
            <View style={styles.loginAs}>
              <Text style={styles.Fields}>Coordinates/Lat/Long:</Text>
              <TextInput placeholder="Coordinates" style={styles.Input}
                onChangeText={coordinates => this.setState({ coordinates })}
                value={this.state.coordinates} />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}
            </View>
          </Form>
        </View>
        <View style={styles.App}>
          <Text style={styles.textContainer}>SITE CREATOR</Text>
          <Form style={styles.mainForm}>
            <View style={styles.loginAs}>
              <Text style={styles.loginText}>Elevation(m): </Text>
              <TextInput placeholder="Elevation" style={styles.Input} keyboardType="numeric" 
              value={this.state.elevation} onChangeText={elevation => this.setState({ elevation })}/>

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

            <View style={styles.loginAs, (Platform.OS !== 'android' && {
              zIndex: 5000, paddingLeft: 15,
              display: 'flex',
              marginTop: 15,
              marginBottom: 20,
              justifyContent: 'space-evenly',
            })}  >
              <Text style={styles.Fields}>Gear Type:  </Text>
              <DropDownPicker
                items={[
                  { label: 'Select Gear type', value: 'selectgear' },
                  { label: 'D-net', value: 'D-net' },
                  { label: 'Ponar Grab', value: 'Ponar Grab' },
                  { label: 'Ekman Dredge', value: 'Ekman Dredge' },
                  { label: 'Unknown/Other', value: 'Unknown/Other' },


                ]}
                defaultValue={this.state.gear}
                containerStyle={{
                  height: 48,
                  paddingTop: 10,
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
                onChangeItem={item => this.setState({
                  gear: item.value
                })}

              />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}

            </View>
            <View style={styles.loginAs, (Platform.OS !== 'android' && {
              zIndex: 4000, paddingLeft: 15,
              display: 'flex',
              marginTop: 15,
              marginBottom: 20,
              justifyContent: 'space-evenly',
            })}>
              <Text style={styles.Fields}>Collection Method:  </Text>
              <DropDownPicker
                items={[
                  { label: 'Select Collection Method', value: 'SelectCollectionMethod' },
                  { label: 'OBBN Kick & Sweep', value: 'OBBN Kick & Sweep' },
                  { label: 'CABIN Kick & Sweep', value: 'CABIN Kick & Sweep' },
                  { label: 'Grab', value: 'Grab' },
                  { label: 'Other', value: 'Other' },


                ]}
                defaultValue={this.state.CollectionM}
                containerStyle={{
                  height: 48,
                  paddingTop: 10,
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
                onChangeItem={item => this.setState({
                  CollectionM: item.value
                })} />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}
            </View>
            <View style={styles.loginAs, (Platform.OS !== 'android' && {
              zIndex: 3000, paddingLeft: 15,
              display: 'flex',
              marginTop: 15,
              marginBottom: 20,
              justifyContent: 'space-evenly',
            })}>
              <Text style={styles.Fields}>Mesh Size:    </Text>
              <DropDownPicker
                items={[
                  { label: 'Select Mesh Size', value: 'SelectMeshSize' },
                  { label: '500 micron', value: '500 micron' },
                  { label: '400 micron', value: '400 micron' },
                  { label: 'N/A', value: 'N/A' },



                ]}
                defaultValue={this.state.mesh}
                containerStyle={{
                  height: 48,
                  paddingTop: 10,
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
                onChangeItem={item => this.setState({
                  mesh: item.value
                })}

              />
              {!!this.state.nameError && (
                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
              )}
            </View>
            <View style={styles.loginAs, (Platform.OS !== 'android' && {
              zIndex: 2000, paddingLeft: 15,
              display: 'flex',
              // flexDirection: 'row',
              marginTop: 15,
              marginBottom: 20,
              justifyContent: 'space-evenly',
            })}>
              <Text style={styles.Fields}>River Permanence:</Text>
              <DropDownPicker
                items={[
                  { label: 'Select River Permanence', value: 'Select River Permanence' },
                  { label: 'Intermittent', value: 'Intermittent' },
                  { label: 'Perennial', value: 'Perennial' },
                  { label: 'Pumped Drain', value: 'Pumped Drain' },
                  { label: 'Unknown', value: 'Unknown' },


                ]}
                defaultValue={'Select River Permanence'}
                containerStyle={{
                  height: 48,
                  paddingTop: 10,


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
              <Text style={styles.Fields}>Bank Full Width(m):</Text>
              <TextInput placeholder="Bank Full Width" style={styles.Input} />
            </View>
            <View style={styles.loginAs, (Platform.OS !== 'android' && {
              zIndex: 1000, paddingLeft: 15,
              display: 'flex',
              // flexDirection: 'row',
              marginTop: 15,
              marginBottom: 20,
              justifyContent: 'space-evenly',
            })}>
              <Text style={styles.Fields}>% Canopy Cover:</Text>
              <DropDownPicker
                items={[
                  { label: 'Select Canopy Cover', value: 'Select Canopy Cover' },
                  { label: '0-25', value: '0-25' },
                  { label: '26-50', value: '26-50' },
                  { label: '51-75', value: '51-75' },
                  { label: '76-100', value: '76-100' },


                ]}
                defaultValue={'Select Canopy Cover'}
                containerStyle={{
                  height: 48,
                  paddingTop: 10,

                }}
                style={{ backgroundColor: 'white', width: 350, marginRight: 20, borderColor: 'black', }}
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
              <Text style={styles.Fields}>Time Of Day:</Text>
              <TextInput placeholder="Enter Time" style={styles.Input} />
            </View>
            <View style={styles.loginAs}>
              <Text style={styles.Fields}>Event Comment:</Text>
              <TextInput placeholder="Enter Comment" style={styles.Input} />
            </View>
          </Form>

        </View>
        <View style={styles.Button}>
          <Button block style={styles.mainBtn} onPress={() => {
            if (this.state.site_code.trim() === "" || this.state.site_name.trim() === "" || this.state.agency.trim() === "" || this.state.samplingDate.trim() === "" || this.state.coordinates.trim() === "" || this.state.gear.trim() === "selectgear" || this.state.CollectionM.trim()==="SelectCollectionMethod" || this.state.mesh.trim()==="SelectMeshSize") {
              this.setState(() => ({ nameError: "* required" }));
              alert('Please enter the missing required fields');

            } else {
              this.setState(() => ({ nameError: null }));
              addSite();
              Actions.replace('formo2')
              
              
            }
          }}>
            <Text style={styles.btnText}>Next</Text>
          </Button>
        </View>
        
          
      </ScrollView >
    );
  }
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
    fontSize: 20,
    textAlign: 'left'


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
    paddingLeft: 15,
    display: 'flex',
    marginBottom: 20,
    justifyContent: 'center',


  },
  Input: {
    fontFamily: 'Arial',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    width: '98%',
    height: 34,
    justifyContent: 'center'



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

});

export default Form2;

