import React from 'react'
import Splash from '../components/splash/ChildComponent/Splash';
import { navigationRef } from './RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default () => {

    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator headerMode="none" initialRouteName="Splash">
                <Stack.Screen component={Splash} name="Splash" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}