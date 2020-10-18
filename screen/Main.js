import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Component } from 'react'
import {Button,View,Text} from 'react-native'

export default class Main extends Component{
    state={
        news:{},
        time:new Date(),
    }
    render(){
        return(
            <View>
                <Text></Text>
                <Button title="Check Status" color="#79D58A"></Button>
                <Text>NEWS</Text>
                <Text></Text>
                <View>
                    <Text>Daily Advisory</Text>
                    <Text></Text>
                </View>
                <Text></Text>
            </View>
        )
}
}
