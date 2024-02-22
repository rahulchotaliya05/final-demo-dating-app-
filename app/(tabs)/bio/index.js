import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'


export default function index() {
  const [options,setoptions]=useState("AD")
  const [description,setdescription]=useState("")
  const [hasgallerypermisson,sethasgallerypermission]=useState(null)
  const [image,setimage]=useState(null)

  useEffect(()=>{
(async()=>{
  const gallerystatus= await ImagePicker.requestMediaLibraryPermissionsAsync()
  sethasgallerypermission(gallerystatus.status === 'granted');
})()
  },[])
  const pickimgae=async()=>{
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })
    console.log(result)
    if(!result.canceled){
   setimage(result.assets.uri)
     console.log("iamge is", result.uri)
     
    }
  }
if(hasgallerypermisson=== false){
  return <Text>No Access to Storage</Text>
}
 
  return (
    <ScrollView>
    <View>
    <Image
  style={{ width: "100%", height: 200, resizeMode: "cover" }}
  source={{
    uri: "https://static.vecteezy.com/system/resources/thumbnails/018/977/074/original/animated-backgrounds-with-liquid-motion-graphic-background-cool-moving-animation-for-your-background-free-video.jpg",
  }}
/>

<View>
  <View>
  <Pressable style={{padding:10,backgroundColor:"#DDA0DD",width:300
, marginLeft:'auto',marginRight:'auto',justifyContent:'center',
alignItems:'center',borderRadius:10,position:'absolute',
top:-60,left:"50%",transform:[{translateX:-150}]}}>
    <Image style={{width:60,height:60,borderRadius:30,resizeMode:'cover'}}
    
    source={{
      uri:"data:image/jpeg;base64,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"
    }}
    />
 
 <Text style={{fontSize:16,fontWeight:'600',marginTop:6}}>Rahul Chotaliya</Text>

<Text style={{marginTop:4,fontSize:15}}> 22 years</Text> 
 </Pressable>

  
   
</View>
</View>
    </View>

    <View style={{marginTop:80,marginHorizontal:20,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:25}}>
      <Pressable onPress={()=>setoptions("AD")}>
        <Text style={{fontSize:16,fontWeight:'500',color:options==='AD' ? 'black' : 'gray'}}>AD</Text>
      </Pressable >
      <Pressable onPress={()=>setoptions("Photos")}>
        <Text style={{fontSize:16,fontWeight:'500',color:options==='Photos' ? 'black' : 'gray'}}>Photos</Text>
      </Pressable>
      <Pressable onPress={()=>setoptions("Turn-ons")}>
        <Text style={{fontSize:16,fontWeight:'500',color:options==='Turn-ons' ? 'black' : 'gray'}}>Turn-ons</Text>
      </Pressable>
      <Pressable onPress={()=>setoptions("Looking For")}>
        <Text style={{fontSize:16,fontWeight:'500',color:options==='Looking For' ? 'black' : 'gray'}}>Looking For</Text>
      </Pressable>
    </View>



    <View style={{marginHorizontal:14,marginVertical:15}}>
      {options ==='AD' && (
        <View 
        style={{
          borderColor:'#202020',
          borderWidth:1,
          padding:10, borderRadius:10, height:300
        }}
        >
          <TextInput 
          value={description}
          onChangeText={(text)=>setdescription(text)}
          style={{fontFamily:'Helvetica'}}
          placeholder='Write your AD for people to like you'
          />
          <Pressable style={{alignItems:'center',backgroundColor:"lightblue",
          justifyContent:'center',borderRadius:5,padding:10,marginTop:'auto'}}>
            <Text style={{color:'black',fontWeight:'600'}}>publish in feed</Text>
          </Pressable>
        </View>
      )}
    </View>



    <View style={{marginHorizontal:14}}>
{
  options==="Photos" && (
    <View>
   <Button title='pick Image' onPress={()=>pickimgae() }styles={{marginTop:38}} />
   {image && 
   <Image source={{url:image} } />}
      </View>
  )
}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})