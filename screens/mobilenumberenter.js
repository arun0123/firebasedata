import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

function Mobilenumberenter(props) {
  const [phonenum, setphonenumber] = useState('')
  return (
    <View>
      <Text>Enter Mobile number</Text>
      <TextInput style={{
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        backgroundColor: 'white'
      }} value={phonenum} onChangeText={setphonenumber} />
      <Button title='Enter OTP' onpress={() => props.onSubmit(phonenum)} />
    </View>
  )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
  }
})
export default Mobilenumberenter