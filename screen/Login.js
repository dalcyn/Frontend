import React from'react'
import {Component} from 'react'
import { Text,View,StyleSheet } from 'react-native'
import {Button,TextInput} from 'react-native-paper'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.Main_view}>
                <Text style={{fontSize:40,textAlign:"center"}}>Login</Text>
               <TextInput label="Email" mode="outlined" style={{margin:5}}/>
               <TextInput label="Password" mode="outlined" style={{margin:5}}/>
               <Button mode="contained" color="#79D58A"style={{margin:5}} >Login</Button>
            </View>
        )
}}

const styles=StyleSheet.create({
    Main_view:{
    }
})