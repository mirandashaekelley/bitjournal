import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';
import { useController, useForm } from 'react-hook-form';
//react-hook-form


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.journal}>
        <Text style={{color:'white', fontSize: 40}}>bitjournal</Text>
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
    <Button style={styles.button}title="Submit"  onPress={handleSubmit(onSubmit)}/>
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
    marginTop:50
  },
  loginContainer:{
    display: 'flex',
    flexDirection: 'row',
    
  
  },
  paragraph:{
    marginRight: 20
  },
  textinput:{
    backgroundColor: '#fff',
    width: 100,

  }


});
