import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity} from 'react-native';
import { useController, useForm } from 'react-hook-form';
//react-hook-form
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.journal}>
        <Text style={{color:'white', fontSize: 40, marginTop: -100}}>bitjournal</Text>
        <Form/>
      <StatusBar style="auto" />
      </View>
      
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
  paragraph:{
    
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
  touchableColor:{
    color: '#fff'
  }


});
// Color
// {"Aero":"8cbee7","Light Sky Blue":"9ad1fe","Opal":"b3d0cf","Alabaster":"e0e7da","Jasmine":"fede85","Mellow Apricot":"fbc789","Tumbleweed":"efa67c","Middle Red":"e2856e","Pastel Pink":"efafaa","Thistle":"e1c9e3"}
