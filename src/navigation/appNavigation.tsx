import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from '../screens/signup/SignUpScreen';
import RemovePasswordScreen from '../screens/resetpassword/ResetPasswordScreen';
import CheckScreen from '../screens/check/CheckScreen';
import DetailModeScreen from '../screens/detailmode/DetailModeScreen';
import DetailTontineScreen from '../screens/detailtontine/DetailTontineScreen';
import DetailMaTontineScreen from '../screens/detailmatontine/DetailMaTontineScreen';
import ConfirmationTontineScreen from '../screens/confirmationtontine/ConfirmationTontineScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import TontineScreen from '../screens/tontine/OffersTontineScreen';
import TontineTopTabComponent from '../components/tontinetoptab/TontineTopTabComponent';
import TontinePageScreen from '../screens/tontine/TontinePageScreen';
import HomeScreen from '../screens/home/HomeScreen';
import HistoricsScreen from '../screens/historics/HistoricsScreen';
import BottomTabComponent from '../components/bottomtab/BottomTabComponent';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SignInScreen from '../screens/signin/SignInScreen';
import OnBoardingScreen from '../screens/onboarding/OnBoardingScreen';
import ForgotPasswordScreen from '../screens/forgotpassword/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/resetpassword/ResetPasswordScreen';
import CongratulationsScreen from '../screens/congratulations/CongratulationsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
                    <Stack.Screen name='Profile' component={ProfileScreen}/>
                    <Stack.Screen name='BottomTab' component={BottomTabComponent}/>
                    <Stack.Screen name='Check' component={CheckScreen}/>
                    <Stack.Screen name='ConfirmationTontine' component={ConfirmationTontineScreen}/>
                    <Stack.Screen name='TontinePage' component={TontinePageScreen}/>
                    <Stack.Screen name='Tontine' component={TontineScreen}/>
                    <Stack.Screen name='TontineTopTab' component={TontineTopTabComponent}/>
                    <Stack.Screen name='DetailMaTontine' component={DetailMaTontineScreen}/>
                    <Stack.Screen name='DetailMode' component={DetailModeScreen}/>
                    <Stack.Screen name='Historics' component={HistoricsScreen}/>
                    <Stack.Screen name='Home' component={HomeScreen}/>
                    <Stack.Screen name='Settings' component={SettingsScreen}/>
                    <Stack.Screen name='SignUp' component={SignUpScreen}/>
                    <Stack.Screen name='SignIn' component={SignInScreen}/>
                    <Stack.Screen name='OnBoarding' component={OnBoardingScreen}/>
                    <Stack.Screen name='ResetPassword' component={ResetPasswordScreen}/>
                    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
                    <Stack.Screen name='Congratulations' component={CongratulationsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}