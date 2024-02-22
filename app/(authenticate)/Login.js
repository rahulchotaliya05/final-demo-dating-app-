import { SafeAreaView, StyleSheet, Text, View ,Image, KeyboardAvoidingView, TextInput, Pressable, Alert} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import axios from 'axios';
export default function Login() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // const handlelogin = () => {
    //   console.log("aaaadsdasdsadsf")
    //   const user = {
    //     email: email,
    //     password: password,
    //   };
    //   axios.get("http://localhost:3000/auth/login",user).then((response) => {
    //       console.log(response.json());
    //       const token = response.data.token;
    //       AsyncStorage.setItem("auth",token);
    //       router.replace("/(authenticate)/select")
    //   })
    // };
    const router=useRouter()
  return (
  <SafeAreaView style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
    <View style={{height:200,backgroundColor:'pink',width:'100%'}} >
        <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
        <Image
    style={{ width: 100, height: 80, resizeMode: "contain" }}
    source={{
      uri: "https://cdn-icons-png.flaticon.com/128/6655/6655045.png",
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
                welcome back to your Account
            </Text>
        </View>
  
  {/* <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
  <Image
    style={{ width: 100, height: 50, resizeMode: "cover" }}
    source={{
      uri: "https://cdn-icons-png.flaticon.com/128/2509/2509078.png",
    }}
  />
  </View> */}

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
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="white"
            />
            <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
        
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
                backgroundColor: "pink",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
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
              onChangeText={(text) => setPassword(text)}
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
            <Text>Keep me logged in</Text>

            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              Forgot Password
            </Text>
          </View>

          <View style={{ marginTop: 50 }} />

          <Pressable  onPress={()=>router.replace("/(authenticate)/select")}
      
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
              Login
            </Text>
          </Pressable>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:12}}>
          <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
             Don't have an Account?
            </Text>
          <Pressable
            onPress={() => router.replace("/register")}
            
          >
            <Text style={{ textAlign: "center", color: "#007FFF", fontSize: 16 }}>
              Sign Up
            </Text>
          </Pressable></View>
        </View>
        </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({})