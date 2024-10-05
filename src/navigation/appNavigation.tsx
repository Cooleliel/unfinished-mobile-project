import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/onboarding/OnBoardingScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{headerShown: false}}>
                <Stack.Screen name='OnBoarding' component={OnBoardingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}