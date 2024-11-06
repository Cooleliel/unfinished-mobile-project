import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignIn from '../screens/signin';
import OnBoarding from '../screens/onboarding';
import SignUp from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';
import ResetPassword from '../screens/resetpassword';
import BottomTab from '../components/bottomtab';
import DetailTontine from '../screens/detailtontine';
import DetailMode from '../screens/detailmode';
import Congratulations from '../screens/congratulations';
import ConfirmationTontine from '../screens/confirmationtontine';
import Check from '../screens/check';
import DetailMaTontine from '../screens/detailmatontine';
import Profile from '../screens/profile';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{headerShown: false}}>
                    <Stack.Screen name='OnBoarding' component={OnBoarding}/>
                    <Stack.Screen name='SignUp' component={SignUp}/>
                    <Stack.Screen name='BottomTab' component={BottomTab}/>
                    <Stack.Screen name='SignIn' component={SignIn}/>
                    <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
                    <Stack.Screen name='ResetPassword' component={ResetPassword}/>
                    <Stack.Screen name='DetailTontine' component={DetailTontine}/>
                    <Stack.Screen name='DetailMode' component={DetailMode}/>
                    <Stack.Screen name='Congratulations' component={Congratulations}/>
                    <Stack.Screen name='ConfirmationTontine' component={ConfirmationTontine}/>
                    <Stack.Screen name='Check' component={Check}/>
                    <Stack.Screen name='DetailMaTontine' component={DetailMaTontine}/>
                    <Stack.Screen name='Profile' component={Profile}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}