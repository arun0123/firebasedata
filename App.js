import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home'
import Additem from './screens/Additem'
import List from './screens/List'
import Login from './screens/Login'
import mobilelogin from './screens/mobilelogin'

 const stack=createStackNavigator()
function App(){
  return(<NavigationContainer>
    <stack.Navigator>
      <stack.Screen name='login' component={mobilelogin}/>
      {/* <stack.Screen name='Login' component={Login}/> */}
      <stack.Screen name='home' component={Home}/>
      <stack.Screen name='Additem' component={Additem}/>
      <stack.Screen name='LIST' component={List}/>

    </stack.Navigator>
    

  </NavigationContainer>

  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',alignItems:'center'
  }
})
export default App