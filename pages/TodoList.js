import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskApp from '../components/TaskPage';

export default function TodoListFunction(){
    return(
        <View style={styles.container}>
            <View style={styles.todo}>
                <Text style={{color:'white', fontSize: 25,marginTop: 30}}>Today's Tasks</Text>
                <View style={styles.todolist}>
                    <TaskApp text={'Task 1'}/>
                    <TaskApp text={'Task 2'}/>
                </View>
            </View>
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
    todo:{
        height:700,
        width: 350,
        backgroundColor: '#e2856e',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        marginTop: 40
      }
});