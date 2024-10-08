import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/signup/SignUpScreen';
import RemovePasswordScreen from '../screens/removepassword/RemovePasswordScreen';
import CheckScreen from '../screens/check/CheckScreen';
import DetailModeScreen from '../screens/detailmode/DetailMode';
import DetailTontineScreen from '../screens/detailtontine/DetailTontine';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DetailTontine' screenOptions={{headerShown: false}}>
                <Stack.Screen name='DetailTontine' component={DetailTontineScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}