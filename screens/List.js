import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import database from '@react-native-firebase/database'


let itemref = database().ref('/Items')
function List() {
    const [itemarray, setitemarray] = useState([])
    useEffect(() => {
        itemref.on('value', snapshot => {
            let data = snapshot.val();
            const items = Object.values(data);
            setitemarray(items)
        })

    }, [])
    return (
        <ScrollView style={styles.container}>
            {(itemarray.length > 0)
                ?
                <View style={styles.list}>{itemarray.map((item, index) => {
                    return (
                        <Text style={styles.text}>{item.name}</Text>
                    )
                })}
                </View>
                :
                <Text>ITEM NOT FOUND</Text>


            }

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        color: 'yellow',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center'
    },
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around', alignItems: 'center'


    }

})
export default List