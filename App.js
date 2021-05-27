import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity} from 'react-native';
import { useController, useForm } from 'react-hook-form';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';
import TodoListFunction from './pages/TodoList';
//npm i {important to download or it won't work}
//install react-hook-form
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//https://swapi.dev/api/
//npm install --save react-native-calendars
//npm install @react-navigation/native
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
const Stack = createStackNavigator();
//navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={FrontPage}/>
        <Stack.Screen name="Navigation" component={NavigationPage}/>
        <Stack.Screen name="Clock" component={ClockPage}/>
        <Stack.Screen name="Calendar" component={CalendarPage}/>
        <Stack.Screen name="Todo" component={TodoPage}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//Front Page and it's functions/events
function FrontPage ({navigation}){
  return(
  <View style={styles.container}>
  <View style={styles.journal}>
    <Text style={{
      color:'white',
      fontSize: 40, 
      marginTop: -100
      }}>bitjournal</Text>
    <Form/>
    <TouchableOpacity style={styles.touchable}title="Submit"  onPress={() => navigation.navigate('Navigation')}>
      <Text style={styles.touchableColor}>Next</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View></View>
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
        <Text style={{color:'white', fontSize: 20}}>username: </Text>
        <TextInput style={styles.textinput} name="username" control={control}/>
      </View>
      <View style={styles.loginContainer}>
        <Text style={{color:'white', fontSize: 20}}>password: </Text>
        <TextInput style={styles.textinput} name="password" control={control}/>
      </View>
    <TouchableOpacity style={styles.touchable}title="Submit"  onPress={handleSubmit(onSubmit)}>
      <Text style={styles.touchableColor}>Login</Text>
    </TouchableOpacity>
    </View>
  );
}
//Navigation
function NavigationPage({navigation}) {
  let currentDay = moment().format('dddd');
  currentDay = currentDay.toLowerCase();
  let currentDate = moment().format('ll');
  currentDate = currentDate.toLowerCase();
  let currentTime = moment().format('LT'); 


  return(
  <View style={styles.container}>
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
      <TouchableOpacity style={styles.touchable}title="Submit" onPress={() => navigation.navigate('Calendar')}>
        <Text style={styles.touchableColor}>calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}title="Submit" onPress={() => navigation.navigate('Clock')}>
        <Text style={styles.touchableColor}>timer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}title="Submit"onPress={() => navigation.navigate('Todo')}>
        <Text style={styles.touchableColor}>Todo List</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  </View>
  </View>
  );
  
}
const ClockPage = () =>{
  const [time, setTime] = useState({ms: 0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  };
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  
  const run = () =>{
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms: updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  const stop = () =>{
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () =>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms: 0, s:0, m:0, h:0});
  };
  return(
    <View style={styles.container}>
    <View style={styles.clock}>
      <DisplayComponent time={time}/>
      <BtnComponent status={status} stop={stop} start={start} reset={reset}/>
    </View>
    </View>
    );
}
function DisplayComponent(props){
  return(
    <View style={{display:'flex', flexDirection:'row', marginTop: 200}}>
    <Text style={{color: 'white', fontSize: 40}}>{(props.time.h >= 10)? props.time.h : "0" + props.time.h}:</Text>
    <Text style={{color: 'white', fontSize: 40}}>{(props.time.m >= 10)? props.time.m : "0" + props.time.h}:</Text>
    <Text style={{color: 'white', fontSize: 40}}>{(props.time.h >= 10)? props.time.s : "0" + props.time.s}:</Text>
    <Text style={{color: 'white', fontSize: 40}}>{(props.time.h >= 10)? props.time.ms : "0" + props.time.ms}</Text>
    </View>
  );
}
function BtnComponent(props){
  return(
    <View style={{marginTop: 40}}>
    
      <TouchableOpacity style={styles.touchableGreen}title="Submit" onPress={props.start}>
        <Text style={styles.touchableColor} >start</Text>
      </TouchableOpacity>
  
    
    <TouchableOpacity style={styles.touchable}title="Submit" onPress={props.stop}>
      <Text style={styles.touchableColor} >stop</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchableBlue}title="Submit" onPress={props.reset}>
      <Text style={styles.touchableColor} >reset</Text>
    </TouchableOpacity>
  </View>
  );
}

const CalendarPage = () =>{
 let currentDate = moment().format();
  return(
  <View style={styles.container}>
    <View style={styles.calendar}>
      <CalendarList style={{height: 300}}
      horizontal={true}
      calendarWidth={350}
      showScrollIndicator={true}
      pagingEnabled={true}
      onDayPress={(day)=>{console.log('day pressed')}}
      />
     
    </View>
    </View>
    );
}

function TodoPage(){
  return(
    <View styles={styles.container}>
        <TodoListFunction/>   
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flex:1,
    alignItems:'center', 
    backgroundColor: '#FEDE85',

  },
  journal: {
    height:700,
    width: 350,
    backgroundColor: '#9AD1FE',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 40
    
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
    alignItems: 'center',
    marginTop: 40
  },
  clock:{
      height:700,
      width: 350,
      backgroundColor: '#e0e7da',
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center',
      marginTop: 40
  },
  calendar:{
      height:700,
      width: 350,
      backgroundColor: '#e2856e',
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center',
      marginTop: 40
  },
  todo:{
    height:700,
    width: 350,
    backgroundColor: '#e2856e',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    marginTop: 40
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
