import * as React from 'react'

import { View,Text } from 'react-native'

export default ChatScreen =({navigation})=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:26}}>This is Chatt screen</Text>
        </View>
    )
}