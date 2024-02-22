import { SafeAreaView, StyleSheet, Text, View ,Image, KeyboardAvoidingView, TextInput, Pressable, Alert, ImageBackground} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { AntDesign,Ionicons } from "@expo/vector-icons";
import axios from"axios"
import * as bcrypt from 'bcryptjs';
export default function register() {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    // const handleRegister=async()=>{
    // //   const user={
    // //     name:name,
    // //     email:email,
    // //     password: await bcrypt.hash(password, 10)
    // //   }
    // //   try {
    // //     const response = await axios.post("http://localhost:3000/users/register", user);
    // //     console.log('Registration successful:', response.data);
    // //   } catch (error) {
    // //     console.error('Error registering user:', error.response.data);
    // //   }
      
    // }
    const router=useRouter()
  return (
  <SafeAreaView style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
   
    <View style={{height:200,backgroundColor:'pink',width:'100%'}} >
        <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
        <Image
    style={{ width: 100, height: 80, resizeMode: "cover" }}
    source={{
      uri: "https://cdn-icons-png.flaticon.com/128/6655/6655045.png"
    }}
  />
        </View>
        <Text 
        style={{marginTop:20,textAlign:'center',
        fontSize:20}}
        >Match Mate</Text>

    </View>


    <View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:50,marginLeft:50}}>
      
<Text 
style={{fontSize:17,fontWeight:'700',
color:'dark',marginTop:20}}>
                create an Account
            </Text>
        </View>
  
  <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
  <Image
    style={{ width: 100, height: 50, resizeMode: "cover" }}
    source={{
      uri: "https://cdn-icons-png.flaticon.com/128/2509/2509078.png",
    }}
  />
  </View>

  <View style={{ marginTop: 20 }}>

  <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFC0CB",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Ionicons name="person" size={24} color="white" style={{marginLeft:8}} />
            <TextInput
            value={name}
            onChangeText={(text) => setname(text)}
        
              placeholder="Enter Your Name"
              placeholderTextColor={"white"}
              style={{
                color: "black",
                marginVertical: 10,
                width: 250,
                fontSize:  17,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFC0CB",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="white"
            />
            <TextInput
            value={email}
            onChangeText={(text) => setemail(text)}
        
              placeholder="Enter your email"
              placeholderTextColor={"white"}
              style={{
                color: "black",
                marginVertical: 10,
                width: 250,
                fontSize:  17,
              }}
            />
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#FFC0CB",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <AntDesign
                style={{ marginLeft: 8 }}
                name="lock1"
                size={24}
                color="white"
              />
              <TextInput
              
              value={password}
              onChangeText={(text) => setpassword(text)}
                secureTextEntry={true}
                placeholder="Enter your password"
                style={{
                  color: "black",
                  marginVertical: 10,
                  width: 300,
                  fontSize: 17,
                }}
                placeholderTextColor="white"
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
          
          </View>

          <View style={{ marginTop: 15 }} />

          <Pressable
       onPress={()=>router.push("/Login")}
            style={{
              width: 150,
              backgroundColor: "green",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
       
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Register
            </Text>
          </Pressable>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:6}}>
          <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
             Already have an Account?
            </Text>
          <Pressable
            onPress={() => router.replace("/Login")}
            
          >
            <Text style={{ textAlign: "center", color: "#007FFF", fontSize: 16 }}>
              Sign In
            </Text>
          </Pressable></View>
        </View>
        </View>
  </SafeAreaView>
  )
            }

const styles = StyleSheet.create({})