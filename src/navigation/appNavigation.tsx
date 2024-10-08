import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/signup/SignUpScreen';
import RemovePasswordScreen from '../screens/removepassword/RemovePasswordScreen';
import CheckScreen from '../screens/check/CheckScreen';
import DetailModeScreen from '../screens/detailmode/DetailModeScreen';
import DetailTontineScreen from '../screens/detailtontine/DetailTontineScreen';
import DetailMaTontineScreen from '../screens/detailmatontine/DetailMaTontineScreen';
import ConfirmationTontineScreen from '../screens/confirmationtontine/ConfirmationTontineScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ConfirmationTontine' screenOptions={{headerShown: false}}>
                <Stack.Screen name='ConfirmationTontine' component={ConfirmationTontineScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}