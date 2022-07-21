import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {

  const dispatch=useDispatch()
  const navigation=useNavigation()
    const[userName,setUserName]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
  
    const handleSubmit=async()=>{
        console.log(userName,firstName,lastName)
        const payload={userName,firstName,lastName}
        dispatch({type:"PUT_DETAILS_REQUEST",payload:payload})
      navigation.navigate('Home')
      }

  return (
    <SafeAreaView style={{
      flex:1
    }}>
  <View
    style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }}
    >
      
      <TextInput
      placeholder='Username'
      value={userName}
      style={{
          width:'70%',
          borderRadius:10,
          
          borderColor:'grey',
          borderWidth:1,
          padding:10,
          marginBottom:10
          
      }}
      onChangeText ={(val)=>setUserName(val)}
      />
      <TextInput
      placeholder='Firstname'
      value={firstName}
      style={{
          width:'70%',
          borderRadius:10,
          
          borderColor:'grey',
          borderWidth:1,
          padding:10,
          marginBottom:10
          
      }}
      onChangeText ={(val)=>setFirstName(val)}
      />
      <TextInput
      placeholder='Lastname'
      value={lastName}
      style={{
          width:'70%',
          borderRadius:10,
          
          borderColor:'grey',
          borderWidth:1,
          padding:10,
          marginBottom:10
          
      }}
      
      onChangeText={(val)=>setLastName(val)}
      />
           <TouchableOpacity
      style={{
        backgroundColor:'orange',
        padding:10, 
        width:'50%',
        borderRadius:10,
      }}
      onPress={handleSubmit}
      
      >
        <Text style={{color:'white',fontSize:15,textAlign:'center'}}>
            submit
        </Text>
      </TouchableOpacity>
    </View>

    </SafeAreaView>
  
  )
}

export default SignUp