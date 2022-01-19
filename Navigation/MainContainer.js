import * as React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import HomeScree from './Screens/HomeScree'
import DetailScreen from './Screens/DetailScreen'
import SettingScreen from './Screens/SettingScreen'


// screena names
const homeName='Home'
const detailName='Detail'
const settingName='Setting'


export default MainContainer =()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconaname;
                    let rn=route.name

                    if(rn=== homeName){
                        iconaname=focused ? 'home' : 'home-outline'
                    }else if(rn=== detailName){
                        iconaname=focused ? 'list' : 'list-outline'
                    }else if(rn=== settingName){
                        iconaname=focused ? 'settings' : 'settings-outline'
                    }
                    return <Ionicons name={iconaname} size={size} color={color} />
                }
            })}
               
            >
                <Tab.Screen name={homeName} component={HomeScree} />
                <Tab.Screen name={detailName} component={DetailScreen} />
                <Tab.Screen name={settingName} component={SettingScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}