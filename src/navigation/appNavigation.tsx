import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/signup/SignUpScreen';
import RemovePasswordScreen from '../screens/removepassword/RemovePasswordScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='RemovePassword' screenOptions={{headerShown: false}}>
                <Stack.Screen name='RemovePassword' component={RemovePasswordScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}