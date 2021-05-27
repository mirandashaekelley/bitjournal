import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const TaskApp = (props) => {
    return(
        <View style={{}}>
        <View style={styles.item}>
            <View style={styles.checkbox}>
                <View style={styles.square}></View>
             <Text style={{color: 'black'}}>{props.text}</Text>
             </View>
           
            <View style={styles.circular}></View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
item:{
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    width: 250,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'

},
checkbox:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
square:{
    width: 24,
    height: 24,
    backgroundColor: '#b3d0cf',
    borderRadius: 8,
    opacity: 0.4,
    marginRight: 15

},
circular:{
    width: 12,
    height:12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#b3d0cf'
}

});

export default TaskApp;