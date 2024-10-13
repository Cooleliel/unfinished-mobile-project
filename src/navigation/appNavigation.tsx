import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from '../screens/signup/SignUpScreen';
import RemovePasswordScreen from '../screens/removepassword/RemovePasswordScreen';
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

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='BottomTab' screenOptions={{headerShown: false}}>
                    <Stack.Screen name='BottomTab' component={BottomTabComponent}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}