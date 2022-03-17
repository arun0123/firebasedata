import React from "react";
import {View,StyleSheet,Text,Alert} from 'react-native'
import database from '@react-native-firebase/database'
import { TextInput, TouchableHighlight ,} from "react-native";
import {useState } from 'react'
let additem=item=>{
  database().ref('/Items').push({
      name:item
  })

}
function Additem(){
 const [name,setname]=useState('');
    const handsubmit=()=>{
        additem(name);
        setname('');
        Alert.alert('item saved successfully')
  
    }
    return(
        <View style={styles.container}> 
        <Text style={styles.title}>Additem</Text>
        <TextInput style={styles.iteminput} value={name} onChangeText={(text)=>{setname(text)}}/>
        <TouchableHighlight onPress={handsubmit} >
            <Text style={styles.text} >test</Text></TouchableHighlight>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',flexDirection:'column',backgroundColor:'green'
    },title:{
        marginBottom:28,
        fontSize:25,textAlign:'center'
    },iteminput:{
        height:45,
        padding:13,
        margin:19,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,color:'white'
    },text:{
        fontSize:10,
        color:'white'
    }

})
export default Additem