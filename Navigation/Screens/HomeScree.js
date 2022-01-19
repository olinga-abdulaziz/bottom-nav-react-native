import * as React from 'react'

import { View,Text, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from './ChatScreen';

function Home({navigation}) {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:26}}>This is HOME screen</Text>
            <View style={{width:'50%'}}>
                <Button title='Chats' onPress={()=>navigation.navigate('Chat')} />
            </View>
        </View>
    )
}


const Stack=createNativeStackNavigator()

export default HomeScreen =({navigation})=>{
    return (
      <Home />
    )
}