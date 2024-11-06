import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseStyles } from "../../styles/baseStyles";
import { COLORS } from "../../constants/themes";
import { Brand } from "../../components/brand";
import { CustomTextInput } from "../../components/customTextInput";
import { CustomContainedButton } from "../../components/customButton";
import { CustomNumericInput } from "../../components/customNumericInput";

type RootStackParamList = {
    ResetPassword: undefined;
    SignIn: undefined
};

type ResetPasswordNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ResetPassword'
>;

function ResetPassword() {

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

    const navigation = useNavigation<ResetPasswordNavigationProp>();

    return(
        <SafeAreaView style={[baseStyles.container, {padding: 50}]}>
            <View style={{flexGrow: 0.3}}>
                <Text variant={isSmallMobile ? 'bodyLarge' : isMediumMobile ? 'headlineLarge' : 'displayLarge'} style={{color: COLORS.primary, fontWeight: 'bold'}}>
                    Reset Password
                </Text>
                <Brand
                    style={{
                        width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                        height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                        
                    }}
                />                
                <Text variant={isSmallMobile ? 'labelLarge' : isMediumMobile ? 'headlineSmall' : 'displayMedium'} style={{fontWeight: 'bold'}}>code d'authentification</Text>
                <View style={{
                    marginVertical: 10,
                    width: 70, 
                    height: 5, 
                    borderWidth: 2, 
                    borderColor: COLORS.primary, 
                    borderRadius: 999, 
                    backgroundColor: COLORS.primary
                    }}
                ></View>
            </View>

            <View style={{flexGrow: 0.3, rowGap: 20}}>
                <Text style={{textAlign: 'center'}} variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyLarge' : 'headlineLarge'}>
                    Saisissez le code d'authentification envoyé sur votre adresse mail
                </Text>
                <View style={[baseStyles.flexRow, {columnGap: 20, justifyContent: 'center', alignItems: 'center'}]}>
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
                <Text style={{textAlign: 'center', fontWeight: 'bold'}} variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'bodyLarge' : 'headlineLarge'}>
                    Renvoyez le code dans 45 secondes
                </Text>
            </View>

            <View style={{flexGrow: 0.5, rowGap: 10, justifyContent: 'center'}}>
                <CustomTextInput
                    placeholder="Nouveau mot de passe" 
                    icon="lock-reset"
                    containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                    iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                    contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                />
                <CustomTextInput
                    placeholder="Confrimer le mot de passe" 
                    icon="lock-reset"
                    containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                    iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                    contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                />
                <CustomContainedButton
                    label="Enregistrer"
                    uppercase={true}
                    onPress={() => navigation.navigate('SignIn')}
                    styles={{height: isSmallMobile ? height/13 : isMediumMobile ? height/12 : isLargeMobile ? height/11 : height/10, marginTop: 30}}
                    labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
                />
            </View>
        </SafeAreaView>
    );
}

export  default ResetPassword;