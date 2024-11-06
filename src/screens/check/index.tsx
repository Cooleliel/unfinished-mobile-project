import React from "react";
import { Image, ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomContainedButton } from "../../components/customButton";
import { Brand } from "../../components/brand";
import { baseStyles } from "../../styles/baseStyles";
import { COLORS, FONTS, LAYOUT } from "../../constants/themes";
import { CustomNumericInput } from "../../components/customNumericInput";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    BottomTab: undefined;
    Check: undefined
};

type CheckNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Check'
>;

function Check() {

    const navigation = useNavigation<CheckNavigationProp>();

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

    return(
        <SafeAreaView style={[baseStyles.container, {padding: LAYOUT.spacing.lg*2}]}>
            <View style={{flexGrow: 0.3}}>
                <Text variant={isSmallMobile ? 'bodyLarge' : isMediumMobile ? 'headlineLarge' : 'displayLarge'} style={{color: COLORS.primary, fontWeight: FONTS.weights.bold}}>
                    Verification sur
                </Text>
                <Brand
                    style={{
                        width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                        height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                        
                    }}
                />
                <Text variant={isSmallMobile ? 'labelLarge' : isMediumMobile ? 'headlineSmall' : 'displayMedium'} style={{fontWeight: FONTS.weights.bold}}>code d'authentification</Text>
                <View style={{
                    marginVertical: LAYOUT.spacing.sm,
                    width: 70, 
                    height: 8, 
                    borderWidth: LAYOUT.border.width.thick, 
                    borderColor: COLORS.primary, 
                    borderRadius: LAYOUT.zIndex.maximum, 
                    backgroundColor: COLORS.primary
                    }}
                ></View>
            </View>

            <View style={{flexGrow: 0.3}}>
                <Text style={{textAlign: 'center'}} variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyLarge' : 'headlineLarge'}>
                    Saisissez le code d'authentification envoyé sur votre adresse mail
                </Text>
                <View style={[baseStyles.flexRow, {justifyContent: 'space-around', alignItems: 'center', marginTop: LAYOUT.spacing.lg*2, marginBottom: LAYOUT.spacing.md}]}>
                    <CustomNumericInput
                        style={{
                            width: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                            height: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                        }}
                    />
                    <CustomNumericInput
                        style={{
                            width: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                            height: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                        }}
                    />
                    <CustomNumericInput
                        style={{
                            width: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                            height: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                        }}
                    />
                    <CustomNumericInput
                        style={{
                            width: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                            height: isSmallMobile ? height/22 : isMediumMobile ? height/18 : height/14,
                        }}
                    />
                </View>
                <CustomContainedButton
                    label="Verification"
                    uppercase={true}
                    onPress={() => navigation.replace('BottomTab')}
                    styles={{height: isSmallMobile ? height/14 : isMediumMobile ? height/13 : isLargeMobile ? height/12 : height/10, marginTop: 30}}
                    labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
                />
                <Text style={{textAlign: 'center', fontWeight: FONTS.weights.bold, marginTop: LAYOUT.spacing.sm}} variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'bodyLarge' : 'headlineLarge'}>
                    Renvoyez le code dans 45 secondes
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default Check;