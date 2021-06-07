import React from 'react'
import Splash from '../components/splash/ChildComponent/Splash';
import Home from '../components/home/ChildComponent/Home';
import AddPost from '../components/home/ChildComponent/AddPost';
import { navigationRef } from './RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default () => {

    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator headerMode="none" initialRouteName="Splash">
                <Stack.Screen component={Splash} name="Splash" />
                <Stack.Screen component={Home} name="Home" />
                <Stack.Screen component={AddPost} name="AddPost" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}