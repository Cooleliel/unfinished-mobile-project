import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import Home from '../../screens/home';
import Calendar from '../../screens/calendar';
import TontinePage from '../../screens/TontinePage';
import Account from '../../screens/account';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={'#FFFFFF'}
            activeIndicatorStyle={{
                height: 120,
                width: 60,
                backgroundColor: '#2E8B57',
                paddingTop: 50
            }}
            inactiveColor={'#2E8B57'}
            barStyle={{ backgroundColor: theme.colors.surface }}
            >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name="magnify" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name="calendar-range" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="TontinePage"
                component={TontinePage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name="currency-usd" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name="account-cog" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    activeIconContainer: {
        backgroundColor: '#2E8B57', // Fond vert pour l'icône active
        padding: 10,
        borderRadius: 30,
        marginTop: -20, // Pour dépasser légèrement la barre de navigation
        height: 80, // Hauteur accrue pour l'onglet actif
        justifyContent: 'center',
        alignItems: 'center',
    },
    inactiveIconContainer: {
        backgroundColor: 'transparent', // Fond transparent pour les onglets inactifs
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
