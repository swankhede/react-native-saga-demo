import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const DetailsScreen = ({route}) => {
  const {data}=route.params
  console.log("data",data)

  return (
    <SafeAreaView style={{flex:1}}>

<View
    style={{
        flex:1,

      
    }}
    >
        <Text
        
        style={{
            padding:10,
            backgroundColor:'white',
            color:'grey'
        }}
        >Username</Text>
     <Text
     style={{
        padding:10,
        backgroundColor:'white',
    }}
     >{data.userName}</Text>
     <Text
     style={{
        padding:10,
        backgroundColor:'white',
        color:'grey'
    }}>First Name</Text>
     <Text 
     style={{
        padding:10,
        backgroundColor:'white',
        
    }}
     
     >{data.firstName}</Text>
     <Text
     style={{
        padding:10,
        backgroundColor:'white',
        color:'grey'
    }}
     
     >Last Name </Text>
     <Text
     style={{
        padding:10,
        backgroundColor:'white',
       
    }}
     
     >{data.lastName}</Text>



    </View>

    </SafeAreaView>
 
  )
}

export default DetailsScreen