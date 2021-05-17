import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity} from 'react-native';
import { useController, useForm } from 'react-hook-form';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';

//npm i {important to download or it won't work}
//install react-hook-form
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//npm install @react-navigation/native @react-navigation/stack
//https://swapi.dev/api/
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <FrontPage/>
      
    </View>
    </NavigationContainer>
  );
}
const FrontPage = () => {
  return(
  
  <View style={styles.journal}>
  <Text style={{color:'white', fontSize: 40, marginTop: -100}}>bitjournal</Text>
  <Form/>
  <StatusBar style="auto" />
  </View>
  );
  
}
const Input = ({name, control}) => {
   const {field} = useController({
      control,
      defaultValue: '',
      name,
   })
   return(
     <TextInput value ={field.value} onChangeText={field.onChange} style={styles.input}/>
   );
 };
 function Form() {
  const {control, handleSubmit} = useForm();
  const onSubmit = (data) => Alert.alert
  (JSON.stringify(data));
  
  return (
    <View style={styles.loginform}>
      <View style={styles.loginContainer}> 
        <Text style={styles.paragraph}>username: </Text>
        <TextInput style={styles.textinput} name="username" control={control}/>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.paragraph}>password: </Text>
        <TextInput style={styles.textinput} name="password" control={control}/>
      </View>
    <TouchableOpacity style={styles.touchable}title="Submit"  onPress={handleSubmit(onSubmit)}>
      <Text style={styles.touchableColor}>Login</Text>
    </TouchableOpacity>
    </View>
  );
}

const NavigationPage = () => {
  let currentDay = moment().format('dddd');
  currentDay = currentDay.toLowerCase();
  let currentDate = moment().format('ll');
  currentDate = currentDate.toLowerCase();
  let currentTime = moment().format('LT'); 


  return(
  <View style={styles.navigation}>
  <Text style={{color:'white', fontSize: 25,marginTop: 30}}>good afternoon, neumont</Text>
  <Text style={{color: 'white', fontSize: 25, marginTop: 10}}>{currentDay}, {currentDate} </Text>
  <Text style={{color: 'white', fontSize: 25, marginTop: 10}}>{currentTime}</Text>
  <Text style={{color: 'white', fontSize: 25, marginTop: 50}}>what would you</Text> 
  <Text style={{color: 'white', fontSize: 25}}>like to do?</Text>
  <View style={{marginTop: 40}}>
    <TouchableOpacity style={styles.touchable}title="Submit" >
      <Text style={styles.touchableColor}>journal</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchable}title="Submit">
      <Text style={styles.touchableColor}>calendar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchable}title="Submit">
      <Text style={styles.touchableColor}>alarm/clock</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchable}title="Submit">
      <Text style={styles.touchableColor}>relax</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View>
  </View>
  );
  
}
const ClockPage = () =>{
  let currentTime = moment().format('LTS');
  return(
  
    <View style={styles.clock}>
      <Text style={{color:'white', fontSize: 50,marginTop: 225}}>{currentTime}</Text>
      <View style={{marginTop: 40}}>
        <TouchableOpacity style={styles.touchableGreen}title="Submit" >
          <Text style={styles.touchableColor}>start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}title="Submit">
          <Text style={styles.touchableColor}>stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableBlue}title="Submit">
          <Text style={styles.touchableColor}>pause</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}
const CalendarPage = () =>{
  return(
  
    <View style={styles.calendar}>
      
     
    </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEDE85',
    alignItems: 'center',
    justifyContent: 'center',
  },
  journal: {
    height:700,
    width: 350,
    backgroundColor: '#9AD1FE',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    
  },
  loginform:{
    marginTop:30,
    display: 'flex',
    margin: 10,
  },
  loginContainer:{
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },
  textinput:{
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 10,
    alignSelf: 'stretch',
    marginLeft: 'auto',
    borderColor: '#B3D0CF',
    borderWidth: 2
  }, 
   navigation:{
    height:700,
    width: 350,
    backgroundColor: '#9AD1FE',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center'
  },
  clock:{
      height:700,
      width: 350,
      backgroundColor: '#e0e7da',
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center'
  },
  calendar:{
      height:700,
      width: 350,
      backgroundColor: '#e2856e',
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center'
  },
  touchable:{
    backgroundColor: '#e2856e',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 100,
    borderRadius: 13,
    alignSelf: 'center',
    marginTop: 10,
},
touchableGreen:{
  backgroundColor: '#b3d0cf',
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  width: 100,
  borderRadius: 13,
  alignSelf: 'center',
  marginTop: 10,
},
touchableBlue:{
  backgroundColor: '#9ad1fe',
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  width: 100,
  borderRadius: 13,
  alignSelf: 'center',
  marginTop: 10,
},

  touchableColor:{
    color: '#fff'
  }


});
// Color
// {"Aero":"8cbee7","Light Sky Blue":"9ad1fe","Opal":"b3d0cf","Alabaster":"e0e7da","Jasmine":"fede85","Mellow Apricot":"fbc789","Tumbleweed":"efa67c","Middle Red":"e2856e","Pastel Pink":"efafaa","Thistle":"e1c9e3"}
