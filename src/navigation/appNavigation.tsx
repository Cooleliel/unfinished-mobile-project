import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/signin/SignInScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
                <Stack.Screen name='SignIn' component={SignInScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}