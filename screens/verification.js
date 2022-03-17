import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


function Verification(props) {
    const [code, setcode] = useState('')
    return (
        <View>
            <Text>Enter OTP</Text>
            <TextInput style={styles.test} value={code} onChangeText={setcode} />
            <Button title='Submit' onPress={() => props.onSubmit(code)} />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center', alignItems: 'center'
    },
    test: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 7,
        width: '90%',
        marginLeft: 20, marginBottom: 20
    }, button: {
        width: '90%'
    }
})
export default Verification