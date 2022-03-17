import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native'
import Additem from "./Additem";
import List from "./List";

function Home({navigation}){
    return(
        <View style={styles.container}> 
        <Text>test</Text>
        <Button title='Additem' onPress={()=>navigation.navigate('Additem')} >

        </Button>
        <Button title='list' onPress={()=>navigation.navigate('LIST')} />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',alignItems:'center'
    }
})
export default Home