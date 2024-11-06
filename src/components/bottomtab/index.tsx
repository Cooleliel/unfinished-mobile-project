import React from 'react';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Calendar from '../../screens/calendar';
import TontinePage from '../../screens/TontinePage';
import Account from '../../screens/account';
import { ScaledSize, useWindowDimensions } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTab() {

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    const theme = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFFFFF',
                tabBarActiveBackgroundColor: '#2E8B57',
                tabBarInactiveTintColor: '#2E8B57',
                tabBarInactiveBackgroundColor:'#FFFFFF', 
                tabBarStyle: { 
                    backgroundColor: theme.colors.surface ,
                    height: isSmallMobile ? 40 : 70,
                },
                tabBarItemStyle: {
                    borderRadius: 4,
                    marginHorizontal: 20,                }
                
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="magnify" color={color} size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="calendar-range" color={color} size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} />
                    ),
                }}
            />
            <Tab.Screen
                name="TontinePage"
                component={TontinePage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="currency-usd" color={color} size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="account-cog" color={color} size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}