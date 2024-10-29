import * as React from 'react';
import { Image, StyleSheet, View, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseStyles } from '../../styles/baseStyles';
import { useEffect, useRef, useState } from 'react';
import { Brand } from '../../components/brand';
import { COLORS } from '../../constants/themes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation} from '@react-navigation/native';


// Définition des types pour la navigation
type RootStackParamList = {
    OnBoarding: undefined;
    BottomTab: undefined;
    SignIn: undefined
};

// Création d'un type spécifique pour la navigation Native Stack
type OnBoardingNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'OnBoarding'
>;

const { width, height } = Dimensions.get('window');

function OnBoarding() {

     // Utilisation du type spécifique pour la navigation
    const navigation = useNavigation<OnBoardingNavigationProp>();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // Créer deux valeurs d'animation pour les cercles
    const topCircleOpacity = useRef(new Animated.Value(0)).current;
    const bottomCircleOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Attendre 2 secondes avant de démarrer l'animation
        const timer = setTimeout(() => {
            // Animation des cercles
            Animated.parallel([
                Animated.timing(topCircleOpacity, {
                    toValue: 1,
                    duration: 1000, // 1 seconde pour l'animation
                    useNativeDriver: true,
                }),
                Animated.timing(bottomCircleOpacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]).start();
        }, 2000); // Délai de 2 secondes

        // Nettoyage
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Timer pour la navigation
        const navigationTimer = setTimeout(() => {
            isLoggedIn 
                ? navigation.replace('BottomTab') 
                : navigation.replace('SignIn');
        }, 4000); // 4000ms = 2s pour le délai initial + 2s après l'animation

        // Nettoyage du timers
        return () => {
            clearTimeout(navigationTimer);
        };
    }, [navigation])

    return (
        <SafeAreaView style={baseStyles.container}>
            <View style={[baseStyles.container, baseStyles.flexCenter]}>
                <Animated.View 
                    style={[
                        styles.circle, 
                        {
                            top: '-15%', 
                            left: '-25%', 
                            width: width * 0.7, 
                            height: width * 0.7,
                            opacity: topCircleOpacity,
                        }
                    ]}
                />
                <Brand/>
                <Animated.View 
                    style={[
                        styles.circle, 
                        {
                            bottom: '-15%', 
                            right: '-25%', 
                            width: width * 0.7, 
                            height: width * 0.7,
                            opacity: bottomCircleOpacity,
                        }
                    ]}
                />
            </View>
        </SafeAreaView>
    );
}

export default OnBoarding;

const styles = StyleSheet.create({
    circle: {
        padding: 50, 
        borderRadius: 999,
        backgroundColor: COLORS.primary,
        position: 'absolute'
    }
});