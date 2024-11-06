import React, { useState } from "react";

import {View, StyleSheet, Image, ImageBackground, useWindowDimensions, ScaledSize} from 'react-native';
import {Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomTextInput } from "../../components/customTextInput";
import { CustomContainedButton, CustomTextButton } from "../../components/customButton";
import { COLORS, FONTS, LAYOUT } from "../../constants/themes";
import { baseStyles } from "../../styles/baseStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";

type RootStackParamList = {
    BottomTab: undefined;
    SignIn: undefined
    SignUp: undefined;
    ForgotPassword: undefined;
};

type SignInNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignIn'
>;

function SignIn() {

    const navigation = useNavigation<SignInNavigationProp>();

    const [password, setPassword] = useState<string>("");
    const onChangePassword = (password: string) => setPassword(password);
    const [checked, setChecked] = useState<boolean>(false);

    const toggleChecked = () => {
        setChecked(prevState => !prevState);
    };

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

    return(
        <SafeAreaView style={baseStyles.container}>
            <ImageBackground
                source={require('../../assets/images/login.jpeg')}
                style={{flex: 1 }}
                imageStyle={{resizeMode: 'contain', top: '-45%'}}
            >
                <View style={styles.container}>
                    <View style={[{flex: 0.6}, baseStyles.flexCenter]}>
                        <Text variant={isSmallMobile ? 'titleLarge' : isMediumMobile ? 'headlineLarge' : 'displayLarge'} style={baseStyles.boldAndWhiteText}>Connexion</Text>
                    </View>
                    
                    <View style={[{flex: 0.8, paddingHorizontal: scale(20), paddingVertical: verticalScale(10)}, baseStyles.containerBorderTopRadius]}>
                        <View style={styles.formContainer}>
                            <View style={[{flex: 0.5, marginVertical: verticalScale(10)}, baseStyles.flexCenter]}>
                                <Image 
                                    source={require('../../assets/images/sangimmo.webp')} 
                                    style={{
                                        width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                                        height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                                    }} 
                                    resizeMode="contain"
                                />
                            </View>
                            <CustomTextInput
                                icon="phone"
                                placeholder="Telephone"
                                containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                                iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                                contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                            />

                            <CustomTextInput
                                icon="lock"
                                placeholder="Mot de passe"
                                containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                                iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                                contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                            />
                            <View style={[baseStyles.flexRow, {alignItems: "center", justifyContent: 'space-between'}]}>
                            
                                <CustomTextButton
                                    label="Se souvenir de moi."
                                    icon={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                    onPress={() => setChecked(!checked)}
                                    labelStyle={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22}}
                                />
                                <CustomTextButton
                                    label="Mot de passe oublie."
                                    onPress={() => navigation.navigate('ForgotPassword')}
                                    labelStyle={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22}}
                                />
                            </View>
                            <CustomContainedButton
                                label="Connexion"
                                onPress={() => navigation.navigate('BottomTab')}
                                styles={{height: isSmallMobile ? height/13 : isMediumMobile ? height/12 : isLargeMobile ? height/11 : height/10}}
                                labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
                                
                            />
                            <View style={[baseStyles.flexRow, baseStyles.flexCenter]}>
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22
                                    }}>Pas de compte ?</Text>
                                <CustomTextButton
                                    label="Créez-en un maintenant."
                                    textColor={COLORS.primary}
                                    onPress={() => navigation.navigate('SignUp')}
                                    labelStyle={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22}}
                                />
                            </View>

                        </View>

                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>
        
        
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    formContainer: {
        flex: 1,
        marginVertical: 5
    }
});