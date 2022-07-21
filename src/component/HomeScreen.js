import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const state=useSelector(state=>state)
    const {data}= state.detailsReducer
    console.log("data",data)
    const navigation=useNavigation()
    const dispatch=useDispatch()

    const handleClearStorage=()=>{
      dispatch({type:'CLEAR_STORAGE'})
    }

  return (
    <SafeAreaView style={{flex:1}}>

<View
    style={{
        flex:1,

      
    }}
    >
     <FlatList
     data={data}
     keyExtractor={item=>item}
     renderItem={(render)=>
      <TouchableOpacity style={{
        padding:10,
        backgroundColor:'white',
        

      }}
      onPress={()=>navigation.navigate('Details',{data:render.item})}
    
      >
        <Text>{render.item.userName}</Text>
      </TouchableOpacity>
    
    }
    />
    <TouchableOpacity style={{
      padding:10,
      backgroundColor:'orange',
      alignItems:'center',
      justifyContent:'center',
      

    }}
    onPress={handleClearStorage}
  
    >
      <Text>Clear store</Text>
    </TouchableOpacity>
     
     
     
   

      

    </View>

    </SafeAreaView>
 
  )
}

export default HomeScreen