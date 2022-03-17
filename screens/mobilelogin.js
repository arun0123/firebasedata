import React,{useState} from 'react'
import {View,Text,StyleSheet,Alert} from 'react-native'
import Mobilenumberenter from './mobilenumberenter'
import Verification from './verification';
import auth from '@react-native-firebase/auth'


function Mobilelogin({navigation}){
    const [confirm,setconfirm]=useState(null);
  const   mobilelogin=async(phonenum)=>{
      console.log('res',phonenum)
    auth().signInWithPhoneNumber('+91'+phonenum).then((res)=>{
        console.log('response is',res)
        setconfirm(res)
    }).catch((error)=>{
        console.log('error is',error)
        Alert.alert('invalid phonenumber')

    })

     }
     const confirmverification=async(code)=>{
         try{
              await confirm.confirm(code)
            }
          catch(error){
              Alert.alert('invalid code')
          }  
         
         auth().onAuthStateChanged((user)=>{
             if(user){
                 setconfirm(null);
                 navigation.navigate('home')
             }
             else{
                 if(confirm)
                setconfirm(null)
             }
         })


     }


 if(confirm) return <Verification onSubmit={confirmverification}/>
 
 return <Mobilenumberenter onSubmit={mobilelogin} />

}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',alignItems:'center'
  }
})
export default Mobilelogin