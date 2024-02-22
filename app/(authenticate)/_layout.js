import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const Layout = () => {
  return (
   <Stack screenOptions={{headerShown:false}}>
<Stack.Screen name='Login'/>
<Stack.Screen name='register'/>
<Stack.Screen name='select'/>
   </Stack>
)}

export default Layout

const styles = StyleSheet.create({})