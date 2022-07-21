import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Provider, useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const dispatch=useDispatch()
  const count=useSelector(state=>state.mainReducer.count)
  console.log("count",count)
  return (

  <View
    style={{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    }}
    >
      <TouchableOpacity
      style={{
        backgroundColor:'skyblue',
        padding:30, 
        borderRadius:10,
      }}
      onPress={()=>dispatch({type:'INCREMENT_REQUEST'})}
      
      >
        <Text style={{color:'white',fontSize:30}}>+</Text>
      </TouchableOpacity>
      <Text style={{padding:10,fontSize:20}}>
      {count}
        </Text>
      <TouchableOpacity style={{
        backgroundColor:'skyblue',
        padding:30,
        borderRadius:10,
      }}
      onPress={()=>dispatch({type:'DECREMENT_REQUEST'})}
      >
        <Text style={{color:'white',fontSize:30}} >-</Text>
      </TouchableOpacity>
    </View>
  
  )
}

export default Counter