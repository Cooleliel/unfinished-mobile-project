import * as React from 'react';
import { Image, StyleSheet, View, Dimensions, Animated, ScaledSize, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseStyles } from '../../styles/baseStyles';
import { useEffect, useRef, useState } from 'react';
import { Brand } from '../../components/brand';
import { COLORS } from '../../constants/themes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Définition des types pour la navigation
type RootStackParamList = {
    OnBoarding: undefined;
    BottomTab: undefined;
    SignIn: undefined;
};

// Création d'un type spécifique pour la navigation Native Stack
type OnBoardingNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'OnBoarding'
>;

// Obtenir les dimensions initiales de l'écran
const { width, height } = Dimensions.get('window');

function OnBoarding() {
    // Utilisation du type spécifique pour la navigation
    const navigation = useNavigation<OnBoardingNavigationProp>();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // Créer deux valeurs d'animation pour les cercles
    const topCircleOpacity = useRef(new Animated.Value(0)).current;
    const bottomCircleOpacity = useRef(new Animated.Value(0)).current;

    const { width, height } : ScaledSize = useWindowDimensions();

    // Détecter les changements de dimension et mettre à jour en conséquence
    const [screenDimensions, setScreenDimensions] = useState({ width, height });

    

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;


    useEffect(() => {
        // Fonction pour gérer la mise à jour des dimensions
        const onChange = ({ window: { width, height } }: { window: any }) => {
            setScreenDimensions({ width, height });
        };

        const subscription = Dimensions.addEventListener('change', onChange);

        // Nettoyage de l'event listener
        return () => subscription.remove();
    }, []);

    useEffect(() => {
        // Attendre 2 secondes avant de démarrer l'animation
        const timer = setTimeout(() => {
            Animated.parallel([
                Animated.timing(topCircleOpacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(bottomCircleOpacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]).start();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const navigationTimer = setTimeout(() => {
            isLoggedIn ? navigation.replace('BottomTab') : navigation.replace('SignIn');
        }, 4000);

        return () => {
            clearTimeout(navigationTimer);
        };
    }, [navigation]);

    return (
        <SafeAreaView style={baseStyles.container}>
            <View style={[baseStyles.container, baseStyles.flexCenter]}>
                <Animated.View
                    style={[
                        styles.circle,
                        {
                            top: '-15%',
                            left: '-25%',
                            width: screenDimensions.width * 0.7,
                            height: screenDimensions.width * 0.7,
                            opacity: topCircleOpacity,
                        },
                    ]}
                />
                <Brand 
                    style={{
                        width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                        height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                        
                    }}
                />
                <Animated.View
                    style={[
                        styles.circle,
                        {
                            bottom: '-15%',
                            right: '-25%',
                            width: screenDimensions.width * 0.7,
                            height: screenDimensions.width * 0.7,
                            opacity: bottomCircleOpacity,
                        },
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
        position: 'absolute',
    },
});
